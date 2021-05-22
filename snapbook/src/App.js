import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

//components
import ChatScreen from './ChatScreen/ChatScreen';
import CaptureImage from './CaptureImage/CaptureImage'
import Preview from './previewImage/Preview';

function App() {
  return (
    <div className="App">
        <Router>
      <div className='app__content'>
        <Switch>
          <Route exact path="/">
           <ChatScreen/>
          </Route>
          <Route exact path="/capture">
           <CaptureImage/>
          </Route>
          <Route exact path="/capture/preview">
            <Preview/>
          </Route>
        </Switch>
      </div>
    </Router>
       
    </div>
  );
}

export default App;

// todo
// store image in storage
// create users
// notification
// share images
// if this is completed today day Time.

