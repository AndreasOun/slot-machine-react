import React, { useState, useEffect } from 'react';
import { Random } from 'random';
import './SlotMachine.css';
import Controls from './Controls';


const SYMBOLS = ['🍒', '🍊', '🍇', '🍓','🍉', '🍌'];
const WINNINGS_MAP = {
  '🍒': 5,
  '🍊': 20,
  '🍇': 40,
  '🍓': 60,
  '🍉': 75,
  '🍌': 100,
};

function SlotMachine() {
  const [reels, setReels] = useState([]);
  const [credits, setCredits] = useState(100);
  const [winning, setWinning] = useState(null);
  const [totalWinnings, setTotalWinnings] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const randomInstance = new Random();
  const [bet, setBet] = useState(1);

  useEffect(() => {
    resetReels();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function resetReels() {
    const newReels = [];
    for (let i = 0; i < 4; i++) {
      const newSymbols = [];
      for (let j = 0; j < 5; j++) {
        const randomIndex = randomInstance.integer(0, SYMBOLS.length - 1);
        const symbol = SYMBOLS[randomIndex];
        newSymbols.push(symbol);
      }
      newReels.push(newSymbols);
    }
    setReels(newReels);
    setWinning(null);
  }

  function spinReels() {
    if (isSpinning) return;

    setIsSpinning(true);


    const newReels = [];
    for (let i = 0; i < reels.length; i++) {
      const newSymbols = [];
      for (let j = 0; j < reels[i].length; j++) {
        const randomIndex = randomInstance.integer(0, SYMBOLS.length - 1);
        const symbol = SYMBOLS[randomIndex];
        newSymbols.push(symbol);
      }
      newReels.push(newSymbols);
    }

    let totalWinnings = 0;
    let winningSymbol = null;


    // Check for winning combinations in columns
    for (let i = 0; i < reels.length; i++) {
      let currentSymbol = reels[0][i];
      let currentCount = 1;
      for (let j = 1; j < reels.length; j++) {
        if (reels[j][i] === currentSymbol) {
          currentCount++;
        } else {
          break;
        }
      }
      if (currentCount === 5) {
        const winnings = WINNINGS_MAP[currentSymbol];
        totalWinnings += winnings;
        winningSymbol = currentSymbol;
      }
    }
    

    // Check for winning combinations in rows
    for (let i = 0; i < reels.length; i++) {
      let currentSymbol = reels[i][0];
      let currentCount = 1;
      for (let j = 1; j < reels[i].length; j++) {
        if (reels[i][j] === currentSymbol) {
          currentCount++;
        } else {
          break;
        }
      }
      if (currentCount === 4) {
        const winnings = WINNINGS_MAP[currentSymbol];
        totalWinnings += winnings;
        winningSymbol = currentSymbol;
      }
    }

    


    setReels(newReels);
    setCredits((credits) => credits - 1 + totalWinnings);
    setWinning(winningSymbol);
    setTotalWinnings(totalWinnings);

    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  }


  return (
    <div className="slot-machine">
      {/* Reel elements with a class based on isSpinning state */}
      {reels.map((row, rowIndex) => (
        <div key={rowIndex} className={`row ${isSpinning ? "spin" : ""}`}>
          {row.map((symbol, columnIndex) => (
            
            <div
              key={columnIndex}
              className={`symbol ${symbol === winning ? "winner" : ""}`}
            >
              {symbol}
            </div>
          ))}
        </div>
      ))}
       <div className="slot-machine">
      {/* ... */}
      <Controls
        credits={credits}
        betAmount={bet}
        setBetAmount={setBet}
        spinReels={spinReels}
        isSpinning={isSpinning}
      />
      </div>
    </div>
  );
}


export default SlotMachine;
