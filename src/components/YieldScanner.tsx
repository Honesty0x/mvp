import React, { useState, useEffect } from 'react'
import { useWalletKit } from '@mysten/wallet-kit'

interface Pool {
  name: string
  apy: number
}

export default function YieldScanner() {
  const { currentWallet } = useWalletKit()
  const [topYield, setTopYield] = useState<Pool | null>(null)

  useEffect(() => {
    // Mock data since CORS blocks Cetus API on localhost
    const fetchYields = async () => {
      try {
        // Simulated response (replace with real API + proxy later)
        const mockData = {
          pools: [
            { name: 'USDC/SUI', apy: 15.2 },
            { name: 'SUI/ETH', apy: 12.8 },
          ],
        }
        const highest = mockData.pools.reduce((max: Pool, pool: Pool) => 
          pool.apy > max.apy ? pool : max, mockData.pools[0])
        setTopYield(highest)
      } catch (error) {
        console.error('Yield fetch failed:', error)
        setTopYield({ name: 'USDC/SUI', apy: 15.2 }) // Fallback
      }
    }
    fetchYields()
  }, [])

  if (!currentWallet) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: '#ff4444' }}>Connect wallet to see yields!</p>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            background: '#00ff88',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Connect Wallet
        </button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2 style={{ color: '#00ff88' }}>Top Yield Opportunity</h2>
      {topYield ? (
        <p>
          Stake 100 SUI in {topYield.name} for <strong>{topYield.apy}% APY</strong> (~${(100 * topYield.apy / 100).toFixed(2)}/year)
        </p>
      ) : (
        <p>Loading yields...</p>
      )}
      <button
        onClick={() => alert(`Simulating stake in ${topYield?.name} at ${topYield?.apy}% APY`)}
        style={{
          padding: '10px 20px',
          background: '#00d1ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Simulate Stake
      </button>
    </div>
  )
}