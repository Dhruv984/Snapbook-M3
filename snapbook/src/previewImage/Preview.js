import React ,{useEffect} from 'react'
import './Preview.css'

// //mui
// import CloseIcon from '@material-ui/icons/Close';

//context
import { useStateValue} from '../context_reducers/ImageContext'
import { action_types } from '../context_reducers/ImageReducer';
import { useHistory } from 'react-router';
function Preview() {
    const [{imageCapture},dispatch]=useStateValue();
    const history=useHistory();
    useEffect(()=>{
        if(!imageCapture){
            history.replace('/capture');
        }
    },[imageCapture,history])

    const reset=()=>{
        dispatch({
            type:action_types.RESET_IMAGE,
            imageCapture:null
        })
    }
    return (
        <div className='preview'>
            <button className='preview__close' onClick={reset}>X</button>
            <img src={imageCapture} alt=''/>
            
        </div>
    )
}

export default Preview
