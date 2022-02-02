import {useCallback, useState} from 'react'


export const useRequest = () => {
    const [error, setError] = useState(null)
    const clearError = useCallback(() => setError(null), [])

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch('https://twitter-clone-serv.herokuapp.com' + url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            return data

        } catch (e) {
            setError(e.message)
            throw e
        }


    }, [])


    return {request, error, clearError}
}