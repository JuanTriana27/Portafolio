import Header from './components/Index/Header/Header';
import Hero from './components/Index/Hero';
import SocialIcons from './components/Index/SocialIcons/SocialIcons';
import ScrollDown from './components/Index/ScrollDown/ScrollDown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <SocialIcons />
      <ScrollDown />
    </div>
  );
}

export default App;