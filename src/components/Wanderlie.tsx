import { Link } from 'react-router-dom';
import '../styles/Wanderlie.css';
import whyUsBus from '../assets/whyusbus.webp';

const Wanderlie = () => {
  return (
    <section id="wanderlie" className="wanderlie section-padding">
      <div className="container wanderlie-container">
        <div className="wanderlie-text">
          <span className="wanderlie-tag">Wanderlie Events</span>
          <h2>YOUR SEAT TO ADVENTURE!</h2>
          <p>
            Safe, reliable, and hassle-free transportation for major events. 
            Enjoy your next big adventure by eliminating common travel stressors 
            like parking and night driving with premiere curbside service.
          </p>
          <ul className="wanderlie-features">
            <li>Festivals & Music Concerts</li>
            <li>Sporting Events</li>
            <li>Hops & Brews Tours</li>
            <li>WSU Back Home Bus</li>
          </ul>
          <Link to="/wanderlie-events" className="btn btn-gold">View All Events</Link>
        </div>
        <div className="wanderlie-image">
          <img src={whyUsBus} alt="Wanderlie Adventure Bus" className="hero-bus-img" />
        </div>
      </div>
    </section>
  );
};

export default Wanderlie;
