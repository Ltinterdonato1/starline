import { Link } from 'react-router-dom';
import '../styles/CompanyPage.css';
import wheatlandImg from '../assets/Wheetland_Express.jpg';
import spokaneImg from '../assets/Spokan_Airport_Shuttle.jpeg';
import vacationImg from '../assets/Vaction_express.jpeg';

const WheatlandExpress = () => {
  return (
    <div className="company-page">
      <section className="company-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${wheatlandImg})` }}>
        <div className="container">
          <h1>Wheatland Express</h1>
          <p>Serving the Palouse and WSU community since 1989.</p>
        </div>
      </section>

      <section className="shuttle-options section-padding">
        <div className="container">
          <div className="features-grid">
            {/* Spokane Airport Shuttle */}
            <div className="feature-card">
              <div className="feature-image">
                <img src={spokaneImg} alt="Spokane Airport Shuttle" />
              </div>
              <div className="feature-content">
                <h3>Spokane Airport Shuttle</h3>
                <p>Reliable and comfortable transportation between the Palouse and Spokane International Airport (GEG).</p>
                <Link to="/spokane-airport-express" className="btn btn-primary" style={{ marginTop: '20px' }}>View Schedule</Link>
              </div>
            </div>

            {/* Vacation Express */}
            <div className="feature-card">
              <div className="feature-image">
                <img src={vacationImg} alt="Vacation Express" />
              </div>
              <div className="feature-content">
                <h3>Vacation Express</h3>
                <p>Specialized charter services and scheduled vacation trips for the WSU community and beyond.</p>
                <Link to="/vacation-express" className="btn btn-primary" style={{ marginTop: '20px' }}>View Schedule</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are section-padding bg-light">
        <div className="container text-center">
          <h2>Why Choose Wheatland?</h2>
          <p style={{ maxWidth: '800px', margin: '20px auto' }}>
            Serving Pullman and Moscow since 1989, Wheatland Express is the premier choice for airport transportation 
            and group charters in the Palouse region. We pride ourselves on safety, reliability, and our deep 
            connection to the local community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WheatlandExpress;
