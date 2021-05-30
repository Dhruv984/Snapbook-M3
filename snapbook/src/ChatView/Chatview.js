import React,{useEffect} from 'react'
import './Chatview.css'
import { useHistory } from 'react-router';
//context
import { useStateValue } from '../context_reducers/ImageContext'
//mui
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

function Chatview() {
    const [{selectedImage},dispatch]=useStateValue();
    const history= useHistory();

    useEffect(()=>{
       if(!selectedImage){
           exit()
       }
     },[selectedImage])

    const exit=()=>{
      history.replace('/chats')
    }
    return (
        <div  className='chatview'>
            <img onClick={exit} src={selectedImage} alt=''/>
            <div className='chatview__countdown'>
            <CountdownCircleTimer 
                isPlaying
                duration={10}
                strokeWidth={6}
                size={50}
                colors={
                    [
                        ['#004777',0.33],
                        ['#F7BB01',0.33],
                        ['#A30000',0.33],
                    ]
                }
            >
                {
                    ({remainingTime})=>{
                        if(remainingTime === 0)
                           exit();
                        return remainingTime;
                    }
                }
            </CountdownCircleTimer>
            </div>
           
        </div>
    )
}

export default Chatview
