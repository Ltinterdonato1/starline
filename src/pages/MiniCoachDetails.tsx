import { Link } from 'react-router-dom';
import '../styles/CompanyPage.css';

const MiniCoachDetails = () => {
  return (
    <div className="company-page">
      <section className="company-hero bg-primary">
        <div className="container text-center">
          <p className="breadcrumb"><Link to="/fleet" className="text-white">Home</Link> &gt; 16 – 24 Passenger Mini-Coaches</p>
          <h1 className="text-white">16 – 24 Passenger Mini-Coaches</h1>
        </div>
      </section>

      <section className="details-section section-padding">
        <div className="container">
          <div className="split-layout">
            <div className="text-content">
              <h2>Overview</h2>
              <p>Mini-coaches come in a variety of sizes able to seat from a group of 16 to 24. The minis are roughly 28 feet long, 8.5 feet wide, and 9 feet tall. Airport transfer from the airport to a hotel? You’ll most likely want the 24 passenger mini for it’s luggage space.</p>
              
              <div className="feature-lists mt-5">
                <div className="feature-group">
                  <h3>Standard Features</h3>
                  <ul className="location-list">
                    <li>Reclining seats</li>
                    <li>Color DVD system</li>
                    <li>Rear bus storage</li>
                  </ul>
                </div>

                <div className="feature-group mt-4">
                  <h3>Optional Features</h3>
                  <p className="small">(limited availability)</p>
                  <ul className="location-list">
                    <li>PA system</li>
                    <li>Overhead reading lights</li>
                    <li>12 volt / USB outlets</li>
                    <li>WiFi</li>
                    <li>ADA accessibility (2 wheelchair maximum. Each wheelchair replaces 4 seats)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="image-content text-center">
              <div className="spec-box p-4 bg-light rounded">
                <h3>Specifications</h3>
                <ul className="location-list">
                  <li><strong>Length:</strong> Roughly 28 feet</li>
                  <li><strong>Width:</strong> 8.5 feet</li>
                  <li><strong>Height:</strong> 9 feet</li>
                  <li><strong>Capacity:</strong> 16 - 24 Passengers</li>
                </ul>
                <button className="btn btn-primary w-100 mt-4">Request a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiniCoachDetails;
