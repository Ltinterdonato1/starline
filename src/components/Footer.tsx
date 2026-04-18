import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Starline Collection</h3>
            <p>Providing safe, friendly, and professional transportation solutions across the Pacific Northwest.</p>
          </div>
          <div className="footer-locations">
            <h4>Our Hubs</h4>
            <ul>
              <li><strong>Seattle, WA:</strong> (206) 555-0123</li>
              <li><strong>Boise, ID:</strong> (208) 555-0123</li>
              <li><strong>Yakima, WA:</strong> (509) 555-0123</li>
              <li><strong>Pullman, WA:</strong> (509) 555-0456</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#fleet">Our Fleet</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#quote">Request a Quote</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">LI</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Starline Collection. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
