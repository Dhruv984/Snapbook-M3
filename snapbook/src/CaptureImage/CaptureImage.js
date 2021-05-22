import React,{useRef} from 'react'
import './CaptureImage.css'

//context
import { useStateValue} from '../context_reducers/ImageContext'

//components
import Webcam from 'react-webcam'
import { action_types } from '../context_reducers/ImageReducer';
//router
import {useHistory} from 'react-router-dom';



const videoConstraints = {
    width: 200,
    height: 400,
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
          history.push('/capture/preview')
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
             <div >
              <button className='captureImage__button' onClick={capture}>CAPTURE</button>
              {console.log(state.imageCapture)}
            </div>
        </div>
    )
}

export default CaptureImage
