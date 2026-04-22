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
      <section className="company-hero bg-primary">
        <div className="container text-center">
          <h1 className="text-white">Tickets & Scheduled Service</h1>
          <p className="hero-subtitle text-white">CHOOSE YOUR DESTINATION AND BOOK YOUR SEAT</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="features-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {ticketServices.map((service, index) => (
              <div key={index} className="feature-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="feature-image" style={{ height: '180px' }}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="feature-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: '25px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{service.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-secondary)', marginBottom: '15px' }}>{service.description}</p>
                  <p style={{ fontSize: '13px', fontWeight: '700', marginBottom: '5px' }}>{service.destinations}</p>
                  <p style={{ color: 'var(--color-accent)', fontWeight: '800', fontSize: '18px', marginTop: 'auto', marginBottom: '20px' }}>{service.price}</p>
                  <Link to={service.link} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>View Schedule</Link>
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
