import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-lke06tkgys81lrx3.us.auth0.com"
    clientId="a9xHpbPC56GCLovlt4lEPphDPCKQmbMw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Auth0Provider>
  
  
);


