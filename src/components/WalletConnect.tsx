import React, { useEffect, useState } from 'react'
import { ConnectButton, useWalletKit } from '@mysten/wallet-kit'

export default function WalletConnect() {
  const { currentWallet, disconnect } = useWalletKit()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensure wallet state is fully loaded
    setIsLoading(false)
  }, [currentWallet])

  if (isLoading) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading wallet...</div>
  }

  if (currentWallet && currentWallet.accounts && currentWallet.accounts.length > 0) {
    const addr = currentWallet.accounts[0].address
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: '#00ff88', fontWeight: 'bold', fontSize: '1.1rem' }}>
          Connected: {addr.slice(0, 6)}...{addr.slice(-4)}
        </p>
        <button
          onClick={() => disconnect()}
          style={{
            padding: '10px 20px',
            background: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Disconnect Wallet
        </button>
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