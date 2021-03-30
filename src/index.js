import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {App} from './App';
import "firebase/auth"
import "firebase/firestore"
import "firebase/app"
import "firebase/storage"
import { FirebaseAppProvider} from 'reactfire';
import {firebaseConfig} from './firebase/Config'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
