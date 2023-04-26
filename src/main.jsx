// import React from 'react'
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App'
// import { store } from './services/store.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider Store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { Store } from './services/Store';
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={Store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// )

