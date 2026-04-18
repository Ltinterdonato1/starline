import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Seattle */}
          <div className="footer-column">
            <h4>STARLINE LUXURY COACHES</h4>
            <ul className="contact-list">
              <li><strong>Seattle, WA</strong></li>
              <li>9801 Martin Luther King Jr Way S</li>
              <li>Seattle, WA 98118</li>
              <li>Phone: <a href="tel:2067635817">206.763.5817</a></li>
              <li>Email: <a href="mailto:sales@starlinecollection.com">sales@starlinecollection.com</a></li>
            </ul>
          </div>

          {/* Column 2: Yakima */}
          <div className="footer-column">
            <h4>A & A MOTORCOACH</h4>
            <ul className="contact-list">
              <li><strong>Yakima, WA</strong></li>
              <li>2410 S 26th Ave</li>
              <li>Yakima, WA 98903</li>
              <li>Phone: <a href="tel:5095753676">509.575.3676</a></li>
              <li>Email: <a href="mailto:sales@starlinecollection.com">sales@starlinecollection.com</a></li>
            </ul>
          </div>

          {/* Column 3: Pasco */}
          <div className="footer-column">
            <h4>A & A MOTORCOACH</h4>
            <ul className="contact-list">
              <li><strong>Pasco, WA</strong></li>
              <li>310 S Main Ave</li>
              <li>Pasco, WA 99301</li>
              <li>Phone: <a href="tel:5095428155">509.542.8155</a></li>
              <li>Email: <a href="mailto:sales@starlinecollection.com">sales@starlinecollection.com</a></li>
            </ul>
          </div>

          {/* Column 4: Boise */}
          <div className="footer-column">
            <h4>STARLINE COLLECTION</h4>
            <ul className="contact-list">
              <li><strong>Boise, ID</strong></li>
              <li>6903 West Targee St.</li>
              <li>Boise, ID 83709</li>
              <li>Phone: <a href="tel:2083421900">208.342.1900</a></li>
              <li>Email: <a href="mailto:sales@starlinecollection.com">sales@starlinecollection.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-bottom-info">
                <p>Copyright {new Date().getFullYear()} Transportation Demand Management, LLC | All Rights Reserved</p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/TheStarlineCollection/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/starlinecollection/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/the-starline-collection/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC26Xr29qBAMGR0aCpCMPjzw" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
