import Header from './components/Header';
import Hero from './components/Hero';
import CompanyGrid from './components/CompanyGrid';
import Wanderlie from './components/Wanderlie';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CompanyGrid />
        <Wanderlie />
      </main>
      <Footer />
    </div>
  );
}

export default App;
