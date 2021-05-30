import React from 'react'
import './Header.css'
//mui
import { Avatar } from '@material-ui/core';
import { auth } from '../firebase';
import { useLoginStateValue } from '../context_reducers/LoginContext';

function Header() {
    const [{userInfo},dispatch]=useLoginStateValue()
    return (
            <div className='header'>
                       <div className='header__user'>
                        <Avatar src={userInfo.photoURL} />
                        <button onClick={()=>{auth.signOut()}}>Logout</button>
                       </div>

            </div>
     
    )
}

export default Header
