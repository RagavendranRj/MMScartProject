import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App';
// import Messages from './components/messages';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
    {/* <Messages /> */}
  </Provider>
  //</React.StrictMode>
);

