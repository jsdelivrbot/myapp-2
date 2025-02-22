import React from 'react';
import ReactDOM from 'react-dom';

import { useStrict } from 'mobx'; // <= mobx
import { Provider } from 'mobx-react'; // <= mobx-react

import * as stores from './stores'; // <= 数据

import './assets/less/app.less'; //css
import App from './components/app';  //react-components
import registerServiceWorker from './registerServiceWorker';

// set mobx to strict mode
useStrict(true);

window.appStores = stores; // <= 数据注册在window上，一般情况不用这个获取数据

ReactDOM.render(
	<Provider { ...stores }>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
