"use client"
import React, { useState } from 'react';
import './modal.css'

const Popup = ({ show, onYes, onNo }:any) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup">
      <p>Do you want to proceed?</p>
      <button onClick={onYes}>Yes</button>
      <button onClick={onNo}>No</button>
    </div>
  );
};

const ConfirmPopup = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleYes = () => {
    // Handle actions when "Yes" is clicked
    console.log('User clicked Yes');
    setPopupVisible(false);
  };

  const handleNo = () => {
    // Handle actions when "No" is clicked
    console.log('User clicked No');
    setPopupVisible(false);
  };

  return (
    <div>
      <button onClick={() => setPopupVisible(true)}>Show Popup</button>
      <Popup show={popupVisible} onYes={handleYes} onNo={handleNo} />
    </div>
  );
};

export default ConfirmPopup;
