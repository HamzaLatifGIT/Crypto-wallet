import React from 'react'
import { useNavigate} from 'react-router-dom'

// Antd :
import { Button, Input } from 'antd'

// Assets : Icons
import { FaAngleRight } from "react-icons/fa";

// css :
import './style/Action.scss'

function Buy() {
    const navigate =useNavigate()
    return (
        <div className='action-container'>
            <div className="form">
                <div className="heading"><h1>Send</h1></div>
                <div className="input-container">
                    <div className="input-box"> <span>Enter Amout:</span><Input placeholder='amount' /></div>
                    
                </div>
                <div className="btn"><Button onClick={()=>{navigate('/')}} >Continue <FaAngleRight /></Button></div>
            </div>

        </div>
    )
}

export default Buy