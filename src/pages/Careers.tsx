import '../styles/CompanyPage.css';
import careersHero from '../assets/Wheatland-express2.jpg';
import daneCaylaImg from '../assets/Dane-Cayla.png';
import bus1 from '../assets/bus1.jpg';
import bus2 from '../assets/bus2.jpg';
import bus3 from '../assets/bus3.jpg';
import bus4 from '../assets/bus4.jpg';
import bus5 from '../assets/bus5.jpg';
import bus6 from '../assets/bus6.jpg';
import bus7 from '../assets/bus7.jpg';
import bus8 from '../assets/bus8.jpg';

const busGallery = [bus1, bus2, bus3, bus4, bus5, bus6, bus7, bus8];

const Careers = () => {
  return (
    <div className="company-page">
      <section className="company-hero dynamic-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${careersHero})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px' }}>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">JOIN OUR TEAM</h2>
            <p className="mt-4" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px' }}>
              The Starline Collection is a family of companies setting new standards in group transportation with a commitment to safety, customer service, and on-time performance.
            </p>
          </div>

          <div className="split-layout mb-5">
            <div className="text-content">
              <h2>Meet Our Team</h2>
              <p className="mb-4">At Starline, we're more than just a transportation company—we're a family. Our team members are the heart of our operation, dedicated to providing the best experience for our passengers every single day.</p>
              <div className="info-box bg-light text-left">
                <h3>Our Values</h3>
                <ul className="mini-feature-list mt-3">
                  <li><strong>Safety:</strong> Our #1 priority in everything we do.</li>
                  <li><strong>Service:</strong> Going above and beyond for our clients.</li>
                  <li><strong>Teamwork:</strong> Supporting each other to achieve excellence.</li>
                  <li><strong>Respect:</strong> Valuing every individual's contribution.</li>
                </ul>
              </div>
            </div>
            <div className="team-image-container">
              <img src={daneCaylaImg} alt="Dane and Cayla" className="team-photo" />
              <div className="photo-caption">Dane & Cayla - Part of the Starline Family</div>
            </div>
          </div>

          <div className="info-box mb-5">
            <h3>Award-Winning Benefits</h3>
            <p className="mb-4">We are proud to offer the <strong>highest driver pay and benefits</strong> in the region. Join us and become one of the nation’s highest-paid motorcoach drivers.</p>
            <div className="commitment-grid mt-4">
              <div className="commitment-card"><h3>Health, Dental & Vision Insurance</h3></div>
              <div className="commitment-card"><h3>401K with 5% Company Match</h3></div>
              <div className="commitment-card"><h3>Referral Bonuses & Uniforms</h3></div>
              <div className="commitment-card"><h3>7 Paid Holidays</h3></div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h2 className="mb-4">A Day in the Life</h2>
            <p className="mt-4" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px' }}>
              Operating the Northwest's finest fleet means working with the best equipment and the best people. From weekend ski shuttles to major corporate contracts, no two days are the same.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light" style={{ paddingTop: '40px' }}>
        <div className="container">
          <h2 className="section-title text-center mb-5">THE NORTHWEST'S FINEST FLEET</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {busGallery.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Starline Fleet Bus ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light" style={{ paddingTop: '20px' }}>
        <div className="container">
          <h2 className="section-title text-center mb-5">WHY WE DRIVE</h2>
          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="video-container" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.youtube.com/embed/1mQBsHCZBB8" 
                title="Why I Drive 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-container" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.youtube.com/embed/8YM9-_KAXNc" 
                title="Why I Drive 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-container" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.youtube.com/embed/dCa5svJqTHA" 
                title="Why I Drive 3" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container text-center">
          <h2 className="section-title text-center mb-4">START YOUR APPLICATION PROCESS HERE</h2>
          <div className="info-box" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p className="mb-4">View our current job listings on <strong>Indeed</strong> or apply directly through our portal.</p>
            <a href="https://www.theadvisors.org/driverapplication/?id=starline&app_token=188909799690" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: '20px' }}>Apply Now</button>
            </a>
            <p>Questions? Call <strong>206.763.5817</strong> or email <strong>sales@discoverstarline.com</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
