import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { presistor, store } from './redux/store.js';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  
  //<React.StrictMode>
  <QueryClientProvider client = {queryClient}>
      <Provider store={store}>
      <PersistGate persistor={presistor} loading={null}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false}/>
    </PersistGate>
    </Provider>
    </QueryClientProvider>
  //</React.StrictMode>
);
reportWebVitals();
