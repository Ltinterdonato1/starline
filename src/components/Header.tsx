import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import starlineLogo from '../assets/Starline_Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={starlineLogo} alt="Starline Collection" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-mobile-open' : ''}`}>
          <ul>
            <li><NavLink to="/tickets" onClick={closeMenu}>Tickets</NavLink></li>
            <li><NavLink to="/wanderlie-events" className="wanderlie-link" onClick={closeMenu}>Wanderlie Events</NavLink></li>
            <li><NavLink to="/fleet" onClick={closeMenu}>Our Fleet</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink></li>
            <li><NavLink to="/careers" onClick={closeMenu}>Careers</NavLink></li>
          </ul>
          
          <div className="mobile-cta">
            <button className="btn btn-primary" onClick={closeMenu}>Request A Quote</button>
          </div>
        </nav>

        <div className="header-cta desktop-only">
          <button className="btn btn-primary">Request A Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
