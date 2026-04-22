import { Link } from 'react-router-dom';
import '../styles/CompanyPage.css';
import spokaneImg from '../assets/Spokan_Airport_Shuttle.jpeg';
import vacationImg from '../assets/Vaction_express.jpeg';
import weekendImg from '../assets/Wheatland-express1.jpg';
import sunValleyImg from '../assets/16-24_PassCoach/mini-1.jpg';

const ticketServices = [
  {
    title: 'Spokane Airport Express',
    description: 'Connecting the Palouse to Spokane International Airport with reliable daily service.',
    price: '$59',
    destinations: 'Moscow ★ Pullman ★ Colfax ★ Spokane',
    image: spokaneImg,
    link: '/spokane-airport-express'
  },
  {
    title: 'Vacation Express',
    description: 'Safe and comfortable break transportation for WSU, U of I, and CWU students.',
    price: 'From $84',
    destinations: 'Arlington ★ Bellevue ★ Portland ★ Tacoma',
    image: vacationImg,
    link: '/vacation-express'
  },
  {
    title: 'Weekend Express',
    description: 'Holiday weekend shuttle service for 3-day weekends throughout the academic year.',
    price: 'From $84',
    destinations: 'Moscow ★ Pullman ★ Bellevue ★ Tacoma',
    image: weekendImg,
    link: '/aa-motorcoach' // Assuming Weekend Express info is part of AA or its own page
  },
  {
    title: 'Sun Valley Express',
    description: 'Daily shuttle service connecting Sun Valley and the Wood River Valley to Boise Airport.',
    price: 'Daily Service',
    destinations: 'Sun Valley ★ Hailey ★ Bellevue ★ Boise',
    image: sunValleyImg,
    link: '/sun-valley-express'
  }
];

const Tickets = () => {
  return (
    <div className="company-page">
      <section className="company-hero dynamic-hero" style={{ position: 'relative', overflow: 'hidden', minHeight: '450px', backgroundColor: '#000' }}>
        {/* YouTube Video Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/YksfVMtmpVY?autoplay=1&mute=1&loop=1&playlist=YksfVMtmpVY&start=15&end=240&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1" 
            title="Seattle Drone Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              width: '110vw',
              height: '61.87vw', // 16:9 of 110vw
              minHeight: '115vh',
              minWidth: '204.44vh', // 16:9 of 115vh
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
          ></iframe>
        </div>
        
        {/* Overlay to ensure text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2
        }}></div>

        <div className="container text-center" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 className="text-white" style={{ fontSize: '56px', textShadow: '2px 2px 10px rgba(0,0,0,0.5)', marginBottom: '10px' }}>Tickets & Scheduled Service</h1>
          <p className="hero-subtitle text-white" style={{ fontSize: '20px', textShadow: '1px 1px 5px rgba(0,0,0,0.5)', textTransform: 'uppercase', fontWeight: '600' }}>CHOOSE YOUR DESTINATION AND BOOK YOUR SEAT</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="tickets-grid">
            {ticketServices.map((service, index) => (
              <div key={index} className="feature-card">
                <div className="feature-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="feature-content" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100% - 180px)' }}>
                  <h3>{service.title}</h3>
                  <p className="description">{service.description}</p>
                  <p className="destinations">{service.destinations}</p>
                  <p className="price">{service.price}</p>
                  <Link to={service.link} className="btn btn-primary">View Schedule</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Need Help with Your Booking?</h2>
          <p className="mb-5">Our reservation team is here to assist you with any questions about our scheduled services.</p>
          <div className="contact-info-3-col" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="contact-info-col">
              <h3>Email Us</h3>
              <p><a href="mailto:reservations@starlinecollection.com">reservations@starlinecollection.com</a></p>
            </div>
            <div className="contact-info-col">
              <h3>Call Us</h3>
              <p><a href="tel:2067635817">206.763.5817</a></p>
            </div>
            <div className="contact-info-col">
              <h3>FAQ</h3>
              <p>Check our <Link to="/about#accessibility">accessibility</Link> page for special travel needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;
