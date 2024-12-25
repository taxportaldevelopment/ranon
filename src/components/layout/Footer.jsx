import React from 'react'
import { Link } from 'react-router-dom'
// icons
import { IoIosArrowForward } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const Footer = () => {

      const yearGet = new Date();
  return (
    <div className='footer-section-sec'>
        <div className="container">
                <div className="row py-4">
                      <div className="col-md-12 col-lg-4">
                           <div className='p-1'>
                                <h3 className='roboto'>About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing 
                                    elit. Earum quas molestias quasi quia reprehenderit
                                     mollitia enim nihil obcaecati iusto, quam, 
                                     voluptate eveniet maiores illum! Repellat fuga 
                                     quibusdam quo quia non?</p>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-4">
                           <div className="p-2">
                                 <h3 className='roboto'>QUICK LINKS</h3>
                                 <ul>
                                    <Link className='d-inline' to={"/ranon"}><li> <IoIosArrowForward/>  Home</li></Link>
                                    <Link className='d-inline' to={"/about"}><li> <IoIosArrowForward/>  About</li></Link>
                                    <Link className='d-inline' to={"/web-design"}><li> <IoIosArrowForward/>  Web Design</li></Link>
                                    <Link className='d-inline' to={"/mobile-design"}><li> <IoIosArrowForward/>  Mobile Design</li></Link>
                                    <Link className='d-inline' to={"/ecommerce"} ><li> <IoIosArrowForward/>  Ecommerce</li></Link>
                                    <Link className='d-inline' to={"/seo-engineer"}><li> <IoIosArrowForward/>  Seo Engineer</li></Link> 
                                    <Link className='d-inline' to={"/taxportal"}><li> <IoIosArrowForward/>  Taxportal</li></Link>
                                    <Link className='d-inline' to={"/contact"} ><li> <IoIosArrowForward/>  contact</li></Link>
                                 </ul>
                           </div>
                      </div>
                      <div className="col-md-12 col-lg-4">
                            <div className="p-2">
                                  <h3 className="roboto">ADDRESS</h3>
                                  <div>
                                      <p className='fw-bold'> <CiLocationOn className='h4' /> <br /> 1st Floor, Duraisamy Complex, 2/3, Velachery Bypass Rd, Natesan Nagar, Balaji Nagar, Velachery, Chennai, Tamil Nadu 600042</p>
                                      <h6><MdOutlineMailOutline /> info@taxportal.in</h6>
                                      <p><BsTelephone /> +91 9551400011</p>
                                  </div>
                            </div>
                      </div>
                </div>
               <div className='pb-5 pt-2 text-center border-top'>
                    <p>Copyright © {yearGet.getFullYear()} Ranon lnfotax Private Limited. All rights reserved.</p>
               </div>

        </div>
    </div>
  )
}

export default Footer
