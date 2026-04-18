import '../styles/CompanyPage.css';
import privacyHero from '../assets/wanderlie/PrivatePolicy.jpg';

const Privacy = () => {
  return (
    <div className="company-page">
      <section 
        className="company-hero dynamic-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${privacyHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px'
        }}
      >
        {/* Text removed to show image clearly */}
      </section>

      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 className="mb-4" style={{ color: 'var(--color-primary)' }}>Privacy Policy</h1>
            <p className="mb-5" style={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}>EFFECTIVE AS OF APRIL 18, 2026</p>

            <p className="mb-5">Protecting your private information is our priority. This Statement of Privacy applies to discoverstarline.com and Starline Luxury Coaches and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Starline Luxury Coaches include discoverstarline.com. The Starline Luxury Coaches website is a travel and transportation site. By using the Starline Luxury Coaches website, you consent to the data practices described in this statement.</p>

            <h2 className="mb-4">Collection of your Personal Information</h2>
            <p className="mb-4">In order to better provide you with products and services offered on our Site, Starline Luxury Coaches may collect personally identifiable information, such as your:</p>
            <ul className="location-list mb-4">
              <li>First and Last Name</li>
              <li>Mailing Address</li>
              <li>E-mail Address</li>
              <li>Phone Number</li>
            </ul>
            <p className="mb-5">If you purchase Starline Luxury Coaches's products and services, we collect bill and credit card information. This information is used to complete the purchase transaction. We do not collect any personal information about you unless you voluntarily provide it to us.</p>

            <h2 className="mb-4">Sharing Information with Third Parties</h2>
            <p className="mb-4">Starline Luxury Coaches does not sell, rent or lease its customer lists to third parties.</p>
            <p className="mb-5">Starline Luxury Coaches may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Starline Luxury Coaches, and they are required to maintain the confidentiality of your information.</p>

            <h2 className="mb-4">Automatically Collected Information</h2>
            <p className="mb-5">Information about your computer hardware and software may be automatically collected by Starline Luxury Coaches. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Starline Luxury Coaches website.</p>

            <h2 className="mb-4">Security of your Personal Information</h2>
            <p className="mb-4">Starline Luxury Coaches secures your personal information from unauthorized access, use, or disclosure. Starline Luxury Coaches uses the following methods for this purpose:</p>
            <ul className="location-list mb-4">
              <li>SSL Protocol</li>
            </ul>
            <p className="mb-5">When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.</p>

            <h2 className="mb-4">Children Under Thirteen</h2>
            <p className="mb-5">Starline Luxury Coaches does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>

            <h2 className="mb-4">Contact Information</h2>
            <p className="mb-4">Starline Luxury Coaches welcomes your questions or comments regarding this Statement of Privacy. If you believe that Starline Luxury Coaches has not adhered to this Statement, please contact Starline Luxury Coaches at:</p>
            <div className="address-box mb-4">
              <p><strong>Starline Luxury Coaches</strong></p>
              <p>9801 Martin Luther King Jr Way S</p>
              <p>Seattle, Washington 98118</p>
              <p className="mt-3">Email Address: <a href="mailto:sales@discoverstarline.com">sales@discoverstarline.com</a></p>
              <p>Telephone number: 206.763.5817</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
