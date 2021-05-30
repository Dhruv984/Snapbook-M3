import React,{useRef} from 'react'
import './CaptureImage.css'

//context
import { useStateValue} from '../context_reducers/ImageContext'
import { action_types } from '../context_reducers/ImageReducer';

//components
import Webcam from 'react-webcam'

//router
import {useHistory} from 'react-router-dom';

//mui
import CameraIcon from '@material-ui/icons/Camera';



const videoConstraints = {
    width: 360,
    height: 610,
    facingMode: "user"
  };
 
function CaptureImage() {

    const history= useHistory();
    
    // using ImageContext
    const [state,dispatch]=useStateValue();
    const webcamRef =useRef(null);
    const capture = React.useCallback(() => {
          const imageSrc = webcamRef.current.getScreenshot();
          dispatch({
            type:action_types.SET_IMAGE,
            imageCapture:imageSrc
          })
          history.push('/preview')
        }, [webcamRef]
        
      );
    return (
        <div className='captureImage'>

            <Webcam
             audio={false}
             height={videoConstraints.height}
             ref={webcamRef}
             screenshotFormat="image/jpeg"
             width={videoConstraints.width}
             videoConstraints={videoConstraints}
            />
             <div className='captureImage__button'>
              <CameraIcon  onClick={capture}/>
              {console.log(state.imageCapture)}
            </div>
        </div>
    )
}

export default CaptureImage
