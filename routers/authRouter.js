const {check, validationResult} = require('express-validator')
const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const assert = require("assert");
const authRouter = Router()


authRouter.get("/user/:id", async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id});
        return res.json(user)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

authRouter.put("/update/:id", async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body})
            return res.json(user);
        } catch (err) {
            return res.status(400).json({message: err.message});
        }
    }
);


authRouter.post('/register', [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
        check('name', 'Минимальная длина логина 2 символа').isLength({min: 2}),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при регистрации'
                })
            }
            const {name, email, password, age, sex, city} = req.body
            const isExistUser = await User.findOne({email})
            if (isExistUser) {
                return res.status(400).json({message: 'Пользователь уже существует'})
            }
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = new User({name, email, age, sex, city, password: hashedPassword})
            await newUser.save()
            res.json({message: 'Аккаунт создан!'})
        } catch (e) {
            res.status(500).json({message: 'Ошибка'})
        }
    })

authRouter.post('/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtKey'),
                {expiresIn: '1h'}
            )


            return res.json({token, userId: user.id, message: "Вы вошли!"})

        } catch (e) {
            res.status(500).json({message: 'Ошибка'})
        }
    }
)


module.exports = authRouter