import React, {useContext, useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {SignInContext} from "../Authorization/SignInContext";
import {useRequest} from "../hooks/useRequest";
import './EditProfile.css'
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BadgeIcon from '@mui/icons-material/Badge';
import WcIcon from '@mui/icons-material/Wc';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Button} from "@material-ui/core";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function EditProfile() {

    const {request} = useRequest()
    const {userId} = useContext(SignInContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const response = await request(`http://localhost:5000/sign/user/${userId}`)
            setUser(response)
        }
        getUser();
    }, [setUser])

    const [form, setForm] = useState({
        name: user.name,
        age: user.age,
        sex: user.sex,
        city: user.city,
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const updateHandler = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/sign/update/${userId}`, {...form})
        } catch (e) {
        }
    }


    return (
        <Layout>
            <div className={"profile__backBar"}>
                <NavLink to={`/profile/${userId}`} className={'sidebar__link'}>
                    <ArrowBackIcon className={"profile__backIcon"}/>
                </NavLink>
                <div className={"profile__barNameTweets"}>
                    <h4>{user.name}</h4>
                    <p className={"profile__textGray"}>edit profile</p>
                </div>
            </div>

            <div className={'profile-edit'}>

                <div className={'edit-field'}>
                    <BadgeIcon className={"sidebar__twitterIcon"}/>

                    <input className={"edit-input"}
                           placeholder={user.name || 'name'}
                           type='text'
                           name='name'
                           value={form.name}
                           onChange={changeHandler}/>
                </div>

                <div className={'edit-field'}>
                    <DateRangeIcon className={"sidebar__twitterIcon"}/>

                    <input className={"edit-input"}
                           placeholder={user.age || 'age'}
                           type='text'
                           name='age'
                           value={form.age}
                           onChange={changeHandler}/>
                </div>

                <div className={'edit-field'}>
                    <WcIcon className={"sidebar__twitterIcon"}/>

                    <input className={"edit-input"}
                           id='m'
                           type='radio'
                           name='sex'
                           value={'man'}
                           onChange={changeHandler}/>
                    <label for={'m'}>man</label>

                    <input className={"edit-input"}
                           id='g'
                           type='radio'
                           name='sex'
                           value={'girl'}
                           onChange={changeHandler}/>
                    <label htmlFor={'g'}>woman</label>
                </div>

                <div className={'edit-field'}>
                    <LocationOnOutlinedIcon className={"sidebar__twitterIcon"}/>

                    <input className={"edit-input"}
                           placeholder={user.city || 'city'}
                           type='text'
                           name='city'
                           value={form.city}
                           onChange={changeHandler}/>
                </div>

                <Button className={'edit-btn'} onClick={updateHandler}>Edit</Button>


            </div>

        </Layout>
    );

}