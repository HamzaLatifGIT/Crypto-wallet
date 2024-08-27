import React from 'react'
import { useNavigate} from 'react-router-dom'

// Antd :
import { Button, Input, InputNumber } from 'antd'

// Assets:
import img from '../assets/large_crypto_blog_2fcfc08b16-removebg-preview (1).png'

// css:
import './style/Auth.scss'

function Login() {

  const navigate = useNavigate ();
  return (
    <div className='auth-container'>
        <div className="auth-header">
            <h3>Crypto Wallet</h3>
        </div>
        <div className="auth-form">
          <div className="img">
            <img src={img} alt="" />
          </div>
            <h2>Sign In</h2>
            <div className="input-box">
              <span>Email </span>
            <Input placeholder='Email' />
            </div>
           
            <div className="input-box">
              <span>Password</span>
            <Input placeholder='Password' />
            </div>
            <div className="btn"><Button onClick={()=>navigate('/profile')}>Sign in</Button></div>
            
          
        </div>
       
        
    </div>
  )
}

export default Login