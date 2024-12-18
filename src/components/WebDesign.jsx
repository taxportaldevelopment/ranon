import {NavLink} from "react-router-dom";
// icons
import { SlLayers } from "react-icons/sl";
import { MdScreenRotation } from "react-icons/md";  
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { RiSeoFill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// image
import img1 from "../assets/web-design/img-1.png";
import img2 from "../assets/web-design/group-discuss.png";
import iocns1 from "../assets/web-design/icons/icons-1.png";
import iocns2 from "../assets/web-design/icons/icons-2.png";
import iocns3 from "../assets/web-design/icons/icons-3.png";
import iocns4 from "../assets/web-design/icons/icons-4.png";
import laptopuseImage from "../assets/web-design/laptop-use-img.jpg"

const WebDesign = () => {
  return (
    <div>
        <div className="web-design-banner d-flex justify-content-center align-items-center">
        <div>
                    <h1 className='text-uppercase text-center text-white'><span className='roboto bg-primary p-1 rounded'>RANON</span> infotax web design & development</h1>
                      <p className='text-center py-3 text-white'><NavLink to={"/ranon"} className={"text-white"}>Home</NavLink> / <NavLink to={"/mobile-design"} className={"text-white"}>Mobile App Development</NavLink></p> 
                       <p className='text-center'><button className='btn text-white'>CONTACT US</button></p>
               </div>
        </div>

        {/* content */}
         <div className="web-banner container">
                 <div className="row p-3">
                       <div className="col-md-12 col-lg-6">
                             <div>
                                  <img src={img1} className="w-100" alt="" />
                             </div>
                       </div>
                       <div className="col-md-12 col-lg-6">
                           <div>
                                 <h3 className="roboto py-3">WEBSITE DESIGNING FOR <span className="text-primary">SMALL BUSINESS OWNERS</span> AND <span className="text-primary">STARTUP COMPANIES</span></h3>
                                 <p className="opacity-50">Our website developers are savvy with the latest technologies and are capable of building complex custom applications. Whatever may be your business type, we understand the nature of your business and your competitors in order to implement exact success. Ronan also helps to improve the search engine ranking for your website. Our team makes web design strategies that are search engine friendly. We do strict quality check to ensure excellent results. Ronan technologies are one of the top website builders in Coimbatore, offering low budget web design services for any type of small to large business and start-up individuals. We not only designing your website, we also bring more potential customers to you.</p>
                           </div>
                       </div>
                 </div>   
                <div className="group-discuss">
                       <div className="container">
                           <div className="row">
                                <div className="col-md-12 col-lg-7">
                                      <div>
                                           <h4>BENEFITS OF CHOOSING OUR WEB DESIGN SERVICES</h4>
                                           <p className="opacity-50">Our web designers know that the first impression is very important to make the customer stay on the website. It is a key aspect and it will impact your online business than you think. Our web designing craftsmanship helps you in launching eye catchy websites to grab your visitor’s attention and it will turn your visitor into a buying customer.</p>
                                           <div className="row">
                                                  <h2 className="py-2">OUR GOALS</h2>
                                                <div className="col-md-12 col-lg-6 mt-2">
                                                     <div className="py-1 px-3 bg-primary rounded d-flex justify-content-center align-items-center">
                                                          <p className="fw-bold py-2 text-white">Increase your sales enquires</p><br /><br />
                                                     </div>
                                                </div>
                                                <div className="col-md-12 col-lg-6 mt-2">
                                                     <div className="py-1 px-1 bg-primary rounded d-flex justify-content-center align-items-center">
                                                          <p className="fw-bold py-2 text-white">Provide great user experience</p>
                                                     </div>
                                                </div>
                                           </div>
                                           <div className="row">
                                           <div className="col-md-12 col-lg-6 mt-2">
                                                <div className="py-1 px-1 bg-primary rounded d-flex justify-content-center align-items-center">
                                                          <p className="fw-bold text-white">Improve your identity and brand value</p>
                                                     </div>
                                                </div>
                                        
                                                <div className="col-md-12 col-lg-6 mt-2">
                                                <div className="py-1 px-1 bg-primary rounded d-flex justify-content-center align-items-center">
                                                          <p className="fw-bold text-white">Delivering single website for all your devices</p>
                                                     </div>
                                                </div>
                                           </div>
                                       </div>
                                </div>
                                <div className="col-md-12 col-lg-5">
                                       <div className="">
                                             <img src={img2} alt="" className="w-100" />
                                       </div>
                                </div>
                           </div>
                       </div>
                </div> 
         </div>
         {/* OUR METHODOLOGY */}
         <div className="our-methodology container-fluid p-3">
               <div className="row">
                    <div className="col-md-12 col-lg-4">
                         <div className="p-lg-4 p-2 bg-dark text-white">
                             <h2 className="roboto">OUR METHODOLOGY</h2>
                             <p className="opacity-50 py-3 text-style">Our methodology worked well for websites of various industry owners. We use best industry standards and website designing guidelines for making our client business more successful. We just not build your website, we build your brand. If this dosen,t work, else nothing will work.</p>
                             <button className="btn px-3 text-white">CALL US</button>
                         </div>
                    </div>
                    <div className="col-md-12 col-lg-8">
                          <div className="row">
                              <div className="col-md-12 col-lg-6">
                                  <div className="p-3">
                                      <h5><SlLayers className="px-1 h2 text-primary" /> Graphic Elements</h5>
                                      <p>Graphic elements are the most important factor in website designing. Highly stylish media elements get more attention which creates a good idea about your website and services.</p>
                                  </div>
                              </div>
                              <div className="col-md-12 col-lg-6">
                              <div className="p-3">
                                      <h5><MdScreenRotation className="px-1 h2 text-primary" /> Mobile Responsive</h5>
                                      <p>Most people use their mobile devices for information gathering and various shopping activities. Our responsive websites will adjust itself based on user’s screen, providing best user experience.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-md-12 col-lg-6">
                                  <div className="p-3">
                                      <h5><MdOutlineLaptopChromebook className="px-1 h2 text-primary" /> Fast Loading Websites</h5>
                                      <p>Speed is an important aspect to be considered when designing a website.Fast loading sites gives high conversion, and the users will stay long, and come back again and again.</p>
                                  </div>
                              </div>
                              <div className="col-md-12 col-lg-6">
                              <div className="p-3">
                                      <h5><RiSeoFill className="px-1 h2 text-primary" /> SEO Friendly Website</h5>
                                      <p>As a leading web design agency in coimbatore, we know how SEO friendly websites are highly ranked on search engines. Our entire website works are done keeping SEO in mind.</p>
                                  </div>
                              </div>
                          </div>
                    </div>
               </div>

         </div>
         {/* why us */}
         <div className="why-us-section container-fluid py-3">
                <div className="row">
                      <div className="col-md-12 col-lg-3">
                            <div className="p-3 why-us-items">
                                 <div className="icons">
                                       <img src={iocns1} height={100} alt="" />
                                 </div>
                                 <div className="content mt-2">
                                       <h6 className="py-2">Competitive Price</h6>
                                       <p>Our web design prices are highly competitive 
                                        for small website owners.  We quote reasonable 
                                        prices for static and dynamic websites,
                                         CMS websites and e-commerce websites.</p>
                                 </div>
                            </div>
                      </div>
                      <div className="col-md-12 col-lg-3">
                            <div className="p-3 why-us-items">
                                 <div className="icons">
                                       <img src={iocns2} height={100} alt="" />
                                 </div>
                                 <div className="content mt-2">
                                       <h6 className="py-2">Industry Standard Process</h6>
                                       <p>We use highly optimized, industry standardized 
                                        processes to meet web design requirements and 
                                        satisfying clients. The process involves 
                                        graphic designing, web designing and programming.</p>
                                 </div>
                            </div>
                      </div>
                      <div className="col-md-12 col-lg-3">
                            <div className="p-3 why-us-items">
                                 <div className="icons">
                                       <img src={iocns3} height={100} alt="" />
                                 </div>
                                 <div className="content mt-2">
                                       <h6 className="py-2">Helping Clients</h6>
                                       <p>We help companies in getting more 
                                        leads and make more money through their websites. 
                                        That’s the reason we stand out from the crowd of web 
                                        designing companies in Coimbatore.</p>
                                 </div>
                            </div>
                      </div>
                      <div className="col-md-12 col-lg-3">
                            <div className="p-3 why-us-items">
                                 <div className="icons">
                                       <img src={iocns4} height={100} alt="" />
                                 </div>
                                 <div className="content mt-2">
                                       <h6 className="py-2">Different Verticals</h6>
                                       <p>We can do all type of web design works from 
                                        the scratch such as custom web design, custom web development, 
                                        custom ecommerce website and even large web portals.</p>
                                 </div>
                            </div>
                      </div>
                </div>
         </div>
         {/* our-type-of-service */}
          <div className="our-type-of-service container-fluid">
                  <div className="row bg-primary rounded">
                       <div className="col-md-12 col-lg-6 p-3">
                              <div>
                                  <img src={laptopuseImage} className="w-100 rounded" alt="" />
                              </div>
                       </div>
                       <div className="col-md-12 col-lg-6 text-white d-flex justify-content-center align-items-center">
                             <div>
                              <h4 className="roboto py-2">OUR WIDE RANGE OF WEB DESIGNING SERVICES</h4>
                            <div className="row">
                                 <div className="col-md-12 col-lg-6">
                                       <ul>
                                          <li><MdKeyboardDoubleArrowRight /> Micro website creation</li>
                                          <li><MdKeyboardDoubleArrowRight /> Portal website designing</li>
                                          <li><MdKeyboardDoubleArrowRight /> Travel website designing</li>
                                          <li><MdKeyboardDoubleArrowRight /> Ecommerce website design</li>
                                          <li><MdKeyboardDoubleArrowRight /> School website designing</li>
                                          <li><MdKeyboardDoubleArrowRight /> Import/export website designing</li>
                                          <li><MdKeyboardDoubleArrowRight /> Free technical Support for one yea</li>
                                          <li><MdKeyboardDoubleArrowRight /> Free high speed dedicated hosting for one year</li>
                                          <li><MdKeyboardDoubleArrowRight /> Multiple revision and enhancement</li>
                                       </ul>
                                 </div>
                                 <div className="col-md-12 col-lg-6">
                                     <ul>
                                         <li><MdKeyboardDoubleArrowRight /> Gallery website designing</li>
                                         <li><MdKeyboardDoubleArrowRight /> Matrimonial website designing services</li>
                                         <li><MdKeyboardDoubleArrowRight /> Corporate website designing</li>
                                         <li><MdKeyboardDoubleArrowRight /> Blog website design</li>
                                         <li><MdKeyboardDoubleArrowRight /> News website</li>
                                         <li><MdKeyboardDoubleArrowRight /> Classified website designing</li>
                                         <li><MdKeyboardDoubleArrowRight /> Free website optimization for better google ranking</li>
                                         <li><MdKeyboardDoubleArrowRight /> Free domain registration for one year</li>
                                         <li><MdKeyboardDoubleArrowRight /> Customized design</li>
                                     </ul>
                                 </div>
                            </div>  
                             </div>
                       </div>
                  </div>
          </div>
    </div>
  )
}

export default WebDesign
