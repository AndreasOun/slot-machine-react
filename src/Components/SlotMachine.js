import React, { useState, useEffect } from 'react';
import { Random } from 'random';
import './SlotMachine.css';

function SlotMachine() {
  const [reels, setReels] = useState([]);
  const [credits, setCredits] = useState(100);
  const randomInstance = new Random();

  useEffect(() => {
    // Generate random symbols for each reel
    const newReels = [];
    for (let i = 0; i < 4; i++) {
      const newSymbols = [];
      for (let j = 0; j < 5; j++) {
        const randomIndex = randomInstance.integer(0, 3);
        const symbol = ['🍒', '🍊', '🍇', '🍓'][randomIndex];
        newSymbols.push(symbol);
      }
      newReels.push(newSymbols);
    }

    // Set the initial state for the reels
    setReels(newReels);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array as second argument to run the effect only once on initial render

  const [isSpinning, setIsSpinning] = useState(false); // update state variable

function spinReels() {
  setIsSpinning(true); // set isSpinning to true when the button is clicked

  // Generate random symbols for each reel
  const newReels = [];
  for (let i = 0; i < reels.length; i++) {
    const newSymbols = [];
    for (let j = 0; j < reels[i].length; j++) {
      const randomIndex = randomInstance.integer(0, 3);
      const symbol = ['🍒', '🍊', '🍇', '🍓'][randomIndex];
      newSymbols.push(symbol);
    }
    newReels.push(newSymbols);
  }

  // Update the state variables with the new symbols
  setReels(newReels);
  // Deduct credits from the user's balance
  setCredits(credits - 1);

  // set isSpinning back to false after 2 seconds to stop the animation
  setTimeout(() => {
    setIsSpinning(false);
  }, 2000);
}

  return (
     <div className="slot-machine">
         {/* Reel elements with a class based on isSpinning state */}
         {reels.map((row, rowIndex) => (
        <div key={rowIndex} className={`row ${isSpinning ? 'spin' : ''}`}>
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
