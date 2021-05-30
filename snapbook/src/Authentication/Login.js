import React from 'react'
import './Login.css'

//firebase
import { db, provider } from '../firebase.js';
import { auth } from '../firebase.js'
//context
import { useLoginStateValue } from '../context_reducers/LoginContext'
import { action_types } from '../context_reducers/LoginReducer'
import { useHistory } from 'react-router';



function Login() {

    //Using login context
    const [state, dispatch] = useLoginStateValue();
    const history=useHistory();

    //implementing google authorization
    const login = () => {
        auth.signInWithPopup(provider).then(userLoginInfo => {
            console.log(userLoginInfo)
            dispatch({
                type: action_types.SET_LOGGED_IN,
                userInfo:userLoginInfo.user
            })
            }).catch((err) => {
            alert(err.message);
        })
    }
    return (
        <div className='login'>
            <div className='login__content'>
                <img src='https://www.clipartmax.com/png/middle/203-2037661_logo-sample-earth.png'
                alt=''/>
                <h2>Welcome To</h2>
                <h1>Snapbook</h1>
                <button onClick={login}>Sign in with google</button>
            </div>
        </div>
    )
}

export default Login