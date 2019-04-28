import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Background from './components/background/Background';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Background />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
