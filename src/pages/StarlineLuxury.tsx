import '../styles/CompanyPage.css';
import starlineImg from '../assets/56_PassCoach/bus1.jpg';

const StarlineLuxury = () => {
  return (
    <div className="company-page">
      <section className="company-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${starlineImg})` }}>
        <div className="container">
          <h1>Starline Luxury Coaches</h1>
          <p>Exceptional service, high quality, safe and reliable motorcoach charter service.</p>
        </div>
      </section>

      <section className="features section-padding">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe.</h3>
              <p>We have achieved and maintain the highest safety rating possible in the transportation industry. Our drivers are trained with the Smith System of defensive driving. Each of our coaches is outfitted with on board cameras and SmartTires.</p>
              <button className="read-more">Read More</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Green.</h3>
              <p>We are highly committed to environmentally sound practices. From buying newer, more eco-friendly coaches, to building an office building with many “green” amenities, we continuously look for ways to improve our footprint.</p>
              <button className="read-more">Read More</button>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♿</div>
              <h3>Accessible.</h3>
              <p>We are here to meet the transportation needs of all our passengers with the respect and dignity which you deserve. We provide assistance with boarding, special handling of luggage, and retrieval of mobility devices.</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are section-padding bg-light">
        <div className="container">
          <div className="split-layout">
            <div className="text-content">
              <h2>Who Are We?</h2>
              <p>Starline’s mission is to provide exceptional service, with high quality, safe and reliable motorcoach charter service in Washington and beyond. From small groups, to large groups, to contract corporate shuttles, we have the right solution for you!</p>
              
              <div className="benefits">
                <h3>Why Starline Luxury Coaches?</h3>
                <ul>
                  <li>Industry’s highest safety rating</li>
                  <li>Department of Defense Certified</li>
                  <li>Green Transportation</li>
                  <li>Accessible</li>
                  <li>24/7 Manager on Duty Support</li>
                  <li>Award Winning Transportation</li>
                </ul>
              </div>
            </div>
            <div className="image-content">
              <div className="video-container">
                <iframe 
                  width="100%" 
                  height="315" 
                  src="https://www.youtube.com/embed/iRp134cTZSY?autoplay=1&mute=1&loop=1&playlist=iRp134cTZSY&controls=0&showinfo=0&rel=0&modestbranding=1" 
                  title="Starline Luxury Coaches Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section-padding">
        <div className="container">
          <h2 className="text-center">What Clients Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>“A big thank you to Mike at Wheatland who went the extra mile to help me rebook a trip and make the changes needed to get my daughter back to Pullman! Great customer service!”</p>
              <span className="author">John O.</span>
            </div>
            <div className="testimonial-card">
              <p>“Great Experience. No problems. If you follow on their social media pages they do a great job at keeping you informed.”</p>
              <span className="author">Kellie Z.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StarlineLuxury;
