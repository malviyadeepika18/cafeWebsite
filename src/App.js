import logo from './logo.svg';
import './App.css';
import MyHeader from './component/header';
import Section1 from './component/Section';
import Menu from './component/menu';
import './component/style.css';
import './bootstrap.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import About from './component/about';
import Contact from './component/contact';
import Reservation from './component/reservation';
import Gallery from './component/gallery';


function App() {
  return (

    <div className="App">

      <MyHeader />
      <Router>
        <Routes>
          <Route path="/" element={<Section1 />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>

    </div>


  );
}

export default App;
