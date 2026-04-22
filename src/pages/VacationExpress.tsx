import '../styles/CompanyPage.css';
import vacationImg from '../assets/Vaction_express.jpeg';

const VacationExpress = () => {
  return (
    <div className="company-page">
      <section className="company-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${vacationImg})` }}>
        <div className="container">
          <h1>Vacation Express</h1>
          <p className="hero-subtitle">VACATION BREAK SERVICE FROM WSU AND U OF I</p>
        </div>
      </section>

      <section className="booking-info section-padding">
        <div className="container">
          <div className="info-box mb-5">
            <h3>Ride our Vacation Express!</h3>
            <p>The Vacation Express departs Washington State University, the University of Idaho, and Central Washington University at the beginning of Thanksgiving, Winter, and Spring Breaks to Arlington, Bellevue, Biggs Junction, Ellensburg, Kennewick, Mountlake Terrace, Portland, and Tacoma. The Vacation Express then returns on the Sunday at the end of the breaks from the above locations. Please note that Portland, Biggs Junction, Arlington, Mountlake Terrace, and Kennewick are only serviced from Washington State University and the University of Idaho.</p>
          </div>

          <div className="notice-box alert-warning p-4 rounded mb-5">
            <h3>NOTICE: 08/08/2025</h3>
            <p>The new Portland, OR pick-up/drop-off location will be <strong>Lloyd Center</strong>. This stop replaces Lincoln High School and will be effective beginning with the 2025 Vacation Express – Thanksgiving. The stop will be on the east side of Lloyd Center.</p>
          </div>

          <div className="pricing-section mb-5">
            <h2 className="text-center mb-4">Fares</h2>
            <div className="table-responsive">
              <table className="schedule-table">
                <tbody>
                  <tr><td>Moscow/Pullman to Portland, Mountlake Terrace, Smokey Point, or Tacoma</td><td>$114</td></tr>
                  <tr><td>Moscow/Pullman to Bellevue</td><td>$109</td></tr>
                  <tr><td>Moscow/Pullman to Biggs Junction</td><td>$104</td></tr>
                  <tr><td>Moscow/Pullman to Ellensburg or Kennewick</td><td>$84</td></tr>
                  <tr><td>Ellensburg to Bellevue</td><td>$54</td></tr>
                  <tr><td>Kennewick to Portland</td><td>$59</td></tr>
                </tbody>
              </table>
              <p className="small mt-2">Fares listed are one-way fares.</p>
            </div>
          </div>

          <div className="schedule-section">
            <h2 className="text-center mb-5">Spring Break 2026 Schedule</h2>

            {/* Friday, March 13 */}
            <div className="day-schedule mb-5">
              <h3 className="day-title">Friday, March 13, 2026</h3>
              <div className="route-box mb-4">
                <h4>Tacoma</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>MOSCOW, ID (U of I LLC)</th><th>PULLMAN, WA (Admin/Lighty)</th><th>TACOMA, WA (Foss High School)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>3:40 PM | 3:50 PM</td><td>4:10 PM | 4:30 PM</td><td>10:30 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box">
                <h4>Bellevue ★ Ellensburg</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>MOSCOW, ID (U of I LLC)</th><th>PULLMAN, WA (Admin/Lighty)</th><th>ELLENSBURG (Starbucks)</th><th>BELLEVUE (Factoria Square)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>4:10 PM | 4:20 PM</td><td>4:40 PM | 5:00 PM</td><td>8:45 PM | 9:00 PM</td><td>10:45 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Saturday, March 14 */}
            <div className="day-schedule mb-5">
              <h3 className="day-title">Saturday, March 14, 2026</h3>
              <div className="route-box mb-4">
                <h4>Portland ★ Biggs Junction ★ Kennewick</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>MOSCOW (U of I)</th><th>PULLMAN (Admin)</th><th>KENNEWICK (Fred Meyer)</th><th>BIGGS JUNCTION</th><th>PORTLAND (Lloyd)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>7:40 AM | 7:50 AM</td><td>8:10 AM | 8:30 AM</td><td>11:00 AM | 11:15 AM</td><td>1:00 PM | 1:15 PM</td><td>3:00 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box mb-4">
                <h4>Arlington ★ Mountlake Terrace</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>MOSCOW (U of I)</th><th>PULLMAN (Admin)</th><th>MOUNTLAKE TERRACE</th><th>ARLINGTON (Walmart)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>8:10 AM | 8:20 AM</td><td>8:40 AM | 9:00 AM</td><td>3:15 PM | 3:30 PM</td><td>4:15 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box mb-4">
                <h4>Tacoma</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>MOSCOW (U of I)</th><th>PULLMAN (Admin)</th><th>TACOMA (Foss High School)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>8:40 AM | 8:50 AM</td><td>9:10 AM | 9:30 AM</td><td>3:30 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box">
                <h4>Bellevue ★ Ellensburg</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>MOSCOW (U of I)</th><th>PULLMAN (Admin)</th><th>ELLENSBURG (Starbucks)</th><th>BELLEVUE (Factoria Square)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>9:10 AM | 9:20 AM</td><td>9:40 AM | 10:00 AM</td><td>1:45 PM | 2:00 PM</td><td>3:45 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Saturday, March 21 (Return) */}
            <div className="day-schedule mb-5">
              <h3 className="day-title">Saturday, March 21, 2026 (Returns)</h3>
              <div className="route-box mb-4">
                <h4>Tacoma</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>TACOMA (Foss High School)</th><th>PULLMAN (Admin)</th><th>MOSCOW (U of I LLC)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>8:40 AM | 9:00 AM</td><td>3:15 PM | 3:35 PM</td><td>4:00 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box">
                <h4>Bellevue ★ Ellensburg</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>BELLEVUE (Factoria Square)</th><th>ELLENSBURG (Starbucks)</th><th>PULLMAN (Admin)</th><th>MOSCOW (U of I LLC)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>8:40 AM | 9:00 AM</td><td>11:15 AM | 11:30 AM</td><td>3:20 PM | 3:40 PM</td><td>4:00 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sunday, March 22 (Return) */}
            <div className="day-schedule mb-5">
              <h3 className="day-title">Sunday, March 22, 2026 (Returns)</h3>
              <div className="route-box mb-4">
                <h4>Portland ★ Biggs Junction ★ Kennewick</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>PORTLAND (Lloyd)</th><th>BIGGS JUNCTION</th><th>KENNEWICK (Fred Meyer)</th><th>PULLMAN (Admin)</th><th>MOSCOW (U of I)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>8:40 AM | 9:00 AM</td><td>11:15 AM | 11:30 AM</td><td>1:45 PM | 2:00 PM</td><td>5:00 PM | 5:20 PM</td><td>5:40 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box mb-4">
                <h4>Arlington ★ Mountlake Terrace</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <thead>
                      <tr>
                        <th>ARLINGTON (Walmart)</th><th>MOUNTLACE TERRACE</th><th>PULLMAN (Admin)</th><th>MOSCOW (U of I)</th>
                      </tr>
                      <tr className="sub-header">
                        <th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th><th>Arr | Dep</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>8:40 AM | 9:00 AM</td><td>9:55 AM | 10:15 AM</td><td>4:20 PM | 4:40 PM</td><td>5:00 PM | –</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="route-box">
                <h4>Tacoma / Bellevue / Ellensburg</h4>
                <div className="table-responsive">
                  <table className="schedule-table">
                    <tbody>
                      <tr className="sub-header"><th colSpan={4}>Tacoma Route</th></tr>
                      <tr><td>TACOMA (Foss) 8:40 AM | 9:00 AM</td><td colSpan={2}>PULLMAN (Admin) 3:15 PM | 3:35 PM</td><td>MOSCOW (U of I) 4:00 PM</td></tr>
                      <tr className="sub-header"><th colSpan={4}>Bellevue Route 1</th></tr>
                      <tr><td>BELLEVUE (Factoria) 8:40 AM | 9:00 AM</td><td>ELLENSBURG 11:15 AM | 11:30 AM</td><td>PULLMAN 3:20 PM | 3:40 PM</td><td>MOSCOW 4:00 PM</td></tr>
                      <tr className="sub-header"><th colSpan={4}>Bellevue Route 2</th></tr>
                      <tr><td>BELLEVUE (Factoria) 9:10 AM | 9:30 AM</td><td>ELLENSBURG 11:45 AM | 12:00 PM</td><td>PULLMAN 3:50 PM | 4:10 PM</td><td>MOSCOW 4:30 PM</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <p className="highlight-text mb-3">Reservations Required</p>
              <a href="https://express.starlinecollection.com/?group=vacationexpress" target="_blank" rel="noopener noreferrer">
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
              <h3>Cancellations & Refunds</h3>
              <p>Tickets are non-refundable. Cancellations and rescheduling must be made 24 hours in advance of date of travel. Failure to cancel without at least 24 hours notice or no-shows will result in a $25.00 fee.</p>
              <p className="mt-3"><strong>Questions?</strong> Email <a href="mailto:reservations@starlinecollection.com">reservations@starlinecollection.com</a></p>
            </div>
            <div className="policy-card">
              <h3>Important Terms</h3>
              <p>Departure and arrival times are approximate and may be affected by construction, traffic, weather, acts of nature, pass or road closures, and other unforeseen events.</p>
              <p className="mt-2">We ask that you not travel while sick. You may be subject to a temperature reading, and entry may be denied if symptoms are present.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacationExpress;
