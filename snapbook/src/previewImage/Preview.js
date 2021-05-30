import React, { useEffect } from 'react'
import './Preview.css'

import { useHistory } from 'react-router';
import { v4 as uuid } from 'uuid'
//firebase
import firebase from 'firebase'
import { db, storage } from '../firebase';

//context
import { useStateValue } from '../context_reducers/ImageContext'
import { action_types } from '../context_reducers/ImageReducer';


import { useLoginStateValue } from '../context_reducers/LoginContext';
function Preview() {
    const [{ imageCapture }, dispatch] = useStateValue();
    const[{userInfo}]=useLoginStateValue();
    
    const history = useHistory();
    useEffect(() => {
        if (!imageCapture) {
            history.replace('/');
        }
    }, [imageCapture, history])

    const reset = () => {
        dispatch({
            type: action_types.RESET_IMAGE,
            imageCapture: null
        })
    }
    const sendImage = () => {
        const id = uuid();

        // Upload file and metadata to the object 'images/mountains.jpg'
        const uploadTask = storage.ref(`posts/${id}`).putString(imageCapture,'data_url');
        
        uploadTask.on('state_changed',null,(error)=>{
            console.log(error)
        },()=>{
             storage.ref('posts').child(id).getDownloadURL().then((url)=>{
                db.collection('posts').add({
                    imageUrl:url,
                    read:false,
                    userName:userInfo.displayName,
                    userImage:userInfo.photoURL,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()

                })
                history.replace('/chats');
             })
        }
        )

    }
    return (
        <div className='preview'>
            <button className='preview__close' onClick={reset}>X</button>
            <img src={imageCapture} alt='' />
            <button  className='preview__send__image' onClick={sendImage}>send </button>

        </div>
    )
}

export default Preview
