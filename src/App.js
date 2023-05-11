import './index.css';
import React from 'react';
import SlotMachine from './Components/SlotMachine';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <SlotMachine />
        <Footer />
      </div>
    </div>
  );
}

export default App;

