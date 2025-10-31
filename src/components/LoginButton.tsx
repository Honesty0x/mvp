import React from 'react'

export default function LoginButton() {
  return (
    <button
      style={{
        padding: '18px 40px',
        fontSize: '20px',
        background: 'linear-gradient(45deg, #00ff88, #00d1ff)',
        color: 'white',
        border: 'none',
        borderRadius: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 8px 30px rgba(0, 255, 136, 0.4)',
        transition: 'all 0.3s',
      }}
      onClick={() => alert('Google Login Coming Soon! LFG!')}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      Login with Google
    </button>
  )
}