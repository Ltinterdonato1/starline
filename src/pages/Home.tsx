import Hero from '../components/Hero';
import CompanyGrid from '../components/CompanyGrid';
import Wanderlie from '../components/Wanderlie';
import '../styles/Home.css';

// Logo imports
import abaLogo from '../assets/aba.jpg';
import nwmLogo from '../assets/NWM.png';
import imgLogo from '../assets/IMG.jpg';
import unitedLogo from '../assets/unitedmotor.jpg';

const Home = () => {
  return (
    <>
      <Hero />
      <CompanyGrid />
      <Wanderlie />
      
      {/* Proud Member Section */}
      <section className="proud-member-section section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5">PROUD MEMBER OF</h2>
          <div className="logo-flex">
            <div className="member-logo-item">
              <img src={abaLogo} alt="American Bus Association" />
            </div>
            <div className="member-logo-item">
              <img src={nwmLogo} alt="Northwest Motorcoach Association" />
            </div>
            <div className="member-logo-item">
              <img src={imgLogo} alt="International Motorcoach Group" />
            </div>
            <div className="member-logo-item">
              <img src={unitedLogo} alt="United Motorcoach Association" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
