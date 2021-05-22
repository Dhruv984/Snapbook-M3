import React from 'react'

//components
import CameraSection from '../CaptureImage/CameraSection'
//mui
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import './ChatScreen.css'

function ChatScreen() {

  
    return (
        <div className='chatScreen chatScreen__gridContainer'>
                <div className='chatScreen__right__innerGridContainer'>
                    <div className='chatScreen__right__header'>
                        <AccountCircleIcon />
                        <CameraSection/>
                    </div>
                    <div className='chatScreen__right__messages'>
                        messages
                    </div>
                    <div className='chatScreen__right__footer'>
                        footer
                    </div>
        </div>
            
            

        </div>
    )
}

export default ChatScreen
