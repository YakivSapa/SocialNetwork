import reportWebVitals from './reportWebVitals';
import React from 'react';
// import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App';
// import store from './redux/redux-store.js';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import SocialNetwork from './App';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);

// let rerenderEntireTree = (state) => {
//     root.render(   // root / ReactDOM
//         <BrowserRouter>
//             <Provider store={store}>
//             </Provider>
//         </BrowserRouter>
//     );
// }

ReactDOM.render(<SocialNetwork />, document.getElementById('root'));

// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();