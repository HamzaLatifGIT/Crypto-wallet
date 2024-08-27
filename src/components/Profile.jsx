import React from 'react'
import { useNavigate} from 'react-router-dom'

// Antd :
import { Button, Input } from 'antd'

// Assets : Icons
import { FaAngleRight } from "react-icons/fa";

// css :
import './style/Profile.scss'

function Profile() {
    const navigate =useNavigate()
    return (
        <div className='profile-container'>
            <div className="form">
                <div className="heading"><h2>Enter Profile Details:</h2></div>
                <div className="input-container">
                    <div className="input-box"> <span>Enter your wallet private key:</span><Input placeholder='private key' /></div>
                    <div className="input-box"> <span>Enter your target wallet  public key:</span><Input placeholder='public key' /></div>
                    <div className="input-box"> <span>Enter fee lamports :</span><Input placeholder='e.g., 50000 or 500000' /></div>
                    <div className="input-box"> <span>Enter slippage tolerance :</span><Input placeholder='e.g., 100 for 1%' /></div>
                    <div className="input-box"> <span>Enter delay for price check in milliseconds:</span><Input placeholder='(1000 = 1 second)' /></div>
                    <div className="input-box"> <span>Enter take profit:</span><Input placeholder='(10 or 20)' /></div>
                    <div className="input-box"> <span>Enter retry attempts for failed sell operations:</span><Input placeholder='(5 for default)' /></div>
                </div>
                <div className="btn"><Button onClick={()=>{navigate('/')}} >Continue <FaAngleRight /></Button></div>
            </div>

        </div>
    )
}

export default Profile