import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// image
import image1 from "../assets/tax-portal/Tax-amico.png";
import image2 from "../assets/tax-portal/office-business.jpg"
// icons
import { FaRegHandPointRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const TaxPortal = () => {
    useEffect(()=>{
        function scrollTop(){
            window.scrollTo(0,0)
        }
        scrollTop();
     },[])
  return (
    <div className='taxportal-section'>
                  <div className="seo-banner py-5 container-fluid">
               <div className="row">
                   <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                             <h1 className='text-white'><span className='bg-success px-2 py-1 rounded text-white'>TAX </span>PORTAL</h1> 
                             <p className="text-center py-3 text-white">
              <NavLink to={"/ranon"} className={"text-white"}>
                Home
              </NavLink>{" "}
              /{" "}
              <NavLink to={"/ecommerce"} className={"text-white"}>Ecommerce</NavLink>
            </p>
                        </div>
                   </div>
                   <div className="col-md-12 col-lg-6">
                       <div className='d-flex justify-content-center align-items-center'>
                           <img src={image1} className='w-50' alt="" />
                       </div>
                   </div>
               </div>
         </div>
         {/* service */}
          <div className="we-service p-3">
                <h1 className='text-center py-4 roboto'>WE SERVICE</h1>
                <div className="container">
                       <div className="row">
                            <div className="col-md-12 col-lg-4 p-1">
                                  <div>
                                       <h3 className='opacity-50'>START A BUSINESS</h3>
                                       <ul>
                                           <li className='py-1'><FaRegHandPointRight/> Private Limited Company</li>
                                           <li className='py-1'><FaRegHandPointRight/> Limited Liability Partnership</li>
                                           <li className='py-1'><FaRegHandPointRight/> One Person Company</li>
                                           <li className='py-1'><FaRegHandPointRight/> Partnership Firm Registration</li>
                                           <li className='py-1'><FaRegHandPointRight/> Sole Proprietorship Registration</li>
                                           <li className='py-1'><FaRegHandPointRight/> Nidhi Company Registration</li>
                                       </ul>
                                  </div>
                            </div>
                            <div className="col-md-12 col-lg-4 p-1">
                            <h3 className='opacity-50'>Government Registrations</h3>
                                       <ul>
                                           <li className='py-1'><FaRegHandPointRight/> Udyog Aadhaar / MSME / SSI</li>
                                           <li className='py-1'><FaRegHandPointRight/> IE Code License</li>
                                           <li className='py-1'><FaRegHandPointRight/> Trade License</li>
                                           <li className='py-1'><FaRegHandPointRight/> Food License (FSSAI)</li>
                                           <li className='py-1'><FaRegHandPointRight/> Digital Signature Certificate</li>
                                           <li className='py-1'><FaRegHandPointRight/> ESI / PF Registration</li>
                                           <li className='py-1'><FaRegHandPointRight/> APEDA Certification</li>
                                       </ul>
                            </div>
                            <div className="col-md-12 col-lg-4 p-1">
                            <h3 className='opacity-50'>Government Registrations</h3>
                                       <ul>
                                           <li className='py-1'><FaRegHandPointRight/> Udyog Aadhaar / MSME / SSI</li>
                                           <li className='py-1'><FaRegHandPointRight/> IE Code License</li>
                                           <li className='py-1'><FaRegHandPointRight/> Trade License</li>
                                           <li className='py-1'><FaRegHandPointRight/> Food License (FSSAI)</li>
                                           <li className='py-1'><FaRegHandPointRight/> Digital Signature Certificate</li>
                                           <li className='py-1'><FaRegHandPointRight/> ESI / PF Registration</li>
                                           <li className='py-1'><FaRegHandPointRight/> APEDA Certification</li>
                                       </ul>
                            </div>
                       </div>
                </div>
          </div>
          {/* service */}
          <div className="service-we p-3">
                <div className="container">
                      <div className="row">
                           <div className="col-md-12 col-lg-8">
                                <div className="row">
                                       <div className="col-6 col-md-6 col-lg-4">
                                           <div>
                                               <h6>Annual Compliance</h6>
                                               <ul>
                                                   <li className='py-1'><IoIosArrowForward/>  Annual Filing/ROC Return</li>
                                                   <li className='py-1'><IoIosArrowForward/>  Change Of Registered Office</li>
                                                   <li className='py-1'><IoIosArrowForward/>  Change Company Name</li>
                                                   <li className='py-1'><IoIosArrowForward/>  Change in Director</li>
                                                   <li className='py-1'><IoIosArrowForward/>  Increase Authorized Capital</li>
                                               </ul>
                                           </div>
                                       </div>
                                       <div className="col-6 col-md-6 col-lg-4">
                                             <div>
                                                   <h6>Business Conversion</h6>
                                                   <ul>
                                                       <li className='py-1'><IoIosArrowForward/> Pvt to Public Limited Company</li>
                                                       <li className='py-1'><IoIosArrowForward/> Partnership firm to LLP</li>
                                                       <li className='py-1'><IoIosArrowForward/> Proprietorship Firm To Private Limited Company</li>
                                                   </ul>
                                             </div>
                                       </div>
                                       <div className="col-6 col-md-6 col-lg-4">
                                           <div>
                                               <h6>Closure Business</h6>
                                               <ul>
                                                  <li className='py-1'><IoIosArrowForward/>  Closure Of Limited Liability Partnership (LLP)</li>
                                                  <li className='py-1'><IoIosArrowForward/>  Closure Of Private Limited Company </li>
                                               </ul>
                                           </div>
                                       </div>
                                </div>
                           </div>
                           <div className="col-md-12 col-lg-4">
                                 <img src={image2} className='w-100' alt="" />
                           </div>
                      </div>
                </div>
          </div>
          {/* work process */}
          <div className="work-process bg-to-bg p-2 my-3">
               <div className="container p-3">
                <div className="row">
                      <div className="col-md-12 col-lg-6">
                            <div>
                                 <h3 className='text-success'>Our Working Process____</h3>
                                 <h2>Our Most Popular Services</h2>
                            </div>
                      </div>
                      <div className="col-md-12 col-lg-6">
                           <div className='p-3'>
                               <p>Tax Portal is a technology-driven platform which provides professional services in India. We are here to provide various types of services such as incorporation of different type of entities, government registrations, legal documentation and annual compliance’s.</p>
                              <div>
                                  <NavLink to={"https://taxportal.in"}>Read More....</NavLink>
                              </div>
                           </div>
                      </div>
                </div>
                  
               </div>
          </div>
    </div>
  )
}

export default TaxPortal
