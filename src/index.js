import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing redux functions and reducers
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// importing toolkit reducers
import hangmanReducer from './features/Hangman';
import lettersReducer from './features/Letters';
import wordLineReducer from './features/WordLine';
import controlReducer from './features/Controls';
import wordReducer from './features/Word';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    hangman: hangmanReducer,
    letters: lettersReducer,
    wordLine: wordLineReducer,
    controls: controlReducer,
    word: wordReducer,
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
