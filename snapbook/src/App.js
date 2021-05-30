import React,{useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
//firebase
import {auth} from './firebase'

//context
import { useLoginStateValue } from './context_reducers/LoginContext';

//components
import ChatScreen from './ChatScreen/ChatScreen';
import CaptureImage from './CaptureImage/CaptureImage'
import Preview from './previewImage/Preview';
import Header from './Navigation/Header';
import Login from './Authentication/Login'
import Chatview from './ChatView/Chatview';
import { action_types } from './context_reducers/LoginReducer';


function App() {
  const [{userInfo},dispatch]=useLoginStateValue();
  
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:action_types.SET_LOGGED_IN,
          userInfo:authUser
        })
      }else{
        dispatch({
          type:action_types.SET_LOGGED_OUT
        })
      }
    })
  },[])
    
  return (
    <div className="App">
      {
        !userInfo?<Login/>:
      
        <Router>
      <div className='app__content'>
        <Switch>
          <Route  path="/chats/view">
           <Chatview/>
          </Route>
          <Route  path="/chats">
           <Header/>
           <ChatScreen/>
          </Route>
         <Route path="/preview">
            <Preview/>
          </Route>
          <Route exact path="/">
           <CaptureImage/>
          </Route>
        </Switch>
      </div>
    </Router>
}
       
    </div>
  );
}

export default App;

