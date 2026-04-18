import { Link } from 'react-router-dom';
import '../styles/Header.css';
import starlineLogo from '../assets/Logo.jpg';

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
            <li><a href="#tickets">Tickets</a></li>
            <li><Link to="/wanderlie-events" className="wanderlie-link">Wanderlie Events</Link></li>
            <li><Link to="/fleet">Our Fleet</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
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
