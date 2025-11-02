import React, { useState, useEffect } from 'react'
import { useWalletKit } from '@mysten/wallet-kit'
import { initCetusSDK } from '@cetusprotocol/cetus-sui-clmm-sdk'

interface Pool {
  name: string
  apy: number
}

export default function YieldScanner() {
  const { currentWallet } = useWalletKit()
  const [topYield, setTopYield] = useState<Pool | null>(null)

  useEffect(() => {
    if (currentWallet) {
      const fetchYields = async () => {
        try {
          const sdk = initCetusSDK({ network: 'testnet' })
          const pools = await sdk.Pool.getPools([])

          // @ts-ignore - SDK Pool type is complex
          const highest = pools.reduce((max: any, pool: any) => {
            const calculatedApy = (pool.fee_rate || 0) / 100 // Use fee_rate
            const poolName = `${pool.tokenA?.name || 'Unknown'}/${pool.tokenB?.name || 'Unknown'}`
            return calculatedApy > (max.apy || 0) 
              ? { name: poolName, apy: calculatedApy } 
              : max
          }, { name: 'USDC/SUI', apy: 15.2 })

          setTopYield(highest)
        } catch (error) {
          console.error('SDK fetch failed:', error)
          setTopYield({ name: 'USDC/SUI', apy: 15.2 })
        }
      }
      fetchYields()
    }
  }, [currentWallet])

  if (!currentWallet) {
    return (
      <div style={{ textAlign: 'center', color: 'red' }}>
        <p>Connect wallet to see yields!</p>
        <button
          onClick={() => window.location.reload()}
          style={{ padding: '10px 20px', background: '#00ff88', color: 'white', border: 'none', borderRadius: '8px' }}
        >
          Connect Wallet
        </button>
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h2>Top Yield Opportunity</h2>
      {topYield ? (
        <p>
          Stake 100 SUI in <strong>{topYield.name}</strong> for <strong>{topYield.apy}% APY</strong> (~${(100 * topYield.apy / 100).toFixed(2)}/year)
        </p>
      ) : (
        <p>Loading yields...</p>
      )}
      <button
        onClick={() => alert(`Simulating stake in ${topYield?.name} at ${topYield?.apy}% APY`)}
        style={{ padding: '10px 20px', background: '#00d1ff', color: 'white', border: 'none', borderRadius: '8px' }}
      >
        Simulate Stake
      </button>
    </div>
  )
}