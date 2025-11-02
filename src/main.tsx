import React from 'react'
import ReactDOM from 'react-dom/client'
import { WalletKitProvider } from '@mysten/wallet-kit'
import WalletConnect from './components/WalletConnect'
import YieldScanner from './components/YieldScanner' // NEW
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletKitProvider>
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          ChainMind
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '3rem' }}>
          Your AI-Powered Crypto Guardian
        </p>
        <WalletConnect />
        <YieldScanner /> {/* NEW */}
      </div>
    </WalletKitProvider>
  </React.StrictMode>
)