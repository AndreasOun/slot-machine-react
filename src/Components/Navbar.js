import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>FakeCasino🎰</h1>
      <ul className="navbar-links">
        <li><a href="#">Slots</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Deposit</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;