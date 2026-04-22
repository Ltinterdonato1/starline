import '../styles/CompanyPage.css';
import weekendHero from '../assets/Wheetland_Express.jpg';

const AAMotorcoach = () => {
  return (
    <div className="company-page">
      <section className="company-hero dynamic-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${weekendHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '64px', margin: 0 }}>Weekend Express</h1>
          <p className="hero-subtitle" style={{ color: 'white', fontSize: '28px', marginTop: '60px' }}>PUGET SOUND ★ PALOUSE ★ HOLIDAY WEEKEND SHUTTLE</p>
        </div>
      </section>

      <section className="booking-info section-padding">
        <div className="container">
          <div className="info-box mb-5">
            <h3>Ride the Weekend Express!</h3>
            <p>The Weekend Express provides holiday weekend service for 3-day holiday weekends (Labor Day, Martin Luther King Day, and Presidents Day) departing from WSU and U of I to Bellevue and Tacoma.</p>
            <p className="mt-3"><strong>Reservations are REQUIRED.</strong> Bookings are limited to 120 days before the travel date.</p>
          </div>

          <div className="pricing-banner bg-primary text-white rounded mb-5">
            <div className="container text-center py-4">
              <h2 className="mb-3">One-Way Fares</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                <p>Moscow/Pullman to Tacoma: <strong>$114</strong></p>
                <p>Moscow/Pullman to Bellevue: <strong>$109</strong></p>
                <p>Moscow/Pullman to Ellensburg: <strong>$84</strong></p>
              </div>
            </div>
          </div>

          <div className="schedule-section">
            <h2 className="text-center mb-5">Standard Route Schedule</h2>
            
            <div className="schedule-container mb-5">
              <div className="day-title">WESTBOUND: Friday Departures</div>
              <div className="table-responsive">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Arrival</th>
                      <th>Departure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Moscow, ID (U of I LLC)</td><td>3:10 PM</td><td>3:20 PM</td></tr>
                    <tr><td>Pullman, WA (French Admin)</td><td>3:45 PM</td><td>4:00 PM</td></tr>
                    <tr><td>Ellensburg, WA (Starbucks)</td><td>7:45 PM</td><td>8:00 PM</td></tr>
                    <tr><td>Bellevue, WA (Factoria Square)</td><td>9:45 PM</td><td>10:00 PM</td></tr>
                    <tr><td>Tacoma, WA (Foss High School)</td><td>10:45 PM</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="schedule-container mb-5">
              <div className="day-title">EASTBOUND: Monday Returns</div>
              <div className="table-responsive">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Arrival</th>
                      <th>Departure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Tacoma, WA (Foss High School)</td><td>10:00 AM</td><td>10:15 AM</td></tr>
                    <tr><td>Bellevue, WA (Factoria Square)</td><td>11:00 AM</td><td>11:15 AM</td></tr>
                    <tr><td>Ellensburg, WA (Starbucks)</td><td>1:00 PM</td><td>1:15 PM</td></tr>
                    <tr><td>Pullman, WA (French Admin)</td><td>5:00 PM</td><td>5:15 PM</td></tr>
                    <tr><td>Moscow, ID (U of I LLC)</td><td>5:40 PM</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-5" style={{ textAlign: 'center', marginTop: '80px' }}>
              <a href="https://express.starlinecollection.com/?group=weekendexpress" target="_blank" rel="noopener noreferrer">
                <button className="btn btn-primary btn-lg">Reserve Now!</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="policy-section section-padding bg-light">
        <div className="container">
          <div className="policy-grid">
            <div className="policy-card">
              <h3>Service Dates (2025–2026)</h3>
              <ul className="location-list" style={{ padding: 0 }}>
                <li><strong>Labor Day:</strong> Aug 29 – Sept 1, 2025</li>
                <li><strong>MLK Day:</strong> Jan 16 – Jan 19, 2026</li>
                <li><strong>Presidents Day:</strong> Feb 13 – Feb 16, 2026</li>
              </ul>
            </div>
            <div className="policy-card">
              <h3>Terms & Refunds</h3>
              <p>Tickets are <strong>non-refundable</strong>. Cancellations or rescheduling must be made at least 24 hours in advance. No-shows incur a $25.00 fee.</p>
              <p className="mt-2 small">Times are approximate and subject to traffic, weather, and road closures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AAMotorcoach;
