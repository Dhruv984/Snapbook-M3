import React from 'react'
import './CameraSection.css'
//mui
import CameraAltIcon from '@material-ui/icons/CameraAlt';
//router
import {useHistory} from 'react-router-dom';

function CameraSection() {
    const history=useHistory();

    const camera=()=>{
        history.push('/capture')
    }

return (
    <div className='cameraSection'>
                     
        <CameraAltIcon onClick={camera}/>
            
    </div>
    )
}

export default CameraSection
