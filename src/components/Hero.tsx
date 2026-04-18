import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h4>Serving the Pacific Northwest Since 1998</h4>
        <h1>Safe. Friendly. Professional.</h1>
        <p>The premier group transportation collection in Washington, Idaho, and beyond.</p>
        <div className="hero-actions">
          <button className="btn btn-primary">Book Tickets</button>
          <button className="btn btn-secondary-outline">Our Fleet</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
