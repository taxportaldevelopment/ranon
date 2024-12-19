import React from 'react'
import { NavLink } from 'react-router-dom'
// image
import image1 from "../assets/ecommerce/Catalogue-amico.png";
import image2 from "../assets/ecommerce/Payment Information-amico.png";
import image3 from "../assets/ecommerce/JavaScript frameworks-cuate.png";
import image4 from "../assets/ecommerce/Development-cuate.png";

// iocns 
import { FaArrowAltCircleRight } from "react-icons/fa";
const Ecommerce = () => {
  return (
    <div>
        <div className="ecommerce-banner d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-uppercase text-center text-white">
              <span className="roboto bg-primary p-1 rounded">RANON</span>{" "}
              infotax ECOMMERCE development
            </h1>
            <p className="text-center py-3 text-white">
              <NavLink to={"/ranon"} className={"text-white"}>
                Home
              </NavLink>{" "}
              /{" "}
              <NavLink to={"/mobile-design"} className={"text-white"}>Mobile App Development</NavLink>
            </p>
            <p className="text-center">
              <button className="btn text-white">CONTACT US</button>
            </p>
          </div>
        </div>
        {/* development */}
        <div className="e-development container my-4">
              <div className="row p-2">
                   <div className="col-md-12 col-lg-6">
                         <div>
                             <img src={image1} className='w-75 p-2' alt="" />
                         </div>
                   </div>
                   <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                             <h3 className='roboto text-primary'>E-commerce Website Development Company in Coimbatore</h3>
                             <p className='py-3'>Ranon Technologies is a professional eCommerce development company located in Coimbatore, India. We specialize in providing custom eCommerce website design, development, and maintenance services that are tailored to meet the unique needs of businesses of all sizes. As one of the leading eCommerce development companies in Coimbatore, we are committed to delivering high-quality results that exceed our clients’ expectations. Our team of experts has extensive experience in eCommerce website development, making us one of the most sought-after eCommerce website development companies in Coimbatore.</p>
                        </div>
                   </div>
              </div>
        </div>
        {/* Why Does */}
        <div className="why-does-section my-3 bg-to-bg py-5">
              <div className="container">
                     <div className="row">
                          <div className="col-md-12 col-lg-6">
                                <div className='p-2'>
                                     <p className='fw-bold h3 text-primary'>Why Does Your Business Need An Ecommerce Website</p>
                                     <p>As one of the leading e-commerce website designing companies 
                                      in Coimbatore, we have the no.1 ecommerce web designers who are 
                                      completely professional and deliver result-driven insights, that 
                                      help with increased conversions and higher website traffic to your business.</p>
                                      {/* faq section */}
                                      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item mt-2">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Lower Overhead Costs
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">With our expert e-commerce portal developers, eliminate the need for a physical store so as to save on rent, utilities, and other expenses associated with maintaining a brick-and-mortar store.</div>
    </div>
  </div>
  <div className="accordion-item mt-2">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
         Improved Customer Experience
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">With the most trusted e-commerce website development services in Coimbatore, provide customers with a seamless shopping experience. Allow them to easily browse products, add items to their cart, and checkout, all from the comfort of their own home.</div>
    </div>
  </div>
  <div className="accordion-item mt-2">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
         Competitive Advantage
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">In today’s digital age, having an e-commerce website is a must for businesses to remain competitive in their industry and the best ecommerce services in Coimbatore from Webnox Technologies pave way for that.</div>
    </div>
  </div>
</div>
                                </div>
                          </div>
                          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                                 <div>
                                 <img src={image2} className='w-75 p-4' alt="" />
                                   
                                 </div>
                          </div>
                     </div>
              </div>
              <div className="container">
                           <h3 className='text-center py-3 text-primary'>E-Commerce Website Design</h3>
                           <h6 className='text-center'>Webnox Technologies Creates E-commerce Websites That Makes Your Online Business A Great Success</h6>
                           <p className='py-3'>We provide unique e-commerce website designs for a wide variety of industries and showcase their products online. Our shopping cart design displays products individually. This gives a pleasant experience to the viewers and converts more viewers into buying customers. Just adding products and integrating a payment gateway will not make your e-commerce business a success. Our team of e-commerce experts first analyses your business demands and target customers, in turn, guides our design and development team to make your e-commerce website a success by bringing more orders.We offer high quality custom shopping websites from fashion to automobile to marketplace.</p>
                   <div className="row">
                        <div className="col-md-12 col-lg-6">
                              <img src={image3} className='w-100 p-4' alt="" />
                        </div>
                        <div className="col-md-12 col-lg-6">
                              <div>
                                   <h3 className='roboto text-primary'>Front End Design – Responsive – Engage your website visitor!</h3>
                                   <p className='py-3'>Accessing information from multiple devices is not a simple thing. 
                                    It is the art of converting your visitor through mobile into a paying customer. 
                                    We implement a responsive design that accommodates modern user behavior and 
                                    it will impact future UI design. We leverage our expertise to deliver a great 
                                    user experience across different devices and platforms. Our website design lies on
                                    bootstrap and CMS platforms. It enables us to create a beautiful website for your
                                    business and gives users an enjoyable experience.</p>
                              </div>
                        </div>
                   </div>
              </div>
        </div>
        {/*Why Should You Hire Webnox Technologies For Your Next E-Commerce Web Design Project?  */}
         <div className="why-should-hire">
                <div className="container py-3">
                      <div className="row">
                           <div className="col-md-12 col-lg-6">
                                 <h4 className='text-primary'>Why Should You Hire Webnox Technologies For Your Next E-Commerce Web Design Project?</h4>
                                 <p className='py-3'>We undertake all types of open source e-commerce websites such as Magento development, Woocommerce development, Cakephp, Prestashop, and open cart development.</p>
                                 <ul>
                                     <li className='py-1 opacity-50'> <FaArrowAltCircleRight className='h5 text-primary' /> Highly skilled ecommerce web designers and well-experienced developers.</li>
                                     <li className='py-1 opacity-50'> <FaArrowAltCircleRight className='h5 text-primary' /> Our in-depth analysis of e-commerce design converts your website visitor into a buying customer</li>
                                     <li className='py-1 opacity-50'> <FaArrowAltCircleRight className='h5 text-primary' /> Our marketing specialists guide you on the ins and out’s marketing strategies</li>
                                     <li className='py-1 opacity-50'> <FaArrowAltCircleRight className='h5 text-primary' /> We offer highly optimized and fast-loading e-commerce websites</li>
                                     <li className='py-1 opacity-50'> <FaArrowAltCircleRight className='h5 text-primary' /> Ecommerce services with cutting edge technologies to build your online store</li>
                                     <li className='py-1 opacity-50'> <FaArrowAltCircleRight className='h5 text-primary' /> Website design for e commerce with search engines in mind</li>
                                 </ul>
                           </div>
                           <div className="col-md-12 col-lg-6">
                               <div>
                                   <abbr title="E-Commerce Ranon Infotax">
                                      <img src={image4} className='w-100' alt="" />
                                   </abbr>
                               </div>
                           </div>
                      </div>
                </div>
         </div>
    </div>
  )
}

export default Ecommerce
