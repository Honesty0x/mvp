import React from 'react'
import ReactDOM from 'react-dom/client'
import { WalletKitProvider } from '@mysten/wallet-kit'
import WalletConnect from './components/WalletConnect'
import YieldScanner from './components/YieldScanner'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletKitProvider>
      <div
        style={{
          minHeight: '100vh',
          background: '#1a1a2e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          fontFamily: 'Courier New, monospace',
          color: '#00ff88',
        }}
      >
        {/* Header with Neon Gradient */}
        <header
          style={{
            background: 'linear-gradient(90deg, #00ff88, #00d1ff)',
            width: '100%',
            padding: '20px',
            textAlign: 'center',
            border: '2px solid #00ff88',
            borderRadius: '10px',
            boxShadow: '0 0 5px #00ff88',
            marginBottom: '30px',
          }}
        >
          <h1 style={{ fontSize: '3rem', color: 'white', margin: 0, textShadow: '0 0 2px #00ff88' }}>ChainMind</h1>
          <p style={{ color: 'white', fontSize: '1.2rem', textShadow: '0 0 2px #00d1ff' }}>Your AI-Powered Crypto Guardian</p>
        </header>

        {/* Wallet Card */}
        <div
          style={{
            background: '#2a2a3e',
            padding: '20px',
            border: '2px solid #00ff88',
            borderRadius: '10px',
            boxShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
            width: '400px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <WalletConnect />
        </div>

        {/* Yield Scanner Card */}
        <div
          style={{
            background: '#2a2a3e',
            padding: '20px',
            border: '2px solid #00ff88',
            borderRadius: '10px',
            boxShadow: '0 0 5px rgba(0, 255, 136, 0.5)',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <YieldScanner />
        </div>
      </div>
    </WalletKitProvider>
  </React.StrictMode>
)