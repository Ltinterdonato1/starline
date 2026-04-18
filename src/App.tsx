import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import StarlineLuxury from './pages/StarlineLuxury';
import AAMotorcoach from './pages/AAMotorcoach';
import SunValleyExpress from './pages/SunValleyExpress';
import WheatlandExpress from './pages/WheatlandExpress';
import SpokaneAirportExpress from './pages/SpokaneAirportExpress';
import VacationExpress from './pages/VacationExpress';
import Fleet from './pages/Fleet';
import MiniCoachDetails from './pages/MiniCoachDetails';
import MidCoachDetails from './pages/MidCoachDetails';
import MotorcoachDetails from './pages/MotorcoachDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import WanderlieEvents from './pages/WanderlieEvents';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starline-luxury" element={<StarlineLuxury />} />
            <Route path="/aa-motorcoach" element={<AAMotorcoach />} />
            <Route path="/sun-valley-express" element={<SunValleyExpress />} />
            <Route path="/wheatland-express" element={<WheatlandExpress />} />
            <Route path="/spokane-airport-express" element={<SpokaneAirportExpress />} />
            <Route path="/vacation-express" element={<VacationExpress />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/fleet/mini-coach" element={<MiniCoachDetails />} />
            <Route path="/fleet/mid-coach" element={<MidCoachDetails />} />
            <Route path="/fleet/motorcoach" element={<MotorcoachDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/wanderlie-events" element={<WanderlieEvents />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
