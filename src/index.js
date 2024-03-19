import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProfileProvider } from './context/Context';

// import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileProvider>
            <App />
        </ProfileProvider>

  </React.StrictMode>
);
reportWebVitals();
