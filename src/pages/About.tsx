import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/CompanyPage.css';
import about1 from '../assets/about-us-1.jpeg';
import about2 from '../assets/about-us-2.jpeg';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="company-page">
      {/* Hero Section */}
      <section className="company-hero dynamic-hero">
        <div className="hero-images">
          <div className="hero-img-container"><img src={about1} alt="About Us 1" /></div>
          <div className="hero-img-container"><img src={about2} alt="About Us 2" /></div>
        </div>
        <div className="container hero-content-overlay" style={{ padding: '0 0 60px 0', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '64px', textAlign: 'center' }}>About The Starline Collection</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding" id="story">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">OUR STORY</h2>
            <div className="mt-4" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', textAlign: 'center' }}>
              <p className="mb-4">
                The Starline Collection has been in the bus business in Washington since 1990, having become a regular sighting on the highways throughout the Pacific Northwest. We offer convenience, comfort and affordability, and whether for business or pleasure, we look forward to assisting you with your chartering needs.
              </p>
              <p className="mb-4">
                Our history began in 1990 with <strong>A&A Motorcoach</strong>, a family-owned business in Yakima that started with just five buses. Over the years, it has grown to a fleet of 30+ motorcoaches with facilities in Wenatchee and the Tri-Cities, joining the Starline Collection in 2016 to increase our reach throughout the Northwest.
              </p>
              <p className="mb-4">
                In 1998, <strong>Starline Luxury Coaches</strong> launched in Seattle with just two para-transit vehicles. We quickly expanded into corporate shuttles and charter services, earning a reputation as the premier coach company in the area through a relentless focus on customer service and excellence.
              </p>
              <p>
                The collection was further strengthened by <strong>Wheatland Express</strong>, another family-owned business started in 1992. Specializing in services for college students, international travelers, and private groups in the Palouse, it became a member of the Starline Collection in 2013, giving us the flexibility and scale we have today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-primary text-white" id="safety">
        <div className="container">
          <h2 className="section-title text-white">SAFETY FIRST!</h2>
          <p className="text-center mb-5" style={{ fontSize: '18px', maxWidth: '900px', margin: '0 auto 50px' }}>
            We recognize that safety is one of the most significant priorities for our clients. We are dedicated to adhering to all federal and state regulations and conducting safety oriented training on a routine basis.
          </p>
          
          <div className="split-layout">
            <div className="safety-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="mb-4 text-white">Operational Standards</h3>
              <ul className="mini-feature-list white-list" style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'left' }}>
                <li>Fully authorized by the Department of Transportation (DOT)</li>
                <li>Regular driver safety & training programs</li>
                <li>Ongoing random drug and alcohol screenings</li>
                <li>Pre-trip and post-trip written inspections</li>
                <li>Scheduled and preventative maintenance</li>
                <li>Thoroughly cleaned and sanitized following each trip</li>
                <li>First aid kits and fire extinguishers on every vehicle</li>
                <li>Electronic Log Devices (ELD) in each bus</li>
              </ul>
            </div>
            <div className="safety-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="mb-4 text-white">Federal Compliance (HOS)</h3>
              <ul className="mini-feature-list white-list" style={{ listStyle: 'none', paddingLeft: 0, textAlign: 'left' }}>
                <li>Maximum 10 hours driving per day</li>
                <li>Maximum 15 hours on duty per day</li>
                <li>Minimum 8 consecutive hours off-duty</li>
                <li>Multiple drivers for long itineraries</li>
                <li><strong>Pre-employment Guidelines:</strong></li>
                <li>CDL License with Passenger Endorsement</li>
                <li>Comprehensive background & performance checks</li>
                <li>Driving skills test & DOT medical approval</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="section-padding bg-light" id="eco-friendly">
        <div className="container">
          <h2 className="section-title">ENVIRONMENTALLY RESPONSIBLE</h2>
          
          <div className="info-box mb-5">
            <h3>High on comfort, low on emissions.</h3>
            <p className="mt-3">Our fleet runs on clean diesel (ULSD) technology, reducing particulate matter by 90%. Motorcoaches are the best way to travel if you’re looking to minimize your output of carbon dioxide.</p>
          </div>

          <div className="split-layout" style={{ marginTop: '40px' }}>
            <div className="text-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="mb-3">Why Motorcoach?</h3>
              <ul className="location-list" style={{ textAlign: 'left' }}>
                <li><strong>336 Passenger MPG:</strong> Delivers significantly higher efficiency than cars (28 MPG).</li>
                <li><strong>CO2 Efficiency:</strong> Uses 17 gallons for 56 people over 100 miles (Cars need 70 gallons).</li>
                <li><strong>Traffic Reduction:</strong> Each coach can keep up to 56 cars off the road.</li>
                <li><strong>Cost Effective:</strong> Requires only 6 cents in federal subsidies, compared to $4.32 for air or $46.06 for Amtrak.</li>
              </ul>
            </div>
            <div className="text-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 className="mb-3">Energy Conservation</h3>
              <ul className="location-list" style={{ textAlign: 'left' }}>
                <li><strong>SmarTire®:</strong> Pressure monitoring for optimal fuel consumption.</li>
                <li><strong>CST eRating:</strong> Independent third-party energy efficiency certification.</li>
                <li><strong>Recycling:</strong> We recycle all vehicle fluids and tires.</li>
                <li><strong>Bio-Diesel:</strong> Newer models can run on Bio-Diesel blends.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="section-padding" id="accessibility">
        <div className="container">
          <h2 className="section-title text-center mb-5">Accessibility For All</h2>
          
          <div className="accessibility-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="info-box mb-5 text-center">
              <h3>Help Us Serve You Better</h3>
              <p>We encourage passengers with disabilities to travel with us, meeting your needs with respect and dignity. Assistance with boarding, luggage, and mobility devices is provided at no extra cost.</p>
              <p className="mt-2"><strong>Please call 48 hours in advance</strong> to ensure we can provide the best possible assistance.</p>
            </div>

            <div className="policy-grid mb-5" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div className="policy-card" style={{ margin: 0 }}>
                <h3>Priority Seating</h3>
                <p>Designated seats are available at the front for persons with disabilities. Passengers in wheelchair securement areas may be asked to move if the space is needed.</p>
              </div>
              <div className="policy-card" style={{ margin: 0 }}>
                <h3>Lift-Equipped Buses</h3>
                <p>Lift-equipped buses have two securement areas. Devices must be max 30" wide x 48" long, with a combined passenger/device weight max of 600 lbs.</p>
              </div>
              <div className="policy-card" style={{ margin: 0 }}>
                <h3>Service Animals</h3>
                <p>Well-behaved service animals are welcome at no extra charge. They must remain under the owner's control and cannot occupy a seat.</p>
              </div>
              <div className="policy-card" style={{ margin: 0 }}>
                <h3>Medical Oxygen</h3>
                <p>Permitted up to 4 canisters (2 on board, 2 stowed). POCs are welcome; please ensure you have enough battery for your entire journey.</p>
              </div>
              <div className="policy-card" style={{ margin: 0 }}>
                <h3>Care Attendants</h3>
                <p>Personal care attendants are encouraged for medical/personal needs. Drivers do not provide assistance with eating, toileting, or medical care.</p>
              </div>
              <div className="policy-card" style={{ margin: 0 }}>
                <h3>Rest Stops</h3>
                <p>When the bus stops at designated rest or meal stops, you may request assistance off and on the bus or help with the retrieval of mobility aids.</p>
              </div>
            </div>

            <div className="complaints-box p-5 bg-light rounded text-center mt-5">
              <h3>Customer Rights & Complaints</h3>
              <p>The Starline Collection is committed to protecting your rights under the ADA.<br />Written statements can be sent to:</p>
              <div className="address-box mt-3" style={{ display: 'block', margin: '20px auto', textAlign: 'center' }}>
                <p className="mb-3"><strong>Starline Luxury Coaches</strong></p>
                <p className="mb-3">Attn: ADA Compliance Officer</p>
                <p className="mb-3">9801 Martin Luther King Jr Way S, Seattle, WA 98118</p>
                <p className="mt-4">Or email: <a href="mailto:opsmgr@discoverstarline.com">opsmgr@discoverstarline.com</a></p>
              </div>
              <p className="mt-4"><Link to="/privacy" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>View our Privacy Policy</Link></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
