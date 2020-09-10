import React from 'react';
import ReactDOM from 'react-dom';

// import state, {newDeal} from './state'
import App from './components/App/App'






export let rerander = () => {
  ReactDOM.render(

  
    <App />

  
  , document.getElementById('root'));

}

rerander();