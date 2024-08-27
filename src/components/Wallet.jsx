import React from 'react';
import { useNavigate } from 'react-router-dom';

// Assets | Icons
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { AiOutlineSwap } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";

// css :
import './style/Wallet.scss';
import { FaArrowDown } from 'react-icons/fa';

const Wallet = () => {
  const navigate = useNavigate ();
  return (
    <div className="wallet-container">
      <div className="account-header">
        <div className="account-icon">A1</div>
        <div className="center"><h3>Crypto Wallet</h3></div>
      </div>

      <div className="balance-info">
        <h1 className="balance-amount">$9.77</h1>
        <div className="balance-change">
          <span className="change-amount">-$0.14</span>
          <span className="change-percentage">-1.44%</span>
        </div>
      </div>

      <div className="actions">
        <button className="action-btn"  onClick={()=>navigate('/send')}><FiSend size={25} /> Send</button>
        <button className="action-btn" onClick={()=>navigate('/buy')}><FiDollarSign size={25} /> Buy</button>
        <button className="action-btn"><FiPlus size={25} /> Save</button>
      </div>

      <div className="search-bar">
        <p>Recent transections :</p>
        <FaArrowDown />
      </div>

      <div className="token-info">
        <div className="token">
          <div className="token-name">
            <img src="solana-icon.png" alt="Solana" className="token-icon" />
            <span>Solana</span>
          </div>
          <div className="token-amount">$9.77</div>
          <div className="token-change">-$0.14</div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
