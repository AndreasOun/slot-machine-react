import './SlotMachine.css';
import React, { useState } from 'react';

function SlotMachine() {
    const [reels, setReels] = useState([
      ['🍒', '🍊', '🍇', '🍓'], // row 1
      ['🍇', '🍒', '🍓', '🍊'], // row 2
      ['🍊', '🍓', '🍒', '🍇'], // row 3
      ['🍓', '🍇', '🍊', '🍒'] // row 4
    ]);
    const [credits, setCredits] = useState(100);
  
    function spinReels() {
      // Generate random symbols for each reel
      const newReels = [];
      for (let i = 0; i < reels.length; i++) {
        const newSymbols = [];
        for (let j = 0; j < reels[i].length; j++) {
          const randomIndex = Math.floor(Math.random() * reels[i].length);
          newSymbols.push(reels[i][randomIndex]);
        }
        newReels.push(newSymbols);
      }
      // Update the state variables with the new symbols
      setReels(newReels);
      // Deduct credits from the user's balance
      setCredits(credits - 1);
    }

  return (
    <div>
      {/* UI for displaying the reels */}
      {reels.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((symbol, columnIndex) => (
            <div key={columnIndex} className="symbol">
              {symbol}
            </div>
          ))}
        </div>
      ))}
      <button onClick={spinReels}>Spin</button>
      {/* UI for displaying the user's credits */}
      <p>Credits: {credits}</p>
    </div>
  );
}

export default SlotMachine;

