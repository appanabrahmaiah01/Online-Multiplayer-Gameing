// src/pages/Wallet.js
import React, { useState } from 'react';
import '../styles/Wallet.css';
import { FaClock, FaRupeeSign, FaArrowTrendUp, FaMoneyBillWave } from 'react-icons/fa6';
import { MdPayment, MdContentCopy } from 'react-icons/md';

const Wallet = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const referralCode = 'REFYZ2990';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied!');
  };

  return (
    <div className="wallet-container">
      <h2>Wallet Dashboard</h2>
      <div className="wallet-grid">
        {/* Wallet Summary */}
        <div className="wallet-summary">
          <div className="wallet-card green">
            <h3>Available Balance <FaMoneyBillWave /></h3>
            <p className="amount">₹0</p>
            <small>Updated just now</small>
          </div>
          <div className="wallet-card blue">
            <h3>Total Winnings <FaArrowTrendUp /></h3>
            <p className="amount">₹0</p>
            <small>All time earnings</small>
          </div>
          <div className="wallet-card purple">
            <h3>Pending Withdrawal <FaClock /></h3>
            <p className="amount">₹500</p>
            <small>Processing in 2-3 days</small>
          </div>
        </div>

        {/* Add Money */}
        <div className="wallet-section">
          <h3>Add Money</h3>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="quick-buttons">
            <button onClick={() => setAmount('500')}>₹500</button>
            <button onClick={() => setAmount('1000')}>₹1000</button>
            <button onClick={() => setAmount('2000')}>₹2000</button>
          </div>
          <label>Payment Method</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="UPI">💳 UPI</option>
            <option value="Razorpay">🪙 Razorpay</option>
            <option value="PayPal">💰 PayPal</option>
            <option value="Card">💳 Card</option>
            <option value="NetBanking">🏦 Net Banking</option>
          </select>

          <button className="add-btn">Add Money</button>
        </div>

        {/* Withdraw Money */}
        <div className="wallet-section">
          <h3>Withdraw Money</h3>
          <input
            type="number"
            placeholder="Min: ₹100"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <label>Bank Account</label>
          <select>
            <option>SBI ***1234</option>
            <option>HDFC ***5678</option>
          </select>
          <div className="withdraw-note">
            <FaClock /> Withdrawals take 2–3 business days to process
          </div>
          <button className="withdraw-btn">Withdraw Money</button>
        </div>

        {/* Referral Rewards */}
        <div className="wallet-section">
          <h3>Referral Rewards</h3>
          <p className="ref-amount">₹1,500</p>
          <p>Total Referral Earnings</p>
          <div className="ref-code-box">
            <span>{referralCode}</span>
            <button onClick={handleCopy}><MdContentCopy /></button>
          </div>
          <p className="ref-info">Earn ₹50 for each friend who joins!</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
