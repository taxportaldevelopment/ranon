
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Header from './components/layout/Header';
import { Link, Route, Routes } from "react-router-dom";
import WebDesign from './components/WebDesign';
import MobileDesign from './components/MobileDesign';
import Ecommerce from './components/Ecommerce';
import SeoEng from './components/SeoEng';
import TaxPortal from './components/TaxPortal';
// image
import image1 from "./assets/hoem-page/christmas-uncle.png";
import image2 from "./assets/hoem-page/4XCO.gif"
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
// icons
import { MdHome } from "react-icons/md";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
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
           <Footer/>
          {/* <div className="footer-celeb">
                 <div className="left-side" style={{position:"fixed",bottom:"0",right:"0"}}>
                       <img src={image1} className='celebta' height={150} alt="" />
                 </div>
                 <div className="right-side" style={{position:"fixed",bottom:"-30px",left:"0"}}>
                       <img src={image2} className='celebta' height={150} alt="" />
                 </div>
          </div> */}

          {/* mobile responsive */}
          <div className="mobile-responsive  w-100">
                <div className=' w-100 d-flex justify-content-center align-items-center py-2'>
                 <ul className='mobile-responsive-list'>
                    <Link to={"/ranon"}><li className='d-inline text-dark'><div className='d-inline px-4'><MdHome className='h1' /></div></li></Link>
                    <Link to={"/about"}><li className='d-inline text-dark'><div className='d-inline px-4'><MdOutlineRoundaboutLeft className='h1' /></div></li></Link>
                    <li className='d-inline menu-list-add'><div className='d-inline px-4'>
                      <IoMenu className='h1  ' />
                         <div className="mobile-menu p-2">
                              <ul>
                                 <Link className='d-inline text-dark roboto ' to={"/web-design"}><li className='pe-3'>Web Design</li></Link>
                                 <Link className='d-inline text-dark roboto ' to={"/mobile-design"}><li className='pe-3'>Mobile Design</li></Link>
                                 <Link className='d-inline text-dark roboto ' to={"/ecommerce"}><li className='pe-3'>Ecommerce</li></Link>
                                 <Link className='d-inline text-dark roboto ' to={"/seo-engineer"}><li className='pe-3'>Seo Engineer</li></Link>
                                 <Link className='d-inline text-dark roboto ' to={"/taxportal"}><li className='pe-3'>Taxportal</li></Link>
                              </ul>
                         </div>
                      </div></li>
                    <Link to={"/contact"}><li className='d-inline text-dark'><div className='d-inline px-4'><IoIosContact className='h1' /></div></li></Link>
                 </ul>
                </div>
          </div>
    </div>
  )
}

export default App
