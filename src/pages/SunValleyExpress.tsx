import '../styles/CompanyPage.css';
import sunValleyImg from '../assets/16-24_PassCoach/mini-1.jpg';

const SunValleyExpress = () => {
  return (
    <div className="company-page">
      <section className="company-hero" style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${sunValleyImg})`
      }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '64px', margin: 0 }}>Sun Valley Express</h1>
          <p className="hero-subtitle" style={{ color: 'white', fontSize: '28px', marginTop: '60px' }}>SUN VALLEY ★ HAILEY ★ BELLEVUE ★ BOISE</p>
        </div>
      </section>

      <section className="booking-info section-padding">
        <div className="container">
          <div className="info-box mb-5 text-center">
            <h3>Daily Scheduled Service</h3>
            <p className="mt-3">Providing reliable daily transportation between Sun Valley and the Boise Airport.</p>
            <p className="highlight-text mt-3">Reservations are REQUIRED and must be made at least 48 hours in advance.</p>
          </div>

          <div className="pricing-banner bg-primary text-white rounded mb-5">
            <div className="container text-center py-4">
              <h2>One-Way Fare: $105.00</h2>
              <p>Fares are subject to change. Please review all terms before booking.</p>
            </div>
          </div>

          <div className="schedule-section py-2">
            <div className="text-center mb-4 pt-2 pb-2">
              <h2>Daily Route Schedule</h2>
            </div>

            <div className="schedule-container mb-4">
              <div className="table-responsive">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>SOUTHBOUND (To Boise)</th>
                      <th>Time</th>
                      <th>NORTHBOUND (To Sun Valley)</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Departs Sun Valley Lodge</td>
                      <td>08:20 AM</td>
                      <td>Departs Boise Airport</td>
                      <td>03:30 PM</td>
                    </tr>
                    <tr>
                      <td>Departs Hailey Post Office</td>
                      <td>08:45 AM</td>
                      <td>Arrives Bellevue Atkinson’s Market</td>
                      <td>06:05 PM</td>
                    </tr>
                    <tr>
                      <td>Departs Bellevue Atkinson’s Market</td>
                      <td>08:55 AM</td>
                      <td>Arrives Hailey Post Office</td>
                      <td>06:15 PM</td>
                    </tr>
                    <tr>
                      <td>Arrives Boise Airport</td>
                      <td>11:20 AM</td>
                      <td>Arrives Sun Valley Lodge</td>
                      <td>06:40 PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-5" style={{ textAlign: 'center' }}>
              <button className="btn btn-primary btn-lg" style={{ marginTop: '40px' }}>Book My Shuttle Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="locations section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Station Information</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-content">
                <h3>Sun Valley / Hailey / Bellevue</h3>
                <ul className="location-list">
                  <li><strong>Sun Valley Lodge:</strong> Main entrance</li>
                  <li><strong>Hailey Post Office:</strong> NE corner by flagpole</li>
                  <li><strong>Bellevue Atkinson’s:</strong> East side by Main St</li>
                </ul>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-content">
                <h3>Boise Airport (GEG)</h3>
                <ul className="location-list">
                  <li><strong>Arrivals:</strong> Upper level, doors to Delta/United</li>
                  <li><strong>Departures:</strong> Ground level, near pillar #10</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="policy-section section-padding">
        <div className="container">
          <div className="policy-grid">
            <div className="policy-card">
              <h3>Cancellations & Refunds</h3>
              <p>Tickets cancelled less than 24 hours in advance are non-refundable. A $20.00 cancellation fee applies per one-way ticket.</p>
              <p className="mt-2">Questions? Email <a href="mailto:reservations@starlinecollection.com">reservations@starlinecollection.com</a></p>
            </div>
            <div className="policy-card">
              <h3>Important Terms</h3>
              <p>Sun Valley Express is not responsible for delayed or cancelled flights. Times are approximate and subject to traffic, weather, and road closures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SunValleyExpress;
