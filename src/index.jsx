import React from 'react';
import ReactDOM from 'react-dom';

import './assets/less/app.less'; //css
import App from './components/app';  //react-components
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
