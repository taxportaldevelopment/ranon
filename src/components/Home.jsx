import React from "react";
import Carousel from "./propssection/Carousel";
// icons
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";
import { IoCalendarSharp } from "react-icons/io5";
import { TbPlayerTrackNext } from "react-icons/tb";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineBrandingWatermark } from "react-icons/md";

// images
import home1 from "../assets/home/home-1.jpg";
import tool1 from "../assets/home/website.png";
import tool2 from "../assets/home/pen-tool.png";
import tool3 from "../assets/home/e-commerce-solution.png";
import tool4 from "../assets/home/seo.png";
import graphicdesignservices from "../assets/home/graphic-design-services.png"
import logoDesign from "../assets/home/logo-designing.jpg";
import businessCart from "../assets/home/Free-Business-Card-Design-Gold-And-Black-Colors.jpg"
import brochure from "../assets/home/hoem-brochure.jpg"
import letterhead from "../assets/home/letter-head.jpg"
import brandname from "../assets/home/visual-identity.jpg"
const Home = () => {
  return (
    <div>
      {/* carousel */}
      <Carousel />
      {/* home-page seo */}
      <div className="home-seo-section container p-2">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div>
              <h2 className="py-3">Best Web Design Company In Chennai</h2>
              <p className="opacity-50 text-style">
                Clemence Web Solutions is a leading web design and development
                company based in Chennai, India, with over 9 years of industrial
                experience. We specialize in Blockchain Development, Website
                Design and Development, Cybersecurity Services, SEO and Digital
                Marketing, Graphical Designing, Logo Designing and Branding, Web
                Hosting Services, and a full range of web-related services. Our
                team comprises experienced and professional designers,
                developers, digital marketers, graphical designers, and mobile
                application developers.{" "}
              </p>
              <p className="opacity-50 text-style">
                We deliver exceptional website designs and innovative web-based
                solutions that keep your clients engaged. Our projects are
                always completed on time, ensuring full customer satisfaction.
                Globally recognized for our professional and cutting-edge web
                design services, we stay updated with the latest technological
                trends to provide high-quality solutions. Customer satisfaction
                is our top priority, and we are 100% customer-oriented, and
                committed to delivering results that align with your goals and
                expectations.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
            <div className="seo-image-home">
              <img src={home1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* OUR COMPREHENSIVE SERVICES */}
      <div className="our-comprehensive p-3">
        <h5 className="text-center text-primary py-2">
          OUR COMPREHENSIVE SERVICES
        </h5>
        <h3 className="text-center roboto">
          You’ve got a business, we have got brilliant minds
        </h3>
        <div className="container">
          <div className="row p-2">
            <div className="col-md-12 col-lg-3 our-comp-service mt-5">
              <div className="p-2 shadow items-compre">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="image">
                    <img
                      src={tool1}
                      height={60}
                      className="text-danger p-1"
                      alt=""
                    />
                  </div>
                </div>
                <div className="content">
                  <p className="py-1">
                    <strong>Web Application</strong>
                  </p>
                  <p className="opacity-50">
                    Experts in Dynamic Web design and Development and Custom Web
                    Web Applications in various plotforms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 our-comp-service mt-5">
              <div className="p-2 shadow items-compre">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="image">
                    <img
                      src={tool2}
                      height={60}
                      className="text-danger p-1"
                      alt=""
                    />
                  </div>
                </div>
                <div className="content">
                  <p className="py-1">
                    <strong>Website Design</strong>
                  </p>
                  <p className="opacity-50">
                    Your website may well be a customer’s first impression of
                    your business, so your website design needs to impress,
                    fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 our-comp-service mt-5">
              <div className="p-2 shadow items-compre">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="image">
                    <img
                      src={tool3}
                      height={60}
                      className="text-danger p-1"
                      alt=""
                    />
                  </div>
                </div>
                <div className="content">
                  <p className="py-1">
                    <strong>E-Commerce Solutions</strong>
                  </p>
                  <p className="opacity-50">
                    eCommerce is the fastest-growing retail market in India. You
                    need to stand out from the crowd in order to thrive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 our-comp-service mt-5">
              <div className="p-2 shadow items-compre tax">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="image">
                    <img
                      src={tool4}
                      height={60}
                      className="text-danger p-1"
                      alt=""
                    />
                  </div>
                </div>
                <div className="content">
                  <p className="py-1">
                    <strong>SEO & SMM</strong>
                  </p>
                  <p className="opacity-50">
                    Outrank your competitor and stay at the top of Google with
                    our targeted, affordable with our strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your Trusted Partner in Digital Growth */}
      <div className="your-trusted-growth p-2 my-3">
        <div className="container">
          <h1 className="text-center text-white py-2 roboto">
            Your Trusted Partner in Digital Growth
          </h1>
          <p className="text-center text-white py-2">
            At Clemence Web Solutions, we’re dedicated to helping businesses
            thrive in the digital landscape. With our extensive expertise
            across, web development, and digital marketing, we provide
            end-to-end solutions tailored to your unique needs.
          </p>

          <div className="project-box-count">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="text-white project-count">
                  <div className="icons text-white d-flex justify-content-center align-items-center">
                    <HiOutlineSpeakerphone className="h1 text-primary" />
                  </div>
                  <h1 className="text-center">6+</h1>
                  <p className="text-center fw-bold">
                    Years of startup centric legal expertise
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="text-white project-count">
                  <div className="icons text-white d-flex justify-content-center align-items-center">
                    <RiLightbulbFlashLine className="h1 text-white" />
                  </div>
                  <h1 className="text-center">95+</h1>
                  <p className="text-center fw-bold">
                    Registrations done every month
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="text-white project-count">
                  <div className="icons text-white d-flex justify-content-center align-items-center">
                    <GiTrophyCup className="h1 text-white" />
                  </div>
                  <h1 className="text-center">35+</h1>
                  <p className="text-center fw-bold">
                    Our Team members at your service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us */}
      <div className="why-choose-us">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h5 className="text-color">Why Choose Us</h5>
              <h4 className="py-2 roboto">Driven by Innovation, Focused on Results</h4>
              <p className="text-style">
                At Clemence Web Solutions, innovation is at the heart of
                everything we do. We leverage cutting-edge technologies and
                creative strategies to deliver digital solutions that drive
                real, measurable results. Whether it’s developing a custom web
                application, enhancing your digital marketing, or optimizing
                user experience, our team is committed to helping your business
                succeed. We combine our technical expertise with a
                results-oriented approach, ensuring every project aligns with
                your goals and delivers long-term value. Trust us to bring your
                vision to life and elevate your brand in today’s competitive
                digital landscape.
              </p>
              <button className="py-1 px-3 btn text-white">CONTACT US</button>
            </div>
            <div className="col-md-12 col-lg-6">
                  <div>
                       <div className="why-choose-us-box shadow rounded">
                             <div className="left-side p-2 d-flex align-items-center">
                                    <div>
                                   <div className="icons d-flex justify-content-center align-items-center">
                                        <IoCalendarSharp className="h1" />
                                   </div>

                                    </div>
                                   <div className="content ms-3">
                                        <h5>Proven Expertise</h5>
                                        <p>Our team of seasoned professionals brings years of experience and a track record of successful digital campaigns.</p>
                                   </div>
                             </div>
                       </div>
                       <div className="why-choose-us-box shadow rounded mt-3">
                             <div className="left-side p-2 d-flex align-items-center">
                                    <div>
                                   <div className="icons d-flex justify-content-center align-items-center">
                                        <TbPlayerTrackNext className="h1" />
                                   </div>

                                    </div>
                                   <div className="content ms-3">
                                        <h5>Tailored Solutions</h5>
                                        <p>We understand that every business is unique. Our solutions are customized to meet your specific goals and challenges.</p>
                                   </div>
                             </div>
                       </div>
                       <div className="why-choose-us-box shadow rounded mt-3">
                             <div className="left-side p-2 d-flex align-items-center">
                                    <div>
                                   <div className="icons d-flex justify-content-center align-items-center">
                                        <GiRotaryPhone className="h1" />
                                   </div>

                                    </div>
                                   <div className="content ms-3">
                                        <h5>Transparent Communication</h5>
                                        <p>Open and transparent communication is at the core of our client relationships. We keep you informed every step of the way.</p>
                                   </div>
                             </div>
                       </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
       {/* Top Graphics Design Services */}
        <div className="top-graphics-service p-3">
                 <div className="container">
                        <h5 className="text-center text-color">Top Graphics Design Services</h5>
                        <h3 className="text-center roboto">Transform Your Brand with Our Graphic Design Expertise</h3>
                       <div className="row p-2">
                            <div className="col-md-12 col-lg-4 mt-3">
                                  <div className="top-graphics-align overflow-hidden shadow">
                                  <div className="top-design-service rounded">
                                         <div className="d-flex justify-content-center align-items-center">
                                            <div className="icons my-4 d-flex justify-content-center align-items-center h1 text-white">
                                              <MdOutlineShoppingCart />
                                            </div>
                                         </div>
                                          <div className="content py-2">
                                               <h3 className="py-3 text-center">Graphics Design Works</h3>
                                               <p className="text-center">Start your journey towards success with professionally designed and creatively crafted Digital Designing Works.</p>
                                          </div>
                                          <div className="footer py-1">
                                               <img src={graphicdesignservices} className="w-100" alt="" />
                                          </div>
                                  </div>
                                  </div>
                            </div>
                            <div className="col-md-12 col-lg-4 mt-3">
                                  <div className="top-graphics-align overflow-hidden shadow">
                                  <div className="top-design-service rounded">
                                         <div className="d-flex justify-content-center align-items-center">
                                            <div className="icons my-4 d-flex justify-content-center align-items-center h1 text-white">
                                              <IoEarthOutline />
                                            </div>
                                         </div>
                                          <div className="content py-2">
                                               <h3 className="py-3 text-center">Logo Design</h3>
                                               <p className="text-center">We craft unique, impactful logo designs that capture your brand's essence, ensuring a strong and memorable first impression.							</p>
                                          </div>
                                          <div className="footer py-1">
                                               <img src={logoDesign} className="w-100" alt="" />
                                          </div>
                                  </div>
                                  </div>
                            </div>
                            <div className="col-md-12 col-lg-4 mt-3">
                                  <div className="top-graphics-align overflow-hidden shadow">
                                  <div className="top-design-service rounded">
                                         <div className="d-flex justify-content-center align-items-center">
                                            <div className="icons my-4 d-flex justify-content-center align-items-center h1 text-white">
                                              <BsGraphUpArrow />
                                            </div>
                                         </div>
                                          <div className="content py-2">
                                               <h3 className="py-3 text-center">Business Cart Design</h3>
                                               <p className="text-center">We design professional, eye-catching business cards that leave a lasting impression, representing your brand with style and confidence.</p>
                                          </div>
                                          <div className="footer py-1">
                                               <img src={businessCart} className="w-100" alt="" />
                                          </div>
                                  </div>
                                  </div>
                            </div>
                            <div className="col-md-12 col-lg-4 mt-3">
                                  <div className="top-graphics-align overflow-hidden shadow">
                                  <div className="top-design-service rounded">
                                         <div className="d-flex justify-content-center align-items-center">
                                            <div className="icons my-4 d-flex justify-content-center align-items-center h1 text-white">
                                              <TbTargetArrow />
                                            </div>
                                         </div>
                                          <div className="content py-2">
                                               <h3 className="py-3 text-center">Brochure Design</h3>
                                               <p className="text-center">Our brochure designs combine creativity and clarity, effectively showcasing your brand's message to engage and inform your audience.</p>
                                          </div>
                                          <div className="footer py-1">
                                               <img src={brochure} className="w-100" alt="" />
                                          </div>
                                  </div>
                                  </div>
                            </div>
                            <div className="col-md-12 col-lg-4 mt-3">
                                  <div className="top-graphics-align overflow-hidden shadow">
                                  <div className="top-design-service rounded">
                                         <div className="d-flex justify-content-center align-items-center">
                                            <div className="icons my-4 d-flex justify-content-center align-items-center h1 text-white">
                                              <MdOutlineMail />
                                            </div>
                                         </div>
                                          <div className="content py-2">
                                               <h3 className="py-3 text-center">Letter Head Design</h3>
                                               <p className="text-center">
                                                Our custom letterhead designs reflect your brand’s professionalism, ensuring every communication looks polished and aligns with your identity.</p>
                                          </div>
                                          <div className="footer py-1">
                                               <img src={letterhead} className="w-100" alt="" />
                                          </div>
                                  </div>
                                  </div>
                            </div>               
                            <div className="col-md-12 col-lg-4 mt-3">
                                  <div className="top-graphics-align overflow-hidden shadow">
                                  <div className="top-design-service rounded">
                                         <div className="d-flex justify-content-center align-items-center">
                                            <div className="icons my-4 d-flex justify-content-center align-items-center h1 text-white">
                                              <MdOutlineBrandingWatermark />
                                            </div>
                                         </div>
                                          <div className="content py-2">
                                               <h3 className="py-3 text-center">Branding</h3>
                                               <p className="text-center">
                                               Clemence Web Solutions creates impactful websites and marketing strategies to grow brands and increase customer conversions.</p>
                                          </div>
                                          <div className="footer py-1">
                                               <img src={brandname} className="w-100" alt="" />
                                          </div>
                                  </div>
                                  </div>
                            </div>

                            
                        </div> 
                 </div>
        </div>
    </div>
  );
};

export default Home;
