import './App.css';
// import Hero from './Components/Hero/Hero';
// import Map from './Components/Map/Map';
import Nav from './Components/Navbar/NavTwo';
import Bhk from './Components/bhk/Bhk';
import Category from './Components/categories/Category';
import Connect from './Components/connect/Connect';
import Feature from './Components/features/Feature';
import Footer from './Components/footer/Footer';
import Gallery from './Components/gallery/Gallery';
import Testimonial from './Components/testimonial/Testimonial';
import Pop from './Components/pop-up/Pop';
import Specific from './Components/specification/Specific';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Pricing from './Components/Pricing/Pricing';
import Formpage from './Components/Form/Formpage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/formpage' element={<Formpage/>}/>

      </Routes>
      </BrowserRouter>
       
       
       <Footer />

    </div>
  );
}

export default App;
