import React from 'react'

// icons
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
const Contact = () => {
  return (
    <div className='contact-our'>
        <div className="contact-banner"></div>
        {/* form */}
        <div className="container my-5 p-3">
              <div className="row">
                  <div className="col-md-12 col-lg-4 bg-primary rounded text-white">
                       <div className='py-2'>
                           <h5 className='py-2'>Have any Questions ?</h5>
                           <p>We are Here To Help</p>
                             <a href="whatsapp://send?text=Hello World!&phone=+91 944669333"><button className='px-4 rounded text-white bg-success py-2'>MESSAGE US ON WHATSAPP <FaWhatsapp/></button></a>
                            <p className='py-4'><FaPhoneAlt className='h4' /> 91 9841001789</p>
                            <p>For Business Related Queries:</p>
                            <a href="tel:+9944669333 " className='text-white'>+91 9944669333 | Tel: 9841001775</a>
                             <hr />
                             <div>
                                  <h6>SEND YOUR RESUME</h6>
                                  <h4>< MdOutlineMail className='h4' />info@taxportal.in</h4>
                                   <hr />
                            </div> 
                            <div>
                                 <h5><FaClockRotateLeft/> WORKING HOURSE</h5>
                                 <p className='fw-bold'>Mon – Sat (10.00 AM to 6.00 PM )</p>
                                 <p>Sun – Closed</p>
                                 <hr />
                            </div>
                       </div>
                  </div>
                  <div className="col-md-12 col-lg-8 border bg-to-bg rounded">
                       <div className='p-2'>
                           <h5 className='py-2 text-center'>Talk With Our Digital Strategists</h5>
                           <form>
                                <div className="form-group">
                                     <input type="text"
                                        name='name'
                                        placeholder='Name'
                                        className='input-contact'
                                      />
                                </div>
                                <div className="form-group">
                                     <input type="text"
                                        name='email'
                                        className='input-contact'
                                        placeholder='Email'
                                      />
                                </div>
                                <div className="form-group">
                                     <input type="text"
                                        name='numebr'
                                        className='input-contact'
                                        placeholder='Phone no'
                                      />
                                </div>  
                                <div className="form-group">
                                      <select>
                                           <option value="">select your preferred</option>
                                           <option value="website-designing">website designing</option>
                                           <option value="Ecommerce">Ecommerce website</option>
                                           <option value="logo">logo/Branding</option>
                                           <option value="seo">seo</option>
                                           <option value="social media marketing">social media marketing</option>
                                           <option value="lead generation">lead generation</option>
                                           <option value="web app development">web app development</option>
                                           <option value="mobile app development">mobile app development</option>
                                      </select>
                                </div>
                                <div className="form-group">
                                       <textarea name="" id="" placeholder='Tell Us About Your Project'></textarea>
                                </div>
                                <div className="form-group">
                                      <select>
                                          <option value="">Choose Your Budget</option>
                                          <option value="low 20k">{`< 20k`}</option>
                                          <option value="20k-50k">{`20k-50k`}</option>
                                          <option value="50k-100k">{`50k-100k`}</option>
                                          <option value="100k-500k">{`100k-500k`}</option>
                                          <option value="500k-1000k">{`500k-1000k`}</option>
                                          <option value="1000k">{` > 1000k`}</option>
                                      </select>
                                </div>
                                <div className="form-group">
                                        <p className='py-2 para text-center'> <FaLock/> Your business information is confidential with us. We never share it with anyone</p>
                                </div>
                                  <div className="form-group d-flex justify-content-center align-items-center">
                                       <button className='py-2 px-5 bg-success text-white rounded'>SEND</button>
                                  </div>
                           </form>
                       </div>
                  </div>
              </div>
        </div>
        {/* OFFICE LOCATION  */}
        <div className="office-location p-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.2488544351672!2d80.21514157454685!3d12.985180914581443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d894baf0e37%3A0x6bacaf51b994a5fc!2staxportal.in!5e1!3m2!1sen!2sin!4v1734953541411!5m2!1sen!2sin" width="100%" height="420" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container py-4">
               <h4 className='py-2 text-center'>We’d Love To Hear From You</h4>
               <p className='py-2 text-center'>Tap into our expertise to modernize your enterprise operations, boost competitiveness, and enhance your online presence. Let’s connect to kickstart your digital transformation journey.</p>
              <div className="row">
                    <div className="col-md-12 col-lg-4">
                          <div className='p-1'>
                                 <div className="icons d-flex justify-content-center align-items-center">
                                      <FaEye className='h3' />
                                 </div>
                                 <div className="content">
                                       <h5 className='py-1 text-center'>Articulate Your Vision</h5>
                                       <p className='text-center'>Tell Webnox exactly what you want to achieve.</p>
                                 </div>
                          </div>
                    </div>
                    <div className="col-md-12 col-lg-4 ">
                          <div className='p-1'>
                                 <div className="icons d-flex justify-content-center align-items-center">
                                      <BsGraphUp className='h3' />
                                 </div>
                                 <div className="content">
                                       <h5 className='py-1 text-center'>Strategize With Experts</h5>
                                       <p className='text-center'>Partner with Webnox to map out the ideal plan.</p>
                                 </div>
                          </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                          <div className='p-1'>
                                 <div className="icons d-flex justify-content-center align-items-center">
                                      <ImEarth className='h3' />
                                 </div>
                                 <div className="content">
                                       <h5 className='py-1 text-center'>Innovate And Elevate</h5>
                                       <p className='text-center'>Let Webnox’s tailored solutions propel your company forward.</p>
                                 </div>
                          </div>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Contact
