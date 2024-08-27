import React from 'react'

// Antd :
import { Button, Input } from 'antd'

// css :
import './style/Auth.scss'

function Signup() {
  return (
    <div className='auth-container'>
      <div className="auth-header">
        <h3>Crypto Wallet</h3>
      </div>
      <div className="auth-form">
        <h2>Sign up</h2>
        <Input placeholder='User name' />
        <Input placeholder='Email' />
        <Input placeholder='Password' />
      </div>
      <div className='auth-btn'>
        <Button>Sign up</Button>
      </div>
    </div>
  )
}

export default Signup