import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Background from './components/background/Background';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CssBaseline } from '@material-ui/core';
import MainMarkLayer from './components/mainmarks/MainMarkLayer';

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <React.Fragment>
        <MainMarkLayer />
        <Background />
      </React.Fragment>
    </CssBaseline>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
