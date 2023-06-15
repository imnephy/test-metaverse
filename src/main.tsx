import React from 'react';
import ReactDOM from 'react-dom/client';
import { Config, DAppProvider, Goerli, Mainnet } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import { Provider } from 'react-redux';

import App from './App.tsx';

import { store } from './app/store';

import './index.css';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
};

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </Provider>
  </React.StrictMode>
);
