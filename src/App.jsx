
import './App.css'
import About from './components/About';
import Home from './components/Home';
import Header from './components/layout/Header';
import { Route, Routes } from "react-router-dom";
import WebDesign from './components/WebDesign';
import MobileDesign from './components/MobileDesign';
import Ecommerce from './components/Ecommerce';
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
          </Routes>
    </div>
  )
}

export default App
