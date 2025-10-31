import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginButton from './components/LoginButton'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ textAlign: 'center', paddingTop: '100px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        ChainMind
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '3rem' }}>
        Your AI-Powered Crypto Guardian
      </p>
      <LoginButton />
    </div>
  </React.StrictMode>
)