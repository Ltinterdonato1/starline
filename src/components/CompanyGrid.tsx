import '../styles/CompanyGrid.css';

const companies = [
  { name: 'A&A Motorcoach', location: 'Yakima, WA', description: 'Premier motorcoach service for Central Washington.' },
  { name: 'Starline Luxury', location: 'Seattle, WA', description: 'High-end executive transportation and charters.' },
  { name: 'Sun Valley Express', location: 'Boise / Sun Valley', description: 'Reliable shuttle service to Idaho\'s top resort.' },
  { name: 'Wheatland Express', location: 'Pullman, WA', description: 'Serving the Palouse and WSU community since 1989.' },
];

const CompanyGrid = () => {
  return (
    <section id="about" className="company-grid section-padding">
      <div className="container">
        <h2 className="section-title">The Starline Collection</h2>
        <p className="section-subtitle">Local experts, global standards. Discover our family of companies.</p>
        
        <div className="grid">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <div className="card-image-placeholder"></div>
              <div className="card-content">
                <h3>{company.name}</h3>
                <span className="location">{company.location}</span>
                <p>{company.description}</p>
                <a href="#" className="visit-link">Visit Website →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyGrid;
