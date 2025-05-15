import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Index/Header/Header';
import Hero from './components/Index/Hero';
import Trabajos from './components/Index/Trabajos/Trabajos';
import SocialIcons from './components/Index/SocialIcons/SocialIcons';
import ScrollDown from './components/Index/ScrollDown/ScrollDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SocialIcons />
              <ScrollDown />
            </>
          } />
          <Route path="/trabajos" element={<Trabajos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;