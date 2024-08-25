import { Button, Input, InputNumber } from 'antd'
import React from 'react'
import './style/Auth.scss'

function Login() {
  return (
    <div className='auth-container'>
        <div className="auth-header">
            <h3>Crypto Wallet</h3>
        </div>
        <div className="auth-form">
            <h2>Sign in</h2>
            <Input placeholder='Email'/>
            <Input placeholder='Password'/>
            <span>Forget password</span>
        </div>
        <div className='auth-btn'>
            <Button>Sign in</Button>
        </div>
    </div>
  )
}

export default Login