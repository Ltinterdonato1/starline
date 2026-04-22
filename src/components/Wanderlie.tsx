import { Link } from 'react-router-dom';
import '../styles/Wanderlie.css';
import interiorPurple from '../assets/wanderlie/interior_purple.jpg';

const Wanderlie = () => {
  return (
    <section 
      id="wanderlie" 
      className="wanderlie section-padding"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${interiorPurple})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container wanderlie-container">
        <div className="wanderlie-text-centered">
          <span className="wanderlie-tag">Wanderlie Events</span>
          <h2 className="text-white">YOUR SEAT TO ADVENTURE!</h2>
          <p className="text-white">
            Safe, reliable, and hassle-free transportation for major events. 
            Enjoy your next big adventure by eliminating common travel stressors 
            like parking and night driving with premiere curbside service.
          </p>
          <ul className="wanderlie-features text-white">
            <li>Festivals & Music Concerts</li>
            <li>Sporting Events</li>
            <li>Hops & Brews Tours</li>
            <li>WSU Back Home Bus</li>
          </ul>
          <Link to="/wanderlie-events" className="btn btn-gold">View All Events</Link>
        </div>
      </div>
    </section>
  );
};

export default Wanderlie;
