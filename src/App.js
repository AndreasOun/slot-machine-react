import './App.css';
import React from 'react';
import SlotMachine from './Components/SlotMachine';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <SlotMachine />
      </div>
    </div>
  );
}

export default App;

