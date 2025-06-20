// src/components/WalletActions.js
import React from "react";
import '../styles/WalletActions.css'; // ✅ Correct path to styles folder


const WalletActions = () => {
  return (
    <div className="wallet-actions-card">
      <h3>Wallet Actions</h3>
      <button className="btn blue">Add Money</button>
      <button className="btn purple">Withdraw</button>
      <button className="btn white">Transaction History</button>
    </div>
  );
};

export default WalletActions;
