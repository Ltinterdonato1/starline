import { Link } from 'react-router-dom';
import '../styles/CompanyGrid.css';
import aaMotorcoach from '../assets/A&A-Motorcoach.jpg';
import starlineLuxury from '../assets/56_PassCoach/bus1.jpg';
import sunValleyExpress from '../assets/16-24_PassCoach/mini-1.jpg';
import wheatlandExpress from '../assets/Wheetland_Express.jpg';

const companies = [
  { 
    name: 'A&A Motorcoach', 
    location: 'Yakima, WA', 
    description: 'Premier motorcoach service for Central Washington.',
    image: aaMotorcoach,
    route: '/aa-motorcoach'
  },
  { 
    name: 'Starline Luxury', 
    location: 'Seattle, WA', 
    description: 'High-end executive transportation and charters.',
    image: starlineLuxury,
    route: '/starline-luxury'
  },
  { 
    name: 'Sun Valley Express', 
    location: 'Boise / Sun Valley', 
    description: 'Reliable shuttle service to Idaho\'s top resort.',
    image: sunValleyExpress,
    route: '/sun-valley-express'
  },
  { 
    name: 'Wheatland Express', 
    location: 'Pullman, WA', 
    description: 'Serving the Palouse and WSU community since 1989.',
    image: wheatlandExpress,
    route: '/wheatland-express'
  },
];

const CompanyGrid = () => {
  return (
    <section id="about" className="company-grid section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">THE STARLINE COLLECTION</h2>
        </div>

        <div className="grid">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <div className="card-image">
                <img src={company.image} alt={company.name} />
              </div>
              <div className="card-content">
                <Link to={company.route} className="company-title-link">
                  <h3>{company.name}</h3>
                </Link>
                <span className="location">{company.location}</span>
                <p>{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGrid;

