import { useState } from 'react';
import '../styles/CompanyPage.css';
import seattleHero from '../assets/Seattle.jpg';

const Contact = () => {
  const [subject, setSubject] = useState('');

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubject(e.target.value);
  };

  return (
    <div className="company-page">
      <section className="company-hero dynamic-hero" style={{ position: 'relative', overflow: 'hidden', height: '60vh', minHeight: '400px' }}>
        {/* YouTube Video Background Wrapper */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <iframe 
            src="https://www.youtube.com/embed/YksfVMtmpVY?autoplay=1&mute=1&loop=1&playlist=YksfVMtmpVY&start=15&end=240&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover'
            }}
            title="Seattle Drone Video"
          ></iframe>
        </div>

        {/* Fallback Image (shows while loading or if iframe fails) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${seattleHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }}></div>
        
        {/* Dark Overlay for Text Contrast */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.45)',
          zIndex: 1
        }}></div>

        <div className="container text-center" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 className="text-white" style={{ fontSize: '64px', textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>Contact Us</h1>
          <p className="hero-subtitle text-white" style={{ fontSize: '24px', letterSpacing: '2px' }}>WE'D LOVE TO HEAR FROM YOU</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          
          <div className="contact-info-3-col">
            {/* Column 1: Sales */}
            <div className="contact-info-col">
              <h2>Online Tickets & Sales</h2>
              <p>Need to reschedule or cancel? <strong>Send us a message below.</strong></p>
              <p className="mt-2">Or email your ticket # to:<br/> <a href="mailto:Reservations@StarlineCollection.com">Reservations@StarlineCollection.com</a></p>
              
              <h2 className="mt-5">Charter Sales</h2>
              <p>For quotes and inquiries:<br/> <a href="mailto:SCSales@StarlineCollection.com">SCSales@StarlineCollection.com</a></p>
            </div>

            {/* Column 2: Assistance */}
            <div className="contact-info-col">
              <h2>24/7 Assistance</h2>
              <h1 style={{ color: 'var(--color-accent)' }}>206.763.5817</h1>
              <p>Emergency requests or last-minute charter changes through our Manager on Duty.</p>
            </div>

            {/* Column 3: Wanderlie */}
            <div className="contact-info-col">
              <h2>WANDERLIE EVENTS</h2>
              <p><strong>Event Transportation</strong></p>
              <p>Seattle, WA & Beyond</p>
              <p className="mt-4">Phone: <a href="tel:2067635817">206.763.5817</a></p>
              <p>Email: <a href="mailto:info@wanderlie.com">info@wanderlie.com</a></p>
              
              <div className="social-icons" style={{ justifyContent: 'center', marginTop: 'auto', paddingTop: '20px' }}>
                <a href="https://www.facebook.com/WanderlieEvents" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--color-primary)', fontSize: '24px', margin: '0 10px' }}>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/wanderlieevents/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--color-primary)', fontSize: '24px', margin: '0 10px' }}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="my-5" style={{ opacity: 0.1 }} />

          <div className="contact-form-section" style={{ marginTop: '60px' }}>
            <h2 className="mb-4" style={{ textAlign: 'center', width: '100%', display: 'block' }}>Send Us a Message</h2>
            <form className="contact-form" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    required 
                    value={subject}
                    onChange={handleSubjectChange}
                    style={{ width: '100%', padding: '12px 15px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
                  >
                    <option value="">-- Please Select --</option>
                    <option value="quote">Quotes and Inquiries</option>
                    <option value="reschedule">Reschedule</option>
                    <option value="wanderlie">Wanderlie Events</option>
                  </select>
                </div>

                <div className="form-group">
                  {subject === 'reschedule' && (
                    <>
                      <label htmlFor="ticketNumber">Ticket #</label>
                      <input type="text" id="ticketNumber" name="ticketNumber" placeholder="Enter ticket number" required />
                    </>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">How can we help you?</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us what you are looking for..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg mt-4" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
