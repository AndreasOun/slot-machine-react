import React from 'react';
import './Controls.css';

function Controls({credits, betAmount, setBetAmount, spinReels, isSpinning}) {

  function handleBetChange(amount) {
    setBetAmount(amount);
  }

  return (
    <div className="controls">
      <div className="credit-display">
        <p>Credits: {credits}</p>
      </div>
      <div className="bet-selector">
        <label htmlFor="bet-amount">Bet Amount:</label>
        <div className="button-group">
          <button className={betAmount === 1 ? 'active' : ''} onClick={() => handleBetChange(1)}>1</button>
          <button className={betAmount === 5 ? 'active' : ''} onClick={() => handleBetChange(5)}>5</button>
          <button className={betAmount === 10 ? 'active' : ''} onClick={() => handleBetChange(10)}>10</button>
        </div>
      </div>
      <button className='spinButton' onClick={spinReels} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}

export default Controls;
