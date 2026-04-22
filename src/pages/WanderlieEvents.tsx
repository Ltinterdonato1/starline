import { useState, useEffect } from 'react';
import '../styles/CompanyPage.css';

// Image imports from the new wanderlie folder
import heroImg from '../assets/wanderlie/9.jpg';
import luxuryInterior from '../assets/wanderlie/interior_purple.jpg';
import festivalImg from '../assets/wanderlie/10.png';
import holidayImg from '../assets/wanderlie/spaceneedle.jpg';
import hopsImg from '../assets/wanderlie/unsplash-image-snnhGYNqm44.jpg';
import musicImg from '../assets/wanderlie/4.png';
import sportsImg from '../assets/wanderlie/unsplash-image-XmYSlYrupL8.jpg';
import stgBanner from '../assets/wanderlie/STG+Web+Banner.png';

// Icon imports for Why Choose Us
import iconParking from '../assets/wanderlie/1.png';
import iconCurbside from '../assets/wanderlie/2.png';
import iconNight from '../assets/wanderlie/3.png';
import iconImpaired from '../assets/wanderlie/4(1).png';

import img9_png from '../assets/wanderlie/9.png';
import img10_1_png from '../assets/wanderlie/10(1).png';
import img11_1_png from '../assets/wanderlie/11(1).png';
import img12_png from '../assets/wanderlie/12.png';
import whyUsImg from '../assets/wanderlie/Why+choose+us.png';
import gotTicketsImg from '../assets/wanderlie/Got+tickets.png';
import unsplashHero from '../assets/wanderlie/unsplash-image-XmYSlYrupL8.jpg';

// Upcoming Event Image Imports
import bigThief from '../assets/wanderlie/upcoming events/Big Theif.webp';
import cake from '../assets/wanderlie/upcoming events/Cake.webp';
import dsdNol from '../assets/wanderlie/upcoming events/DSD+&+NOL_RF_1080x1080.webp';
import jrad from '../assets/wanderlie/upcoming events/JoeRussoAlmsotDead.webp';
import menAtWork from '../assets/wanderlie/upcoming events/Menatwork.webp';
import headHeart from '../assets/wanderlie/upcoming events/STG_TheHeadAndTheHeart_Remlinger_1080x1080.jpg';
import blackKeys from '../assets/wanderlie/upcoming events/The+Black+Keys_RF_1080x1080.jpg';
import sacredSouls from '../assets/wanderlie/upcoming events/Thee Sacred Souls.webp';

const upcomingEvents = [
  {
    title: 'The Black Keys',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'May',
    day: '29',
    year: '2026',
    time: '6:30 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: blackKeys
  },
  {
    title: 'The Black Keys',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'May',
    day: '30',
    year: '2026',
    time: '6:30 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: blackKeys
  },
  {
    title: '15th Anniversary Tour: The Head and The Heart',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Jul',
    day: '10',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: headHeart
  },
  {
    title: '15th Anniversary Tour: The Head and The Heart',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Jul',
    day: '11',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: headHeart
  },
  {
    title: 'Deep Sea Diver & Nation of Language',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Jul',
    day: '18',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: dsdNol
  },
  {
    title: 'Thee Sacred Souls',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Aug',
    day: '08',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: sacredSouls
  },
  {
    title: 'Men at Work & Toad The Wet Sprocket',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Aug',
    day: '14',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: menAtWork
  },
  {
    title: "Joe Russo's Almost Dead",
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Aug',
    day: '15',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: jrad
  },
  {
    title: 'Cake',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Aug',
    day: '23',
    year: '2026',
    time: '7:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: cake
  },
  {
    title: 'Big Thief: Somersault Slide 360 Tour',
    subtitle: 'STG + Remlinger Concerts at the Farm',
    month: 'Sep',
    day: '25',
    year: '2026',
    time: '6:00 PM',
    location: 'Remlinger Farms, Carnation, WA',
    price: '$49 roundtrip',
    image: bigThief
  }
];

const WanderlieEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1200) {
        setItemsToShow(4);
      } else if (width > 992) {
        setItemsToShow(3);
      } else {
        setItemsToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, upcomingEvents.length - itemsToShow);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="company-page wanderlie-page">
      {/* Hero Section */}
      <section className="company-hero" style={{ backgroundImage: `url(${heroImg})`, height: '70vh', backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment: 'scroll', backgroundColor: '#000' }}>
      </section>

      {/* Adventure Mission Section */}
      <section className="section-padding">
        <div className="container">
          <div className="split-layout" style={{ alignItems: 'flex-start', gap: '80px' }}>
            <div className="text-content text-center">
              <div className="mb-4">
                <img src={gotTicketsImg} alt="Got Tickets?" style={{ maxWidth: '280px', margin: '0 auto' }} />
              </div>
              <h2 style={{ fontSize: '48px', fontWeight: '400', color: 'var(--color-primary)', lineHeight: '1.2' }}>How ya gonna get there?</h2>
            </div>
            <div className="text-content" style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '19px', lineHeight: '1.8', color: '#555' }}>
                At Wanderlie, we specialize in providing safe, reliable, and hassle-free transportation for your next big adventure. Whether it’s a music festival, a holiday event, or a wine and food event, we make sure you get there safely, quickly, and comfortably. Our luxury motorcoaches, professional drivers, and premiere curbside drop-off and pick-up locations let you fully enjoy your event without worrying about parking, night driving, or impaired driving.
              </p>
              <p className="mt-4" style={{ fontSize: '20px', fontWeight: '600', color: '#333' }}>With Wanderlie, your seat to adventure is always just a click away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories Grid - 5 Items */}
      <section className="section-padding" style={{ paddingTop: '0px' }}>
        <div className="container">
          <h2 className="section-title text-center mb-5">TYPES OF EVENTS</h2>
          <div className="story-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <div className="feature-card event-type-card">
              <div className="feature-image"><img src={festivalImg} alt="Festivals" /></div>
              <div className="feature-content">
                <h3>Festivals</h3>
              </div>
            </div>
            <div className="feature-card event-type-card">
              <div className="feature-image"><img src={holidayImg} alt="Holiday Events" /></div>
              <div className="feature-content">
                <h3>Holiday Events</h3>
              </div>
            </div>
            <div className="feature-card event-type-card">
              <div className="feature-image"><img src={hopsImg} alt="Hops & Brews" /></div>
              <div className="feature-content">
                <h3>Hops & Brews</h3>
              </div>
            </div>
            <div className="feature-card event-type-card">
              <div className="feature-image"><img src={musicImg} alt="Music & Concerts" /></div>
              <div className="feature-content">
                <h3>Music & Concerts</h3>
              </div>
            </div>
            <div className="feature-card event-type-card">
              <div className="feature-image"><img src={sportsImg} alt="Sporting Events" /></div>
              <div className="feature-content">
                <h3>Sporting Events</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury/Why Us Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="split-layout" style={{ alignItems: 'center', gap: '60px' }}>
            <div className="text-content" style={{ textAlign: 'left' }}>
              <div className="mb-4">
                <img src={whyUsImg} alt="Why Choose Us" style={{ maxWidth: '280px' }} />
              </div>
              <p className="mb-4" style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
                The luxurious interior of a Wanderlie coach, featuring comfortable seating and modern amenities for premium travel experiences.
              </p>
              <ul className="location-list mt-4" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <img src={iconParking} alt="Parking" style={{ width: '40px', height: 'auto' }} /> <strong>No Parking Hassels</strong>
                </li>
                <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <img src={iconCurbside} alt="Curbside" style={{ width: '40px', height: 'auto' }} /> <strong>Event Curbside Pickup & Dropoff</strong>
                </li>
                <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <img src={iconNight} alt="Night Driving" style={{ width: '40px', height: 'auto' }} /> <strong>Avoid Night Driving</strong>
                </li>
                <li style={{ marginBottom: '20px', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <img src={iconImpaired} alt="Impaired Driving" style={{ width: '40px', height: 'auto' }} /> <strong>Avoid Impaired Driving</strong>
                </li>
              </ul>
            </div>
            <div className="image-content">
              <img src={luxuryInterior} alt="Luxury Coach Interior" style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'contain', borderRadius: '12px', boxShadow: '0 15px 40px rgba(0,0,0,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Slider Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ marginBottom: 0 }}>UPCOMING EVENTS</h2>
            <div className="slider-nav">
              <button 
                onClick={prevSlide} 
                className={`slider-btn-circle ${currentIndex === 0 ? 'disabled' : ''}`}
                disabled={currentIndex === 0}
              >
                ←
              </button>
              <button 
                onClick={nextSlide} 
                className={`slider-btn-circle ${currentIndex >= maxIndex ? 'disabled' : ''}`}
                disabled={currentIndex >= maxIndex}
              >
                →
              </button>
            </div>
          </div>
          
          <div className="event-slider-viewport">
            <div 
              className="event-slider-track" 
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              }}
            >
              {upcomingEvents.map((event, index) => (
                <div key={index} className="event-slide-item">
                  <div className="feature-card event-card" style={{ textAlign: 'left', height: '100%', margin: '0 10px', display: 'flex', flexDirection: 'column' }}>
                    <div className="feature-image" style={{ aspectRatio: '1 / 1', height: 'auto', flexShrink: 0 }}>
                      <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="feature-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '15px' }}>
                      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ textAlign: 'center', borderRight: '1px solid #ddd', paddingRight: '10px' }}>
                          <p style={{ margin: 0, fontWeight: '700', color: '#c5a059', textTransform: 'uppercase', fontSize: '11px' }}>{event.month}</p>
                          <p style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{event.day}</p>
                        </div>
                        <div>
                          <p className="small mb-0" style={{ color: '#666', fontSize: '10px' }}>{event.subtitle}</p>
                          <h3 style={{ margin: 0, fontSize: '15px', color: '#2c2416' }}>{event.title}</h3>
                        </div>
                      </div>
                      
                      <div style={{ fontSize: '12px', color: '#555', marginBottom: '15px' }}>
                        <p className="mb-1"><strong>@</strong> {event.location}</p>
                        <p className="mb-1"><strong>Date:</strong> {event.month} {event.day}, {event.year}</p>
                        <p className="mb-0"><strong>Price:</strong> {event.price}</p>
                      </div>
                      
                      <button className="btn btn-gold" style={{ width: '100%', marginTop: 'auto', padding: '8px', fontSize: '13px' }}>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STG Banner Section with 4 points */}
      <section className="section-padding" style={{ paddingTop: '0px' }}>
        <div className="full-width-banner mb-5">
           <img src={stgBanner} alt="STG Web Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginTop: '60px', marginBottom: '40px', fontWeight: '500', fontSize: '28px', width: '100%', textAlign: 'center' }}>Safe Reliable Group Transportation</h2>
          
          <div className="story-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="text-center p-3">
              <div className="circle-img-container mb-4" style={{ width: '100px', height: '100px' }}>
                <img src={img9_png} alt="Hop On" />
              </div>
              <h3 className="mb-3">Hop On and Relax</h3>
              <p>With so many events to attend, once you have your tickets, turn the driving over to us.</p>
            </div>
            <div className="text-center p-3">
              <div className="circle-img-container mb-4" style={{ width: '100px', height: '100px' }}>
                <img src={img10_1_png} alt="Easy Booking" />
              </div>
              <h3 className="mb-3">Easy Booking</h3>
              <p>Booking online allows you to pick your favorite activities and confirms your seat.</p>
            </div>
            <div className="text-center p-3">
              <div className="circle-img-container mb-4" style={{ width: '100px', height: '100px' }}>
                <img src={img11_1_png} alt="Professional Drivers" />
              </div>
              <h3 className="mb-3">Professional Drivers</h3>
              <p>We have a team of drivers who keep your safety and travel their #1 priority.</p>
            </div>
            <div className="text-center p-3">
              <div className="circle-img-container mb-4" style={{ width: '100px', height: '100px' }}>
                <img src={img12_png} alt="Luxury Seating" />
              </div>
              <h3 className="mb-3">Luxury Seating</h3>
              <p>True luxury travel starts in a motorcoach. Enjoy reclining seats and many amenities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Image Section */}
      <section style={{ height: '400px', width: '100%', overflow: 'hidden', marginTop: '-40px' }}>
        <img src={unsplashHero} alt="Wanderlie Adventure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </section>
    </div>
  );
};

export default WanderlieEvents;
