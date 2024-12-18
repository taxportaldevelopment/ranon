import {NavLink} from 'react-router-dom';
// images
import businessGrow from "../assets/about/Business mission-rafiki.png";
const About = () => {
  return (
    <div>
         <div className="about-banner d-flex justify-content-center align-items-center ">
               <div>
                    <h1 className='text-uppercase text-center text-white'><span className='roboto bg-primary p-1 rounded'>RANON</span> infotax web solution</h1>
                      <p className='text-center py-3 text-white'><NavLink to={"/"} className={"text-white"}>Home</NavLink> / <NavLink className={"text-white"}>Mobile App Development</NavLink></p> 
                       <p className='text-center'><button className='btn text-white'>CONTACT US</button></p>
               </div>
         </div>
         {/* grow */}
          <div className="grow-section mt-3">
                <div className="container">
                       <div className="row">
                           <div className="col-md-12 col-lg-6 mt-3">
                                <div>
                                     <img src={businessGrow} className='w-75' alt="" />
                                </div>
                           </div>
                           <div className="col-md-12 col-lg-6 mt-3 d-flex justify-content-center align-items-center">
                                  <div>
                                       <h1 className='roboto'>ABOUT US</h1>
                                       <p className='opacity-50'>We are a team of passionate techies that believe in one 
                                        common goal to bring our merchants’ dreams to reality.
                                         Our ultimate focus is to minimise the complexity in eCommerce 
                                         by developing simple solutions with simple solutions and make it accessible for everyone.</p>
                                  </div>
                           </div>
                       </div>
                </div>
          </div>
          {/* our story */}
          <div className="our-story">
                <div className="container">
                      <h1 className='text-center roboto py-3'>OUR STORY !</h1>
                       <p className='opacity-50 text-style'>It all started with a simple idea, Develop a tool to help users build eCommerce store. This laid the foundation for J2Store, a Joomla extension that lets you create an eCommerce site. It was a huge success! Yes, we felt like we hit the jackpot with J2Store.</p>
                       <p className='opacity-50 text-style'>But we didn’t want to limit ourselves to Joomla, we wanted to explore more in the world of eCommerce. This is where we found that there were not many accomplished Discount & Loyalty program plugins in WordPress. So we developed Flycart to help WooCommerce store owners increase sales and grow a loyal customer base. </p>
                       <p className='opacity-50 text-style'>Flycart soared like an Eagle, this gave us the confidence to push beyond our comfort zone. We wanted to build a complete SaaS tool and so we developed Retainful. At first, it was just a Cart recovery tool but now Retainful has grown into an end-to-end Email marketing automation platform.</p>
                       <p className='opacity-50 text-style'>We value our customer’s feedback, it helps us grow. They wanted a standalone Loyalty plugin for WooCommerce, so we built WPLoyalty for them. Then they asked for a chat-like app, which inspired us to build ShopJar.</p>
                       <p className='opacity-50 text-style'>There are more products waiting in our development pipeline. Cartrabbit always believe ‘Customers come first’, this helps us build products what the customers are looking for and that’s the secret behind our success, ‘Play where the demand is high’.</p>
                        {/* Numbers speak for themselves */}
                       <div className="number-speak p-5 ">
                             <div className="row">
                                   <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                                        <div>
                                             <h2>Numbers speak for themselves</h2>
                                             <p>Cartrabbit wasn’t built in a day. We took our time and now we are where we belong.</p>
                                        </div>
                                   </div>
                                   <div className="col-md-12 col-lg-6">
                                         <div className="row">
                                              <div className="col-md-12 col-lg-6">
                                                    <div className=' d-flex justify-content-center align-items-center mt-3'>
                                                    <div className='px-5 py-2 bg-primary rounded w-100'>
                                                         <h2 className='text-center text-white'>500k+</h2>
                                                         <p className='text-center text-white'>Happy Customers</p>
                                                    </div>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center mt-3'>
                                                    <div className='px-5 py-2 bg-primary rounded w-100'>
                                                         <h2 className='text-center text-white'>2017</h2>
                                                         <p className='text-center text-white'>Founded</p>
                                                    </div>
                                                    </div>
                                              </div>
                                              <div className="col-md-12 col-lg-6 ">
                                              <div className=' d-flex justify-content-center align-items-center mt-3'>
                                                    <div className='px-5 py-2 bg-primary rounded w-100'>
                                                         <h2 className='text-center text-white'>11+</h2>
                                                         <p className='text-center text-white'>Products</p>
                                                    </div>
                                                    </div>
                                                    <div className='d-flex justify-content-center align-items-center mt-3'>
                                                    <div className='px-5 py-2 bg-primary rounded w-100'>
                                                         <h2 className='text-center text-white'>350k+</h2>
                                                         <p className='text-center text-white'>Active Stores</p>
                                                    </div>
                                                    </div>
                                              </div>
                                         </div>
                                   </div>
                             </div>
                       </div>
              
                </div>
          </div>
    </div>
  )
}

export default About
