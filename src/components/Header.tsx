import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';
import starlineLogo from '../assets/Starline_Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={starlineLogo} alt="Starline Collection" className="logo-img" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><NavLink to="/tickets">Tickets</NavLink></li>
            <li><NavLink to="/wanderlie-events" className="wanderlie-link">Wanderlie Events</NavLink></li>
            <li><NavLink to="/fleet">Our Fleet</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
          </ul>
        </nav>

        <div className="header-cta">
          <button className="btn btn-primary">Request A Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
