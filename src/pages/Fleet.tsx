import { useState } from 'react';
import '../styles/CompanyPage.css';
import mini1Img from '../assets/mini-1.jpg';
import midImg from '../assets/Starline.jpg';
import img40_1 from '../assets/40-1.jpg';
import img40_2 from '../assets/40-2.jpg';
import img40_3 from '../assets/40-3.jpg';
import img40_4 from '../assets/40-4.jpg';
import img40_5 from '../assets/40-5.jpg';
import img40_6 from '../assets/40-6.jpg';
import img40_7 from '../assets/40-7.jpg';
import img40_8 from '../assets/40-8.jpg';

import img56_1 from '../assets/56-1.jpg';
import img56_2 from '../assets/56-2.jpg';
import img56_3 from '../assets/56-3.jpg';
import img56_4 from '../assets/56-4.jpg';
import img56_5 from '../assets/56-5.jpg';
import img56_6 from '../assets/56-6.jpg';

const midGallery = [img40_8, img40_1, img40_2, img40_3, img40_4, img40_5, img40_6, img40_7];
const motorcoachGallery = [img56_6, midImg, img56_1, img56_2, img56_3, img56_4, img56_5];

const Fleet = () => {
  const [currentMidIdx, setCurrentMidIdx] = useState(0);
  const [currentMotorIdx, setCurrentMotorIdx] = useState(0);

  const nextMid = () => {
    setCurrentMidIdx((prev) => (prev === midGallery.length - 1 ? 0 : prev + 1));
  };

  const prevMid = () => {
    setCurrentMidIdx((prev) => (prev === 0 ? midGallery.length - 1 : prev - 1));
  };

  const nextMotor = () => {
    setCurrentMotorIdx((prev) => (prev === motorcoachGallery.length - 1 ? 0 : prev + 1));
  };

  const prevMotor = () => {
    setCurrentMotorIdx((prev) => (prev === 0 ? motorcoachGallery.length - 1 : prev - 1));
  };

  const fleetItems = [
    {
      title: '16-24 Passenger Mini Coach',
      subtitle: 'ADA Starline 16-24 Passenger Mini Coach',
      overview: 'Mini-coaches come in a variety of sizes able to seat from a group of 16 to 24. The minis are roughly 28 feet long, 8.5 feet wide, and 9 feet tall. Airport transfer from the airport to a hotel? You’ll most likely want the 24 passenger mini for it’s luggage space.',
      standardFeatures: ['Reclining seats', 'Color DVD system', 'Rear bus storage'],
      optionalFeatures: ['PA system', 'Overhead reading lights', '12 volt / USB outlets', 'WiFi', 'ADA accessibility (2 wheelchair maximum)'],
      image: mini1Img,
      imageRight: true
    },
    {
      title: '40 Passenger Mid-Sized Coach',
      subtitle: 'ADA Starline 40 Passenger Mid-Sized Coach',
      overview: 'The mid-sized motorcoach, coming in at 35 feet long, 8.5 feet wide, and 11 feet 5 inches tall. Perfect for medium groups or small groups with more equipment.',
      standardFeatures: ['Restroom', 'PA system', 'Reclining seats', 'Overhead and under bus storage', 'Color DVD system', 'Individual lighting and air'],
      optionalFeatures: ['12 volt / USB outlets', 'Seatbelts', 'WiFi', 'ADA accessibility (2 wheelchair maximum)'],
      gallery: midGallery,
      currentIndex: currentMidIdx,
      onNext: nextMid,
      onPrev: prevMid,
      imageRight: false
    },
    {
      title: '56 Passenger Motorcoach',
      subtitle: 'ADA Starline 56 Passenger Motorcoach',
      overview: 'The largest of our motorcoaches, coming in at 45 feet long, 8.5 feet wide, and 11 feet 5 inches tall. Aside from capacity, this size motorcoach is five feet longer (45′) than its 47 passenger counterpart. Perfect for moving large groups with equipment.',
      standardFeatures: ['Restroom', 'PA system', 'Reclining seats', 'Overhead and under bus storage', 'Color DVD system', 'Individual lighting and air'],
      optionalFeatures: ['12 volt / USB outlets', 'Seatbelts', 'WiFi', 'ADA accessibility (2 wheelchair maximum)'],
      gallery: motorcoachGallery,
      currentIndex: currentMotorIdx,
      onNext: nextMotor,
      onPrev: prevMotor,
      imageRight: true
    }
  ];

  return (
    <div className="company-page">
      <section className="fleet-staggered section-padding">
        <div className="container">
          {fleetItems.map((item, index) => (
            <div key={index} className={`fleet-row ${item.imageRight ? 'image-right' : 'image-left'}`}>
              <div className="fleet-text">
                <h3>{item.title}</h3>
                <h4 className="fleet-subtitle">{item.subtitle}</h4>
                <p className="mb-4">{item.overview}</p>
                
                <div className="fleet-features-grid">
                  <div className="feature-group">
                    <p><strong>Standard Features:</strong></p>
                    <ul className="mini-feature-list">
                      {item.standardFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="feature-group">
                    <p><strong>Optional Features:</strong></p>
                    <ul className="mini-feature-list">
                      {item.optionalFeatures.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fleet-image">
                {item.gallery ? (
                  <div className="fleet-slider">
                    <img src={item.gallery[item.currentIndex]} alt={`${item.title}`} className="slider-img" />
                    <button className="slider-btn prev" onClick={item.onPrev}>&#10094;</button>
                    <button className="slider-btn next" onClick={item.onNext}>&#10095;</button>
                    <div className="slider-counter">{item.currentIndex + 1} / {item.gallery.length}</div>
                  </div>
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-light" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>Need a specific configuration?</h2>
          <p className="mt-3">Our fleet is modern, well-maintained, and ready for your next adventure.</p>
          <button className="btn btn-primary mt-4" style={{ margin: '30px auto 0', display: 'block' }}>Request a Quote</button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
