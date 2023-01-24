import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: 'https://app.unleash-hosted.com/demo/api/proxy',
  clientKey: 'proxy-123',
  appName: 'demo-proxy-default',
  // instanceId: 'my-unique-instance-id',
  environment: 'production',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
