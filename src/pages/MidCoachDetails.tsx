import { Link } from 'react-router-dom';
import '../styles/CompanyPage.css';

const MidCoachDetails = () => {
  return (
    <div className="company-page">
      <section className="company-hero bg-primary">
        <div className="container text-center">
          <nav className="breadcrumb">
            <Link to="/" className="text-white">Home</Link> / <Link to="/fleet" className="text-white">Our Fleet</Link>
          </nav>
          <h1 className="text-white">40 Passenger Coach</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="split-layout">
            <div className="text-content">
              <h2>Overview</h2>
              <p>The mid-sized motorcoach, coming in at 35 feet long, 8.5 feet wide, and 11 feet 5 inches tall. Perfect for medium groups or small groups with more equipment.</p>
              
              <div className="mt-5">
                <button className="btn btn-primary">Request a Quote</button>
              </div>
            </div>
            <div className="features-sidebar">
              <div className="feature-list-box mb-4">
                <h3>Standard Features</h3>
                <ul>
                  <li>Restroom</li>
                  <li>PA system</li>
                  <li>Reclining seats</li>
                  <li>Overhead and under bus storage</li>
                  <li>Color DVD system</li>
                  <li>Individual lighting and air</li>
                </ul>
              </div>
              <div className="feature-list-box">
                <h3>Optional Features</h3>
                <p className="small mb-3">(limited availability)</p>
                <ul>
                  <li>12 volt / USB outlets</li>
                  <li>Seatbelts</li>
                  <li>WiFi</li>
                  <li>ADA accessibility (2 wheelchair maximum. Each wheelchair replaces 4 seats)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MidCoachDetails;
