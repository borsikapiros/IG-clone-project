import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebasecontext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';


ReactDOM.render(
  <Firebasecontext.Provider value={{ firebase, FieldValue }}>

    <App />
  </Firebasecontext.Provider>,
  document.getElementById('root')
);

