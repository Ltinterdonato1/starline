import '../styles/CompanyPage.css';
import spokaneImg from '../assets/Spokan_Airport_Shuttle.jpeg';
import wheatland1 from '../assets/Wheatland-express1.jpg';
import wheatland2 from '../assets/Wheatland-express2.jpg';

const SpokaneAirportExpress = () => {
  return (
    <div className="company-page">
      <section className="company-hero dynamic-hero">
        <div className="hero-images">
          <div className="hero-img-container"><img src={spokaneImg} alt="Spokane Shuttle" /></div>
          <div className="hero-img-container"><img src={wheatland1} alt="Wheatland 1" /></div>
          <div className="hero-img-container"><img src={wheatland2} alt="Wheatland 2" /></div>
        </div>
        <div className="container hero-content-overlay" style={{ padding: '0 0 60px 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '20px', fontSize: '64px', textAlign: 'center' }}>Spokane Airport Express</h1>
          <p className="hero-subtitle" style={{ fontSize: '28px', whiteSpace: 'nowrap', textAlign: 'center' }}>MOSCOW ★ PULLMAN ★ COLFAX ★ SPOKANE</p>
        </div>
      </section>

      <section className="booking-info section-padding">
        <div className="container">
          <div className="info-box mb-5">
            <p className="highlight-text text-center">Airport schedule thru March 2026 available. (Bookings are limited to 120 days before travel date)</p>
            <p className="text-center mt-3">Months listed as “no trips scheduled” will NOT have any trips. Seats will be limited and no additional buses will be added.</p>
            <p className="text-center mt-2">Questions? Email <a href="mailto:reservations@starlinecollection.com">reservations@starlinecollection.com</a></p>
            <br />
            <br />
          </div>

          <div className="pricing-banner bg-primary text-white rounded mb-5">
            <div className="container text-center py-4">
              <h2>Fares: Moscow/Pullman/Colfax to Spokane Airport $59</h2>
              <p>Fares listed are one-way.</p>
            </div>
          </div>

          <div className="schedule-section py-2">
            <div className="text-center mb-4 pt-2 pb-2">
              <h2>Spokane Airport Express Schedule</h2>
            </div>

            
           

            <div className="schedule-container mb-2 text-center">
              <h3>May 2026</h3>
              <p className="mb-3"><strong>NORTHBOUND TO SPOKANE INTERNATIONAL AIRPORT FROM MOSCOW, ID, PULLMAN, AND COLFAX</strong></p>
              
              <div className="table-responsive">
                <table className="schedule-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th colspan="2">U of I LLC (Moscow)</th>
                      <th colspan="2">Best Western (Moscow)</th>
                      <th colspan="2">Residence Inn (Moscow)</th>
                      <th colspan="2">Admin/Lighty (Pullman)</th>
                      <th colspan="2">Rosauers (Pullman)</th>
                      <th colspan="2">Spokane Airport</th>
                    </tr>
                    <tr className="sub-header">
                      <th></th>
                      <th>Arr.</th><th>Dep.</th>
                      <th>Arr.</th><th>Dep.</th>
                      <th>Arr.</th><th>Dep.</th>
                      <th>Arr.</th><th>Dep.</th>
                      <th>Arr.</th><th>Dep.</th>
                      <th>Arr.</th><th>Dep.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Friday, May 8</td>
                      <td>5:05 AM</td><td>5:15 AM</td>
                      <td>5:20 AM</td><td>5:30 AM</td>
                      <td>5:45 AM</td><td>5:55 AM</td>
                      <td>6:00 AM</td><td>6:15 AM</td>
                      <td>6:40 AM</td><td>6:50 AM</td>
                      <td>8:00 AM</td><td>–</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>10:35 AM</td><td>10:45 AM</td>
                      <td>10:50 AM</td><td>11:00 AM</td>
                      <td>11:15 AM</td><td>11:25 AM</td>
                      <td>11:30 AM</td><td>11:45 AM</td>
                      <td>12:10 PM</td><td>12:20 PM</td>
                      <td>1:30 PM</td><td>–</td>
                    </tr>
                    <tr>
                      <td>Saturday, May 9</td>
                      <td>5:05 AM</td><td>5:15 AM</td>
                      <td>5:20 AM</td><td>5:30 AM</td>
                      <td>5:45 AM</td><td>5:55 AM</td>
                      <td>6:00 AM</td><td>6:15 AM</td>
                      <td>6:40 AM</td><td>6:50 AM</td>
                      <td>8:00 AM</td><td>–</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>10:35 AM</td><td>10:45 AM</td>
                      <td>10:50 AM</td><td>11:00 AM</td>
                      <td>11:15 AM</td><td>11:25 AM</td>
                      <td>11:30 AM</td><td>11:45 AM</td>
                      <td>12:10 PM</td><td>12:20 PM</td>
                      <td>1:30 PM</td><td>–</td>
                    </tr>
                    <tr>
                      <td>Sunday, May 10</td>
                      <td>5:05 AM</td><td>5:15 AM</td>
                      <td>5:20 AM</td><td>5:30 AM</td>
                      <td>5:45 AM</td><td>5:55 AM</td>
                      <td>6:00 AM</td><td>6:15 AM</td>
                      <td>6:40 AM</td><td>6:50 AM</td>
                      <td>8:00 AM</td><td>–</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>10:35 AM</td><td>10:45 AM</td>
                      <td>10:50 AM</td><td>11:00 AM</td>
                      <td>11:15 AM</td><td>11:25 AM</td>
                      <td>11:30 AM</td><td>11:45 AM</td>
                      <td>12:10 PM</td><td>12:20 PM</td>
                      <td>1:30 PM</td><td>–</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-primary btn-lg" style={{ marginTop: '40px' }}>Reserve Now!</button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="policy-section section-padding bg-light">
        <div className="container">
          <div className="policy-grid">
            <div className="policy-card">
              <h3>Cancellations & Refunds</h3>
              <p>Tickets are non-refundable. Cancellations and rescheduling must be made 24 hours in advance of date of travel. Failure to cancel without at least 24 hours notice or no-shows will result in a $25.00 fee.</p>
            </div>
            <div className="policy-card">
              <h3>Terms & Safety</h3>
              <p>We ask that you not travel while sick. Riding with the Starline Collection means you may be subject to a temperature reading. Please obey the driver if they ask you to move from a seat that must remain empty.</p>
              <p className="small mt-2">Times are approximate and may be affected by construction, traffic, weather, or road closures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpokaneAirportExpress;
