import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-text">STARLINE</span>
          <span className="logo-subtext">COLLECTION</span>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#fleet">Fleet</a></li>
            <li><a href="#express">Express</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#wanderlie" className="wanderlie-link">Wanderlie Events</a></li>
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
