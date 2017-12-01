/* global module: true */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import VAPID from './../private/vapid.json';

import 'file-loader?name=./web-app-manifest.json!./web-app-manifest.json';
import 'file-loader?name=./img/ic_add_white_24px.svg!./img/ic_add_white_24px.svg';
import 'file-loader?name=./img/ic_refresh_white_24px.svg!./img/ic_refresh_white_24px.svg';
import 'worker-loader?name=./service-worker.js!./service-worker.js';

ReactDOM.render((<App />), document.getElementById('root'));

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

let subscribeOptions = {
  userVisibleOnly: true,
  applicationServerKey: urlBase64ToUint8Array(
    VAPID.publicKey
  )
};

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(registration => {
    console.info('SERVICE WORKER REGISTERED');

    return registration.pushManager.subscribe(subscribeOptions)
      .then(pushSubscription => {
        return fetch('https://localhost:3100/api/push-subscription', {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(pushSubscription)
        })
      })
  });
}
if (module.hot) {
  module.hot.accept(function () {
    console.log('Accepting the updated printMe module!');
  });
}