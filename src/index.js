import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index';
import registerServiceWorker from './registerServiceWorker';
const render = Component => {
  ReactDOM.render(
    <Component / > ,
    document.getElementById('app'),
  )
}
render(Route);
registerServiceWorker();