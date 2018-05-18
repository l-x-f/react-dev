import React from 'react';
import ReactDOM from 'react-dom';

import Route from './router/index';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


const render = Component => {
    ReactDOM.render(
      //绑定redux、热加载
   
          <Component />
     ,
      document.getElementById('root'),
    )
  }
  render(Route);
registerServiceWorker();
