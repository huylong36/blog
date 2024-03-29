import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <SnackbarProvider maxSnack={3} anchorOrigin={{horizontal:'center' , vertical:'top'}} autoHideDuration={5000}>
    <App />
    </SnackbarProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
