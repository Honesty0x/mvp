import React from 'react'
import { ConnectButton, useWalletKit } from '@mysten/wallet-kit'

export default function WalletConnect() {
  const { currentWallet } = useWalletKit()

  if (currentWallet?.accounts?.[0]) {
    const addr = currentWallet.accounts[0].address
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: '#00ff88', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Connected: {addr.slice(0, 6)}...{addr.slice(-4)}
        </p>
      </div>
    )
  }

  return (
    <ConnectButton
      connectText="Connect Sui Wallet"
      // @ts-ignore
      style={{
        padding: '18px 40px',
        fontSize: '20px',
        background: 'linear-gradient(45deg, #00ff88, #00d1ff)',
        color: 'white',
        border: 'none',
        borderRadius: '16px',
        fontWeight: 'bold',
        boxShadow: '0 8px 30px rgba(0, 255, 136, 0.4)',
        transition: 'all 0.3s',
        cursor: 'pointer',
      }}
    />
  )
}