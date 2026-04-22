import { useState, useEffect } from 'react';
import '../styles/Hero.css';
import seattleImg from '../assets/Seattle.jpg';
import seattleLocationImg from '../assets/Seattle_Location.jpg';

const slides = [
  {
    image: seattleImg,
    subtitle: "Serving the Pacific Northwest Since 1998",
    title: "Safe. Friendly. Professional.",
    description: "The premier group transportation collection in Washington, Idaho, and beyond."
  },
  {
    image: seattleLocationImg,
    subtitle: "Premier Charter Services",
    title: "Efficiency. Energy. Education.",
    description: "Leading the way in safe and reliable group travel solutions."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 30000); // 30 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? 'slide active' : 'slide'}
          style={{ backgroundImage: `linear-gradient(rgba(0, 33, 71, 0.5), rgba(0, 33, 71, 0.5)), url(${slide.image})` }}
        >
          {index === current && (
            <div className="container hero-content">
              <h4>{slide.subtitle}</h4>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="hero-actions">
                <button className="btn btn-primary">Book Tickets</button>
              </div>
            </div>
          )}
        </div>
      ))}

      <button className="slider-arrow prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="slider-arrow next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? 'dot active' : 'dot'}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
