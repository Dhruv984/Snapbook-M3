import React,{useEffect,useState} from 'react'
import './ChatScreen.css'

//components
import CameraSection from '../CaptureImage/CameraSection'
import Message from '../Messages/Message'

//firebase
import {db} from '../firebase'


function ChatScreen() {
    
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
       db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>{
           setPosts(snapshot.docs.map(doc=>({
               id:doc.id,
               data:doc.data()
           })))
       })
    },[])

    return (
        <div className='chatScreen chatScreen__gridContainer'>
                <div className='chatScreen__innerGridContainer'>
                    <div className='chatScreen__messages'>
                      {
                          posts.map(({id,data:{imageUrl,read, timestamp,userImage,userName}})=>{
                              return <Message id={id} imageUrl={imageUrl} timestamp={timestamp} userImage={userImage} userName={userName} read={read}/>
                          })
                      }
                    </div>
                    <div className='footer'>
                      <CameraSection/>
                    </div>
                 </div>
            
        </div>
    )
}

export default ChatScreen
