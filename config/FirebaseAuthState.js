import React, { useEffect } from 'react'
import firebase from './firebase'
import { useDispatch } from 'react-redux'

const FirebaseAuthState = ({ children }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                dispatch({
                    type: 'USER_LOGOUT'
                })
            } else {
                const { token } = await user.getIdTokenResult();
                localStorage.setItem('TOKEN', token)

                dispatch({
                    type: 'USER_AUTH_LOGIN_REQUEST'
                })

                dispatch({
                    type: 'USER_PROFILE_REQUEST'
                })

                const res1 = await fetch('/api/firebase/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    }
                })

                const res2 = await fetch('/api/firebase/profile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    }
                })

                const data1 = await res1.json()
                const data2 = await res2.json()

                if (res1.status === 400 || res1.status === 500) {
                    dispatch({
                        type: 'USER_AUTH_LOGIN_FAIL',
                        payload: data1
                    })
                } else {
                    dispatch({
                        type: 'USER_AUTH_LOGIN_SUCCESS',
                        payload: data1
                    })
                }

                if (res2.status === 400 || res2.status === 500) {
                    dispatch({
                        type: 'USER_PROFILE_FAIL',
                        payload: data2
                    })
                } else {
                    dispatch({
                        type: 'USER_PROFILE_SUCCESS',
                        payload: data2
                    })
                }
            }
        })
    }, [dispatch])

    return (
        <>
            {children}
        </>
    )
}

export default FirebaseAuthState
