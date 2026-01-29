import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">Premium Restaurant</Link>
          
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Bosh sahifa</Link></li>
            <li><Link to="/foods" onClick={() => setIsOpen(false)}>Ovqatlar</Link></li>
            <li><Link to="/drinks" onClick={() => setIsOpen(false)}>Ichimliklar</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>Biz haqimizda</Link></li>
            <li>
              <Link to="/cart" className="cart-link" onClick={() => setIsOpen(false)}>
                <i className="fas fa-shopping-cart"></i> Savat {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
