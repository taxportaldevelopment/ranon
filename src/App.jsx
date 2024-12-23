
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Header from './components/layout/Header';
import { Route, Routes } from "react-router-dom";
import WebDesign from './components/WebDesign';
import MobileDesign from './components/MobileDesign';
import Ecommerce from './components/Ecommerce';
import SeoEng from './components/SeoEng';
import TaxPortal from './components/TaxPortal';
// image
import image1 from "./assets/hoem-page/christmas-uncle.png";
import image2 from "./assets/hoem-page/4XCO.gif"
import Contact from './components/Contact';
function App() {


  return (
    <div>


         <Header/>
           <Routes>
               <Route path='/ranon'  element={<Home/>}/>
               <Route path='/about'  element={<About/>}/>
               <Route path='/web-design'  element={<WebDesign/>}/>
               <Route path='/mobile-design'  element={<MobileDesign/>}/>
               <Route path='/ecommerce'  element={<Ecommerce/>}/>
               <Route path='/seo-engineer'  element={<SeoEng/>}/>
               <Route path='/taxportal'  element={<TaxPortal/>}/>
               <Route path='/contact' element={<Contact/>} />
          </Routes>
          <div className="footer-celeb">
                 <div className="left-side" style={{position:"fixed",bottom:"0",right:"0"}}>
                       <img src={image1} className='celebta' height={150} alt="" />
                 </div>
                 <div className="right-side" style={{position:"fixed",bottom:"-30px",left:"0"}}>
                       <img src={image2} className='celebta' height={150} alt="" />
                 </div>
          </div>
    </div>
  )
}

export default App
