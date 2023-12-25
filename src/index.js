import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

let rerenderEntireTree = (state) => {
    root.render(   // root / ReactDOM
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </React.StrictMode>
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();