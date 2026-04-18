import '../styles/Wanderlie.css';

const Wanderlie = () => {
  return (
    <section id="wanderlie" className="wanderlie section-padding">
      <div className="container wanderlie-container">
        <div className="wanderlie-text">
          <span className="wanderlie-tag">Wanderlie Events</span>
          <h2>Elegant Transportation for Your Special Day</h2>
          <p>
            From weddings and gala events to corporate retreats and private parties, 
            Wanderlie provides the sophisticated touch your occasion deserves. 
            Experience the gold standard in event transportation.
          </p>
          <ul className="wanderlie-features">
            <li>Customized Itineraries</li>
            <li>On-site Event Coordinators</li>
            <li>Luxury Vehicle Options</li>
            <li>Premium Amenities</li>
          </ul>
          <button className="btn btn-gold">Inquire for Your Event</button>
        </div>
        <div className="wanderlie-image">
          <div className="image-placeholder gold-border"></div>
        </div>
      </div>
    </section>
  );
};

export default Wanderlie;
