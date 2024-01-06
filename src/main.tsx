import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './redux/userSlice'; 

const store = configureStore({
    reducer: {
      user: usersReducer,
    },
  });


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
         <Provider store={store}>

                <App />
         </Provider>
    </React.StrictMode>,
)


