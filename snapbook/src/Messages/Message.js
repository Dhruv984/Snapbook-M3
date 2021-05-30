import React from 'react'
import './Message.css'
import {useHistory} from 'react-router-dom'
import ReactTimeago from 'react-timeago'
//mui
import { Avatar } from '@material-ui/core'
import StopIcon from '@material-ui/icons/Stop';
//components
import './Message.css'
//context
import { useStateValue } from '../context_reducers/ImageContext'
import { action_types } from '../context_reducers/ImageReducer'
//firebase
import { db } from '../firebase'

function Message({id,imageUrl,userName,userImage,read,timestamp}) {
    const [{selectedImage},dispatch]=useStateValue();
    const history=useHistory();
    const open=()=>{
        if(!read){
        dispatch({
            type:action_types.SELECTED_IMAGE,
            selectedImage:imageUrl
        })
        db.collection('posts').doc(id).set({
            read:true
        },{
            merge:true
        })
        history.push('/chats/view');
      }
    }
    return (
        <div onClick={open} className='message'>
           <Avatar className='message__Avatar' src={userImage}/>
           <div className='message__info'>
           <h4>{userName}</h4>
           <p>{!read && 'Tap to view -'}{''} <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
           </div>

            {!read && <StopIcon className='message__readIcon'/>}
        </div>
    )
}

export default Message
