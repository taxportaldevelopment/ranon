import { useEffect } from 'react'

// icons
import image1 from "../assets/ecommerce/seo-analytics-team-amico.png";
import image2 from "../assets/seo-image.jpg";
import image3 from "../assets/SEO-analytics-team-bro.png";
import imagegif from "../assets/seo-gif-file.gif";
import seoTraffic from "../assets/keyword-Research.gif"
import icons1 from "../assets/seo-icons/icons-1.png";
import icons2 from "../assets/seo-icons/icons-2.png";
import icons3 from "../assets/seo-icons/icons-3.png";
import icons4 from "../assets/seo-icons/icons-4.png";
import { NavLink } from 'react-router-dom';
const SeoEng = () => {
     useEffect(()=>{
          function scrollTop(){
              window.scrollTo(0,0)
          }
          scrollTop();
       },[])
  return (
    <div>
         <div className="seo-banner py-5 container-fluid">
               <div className="row">
                   <div className="col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div>
                             <h1 className='text-white'><span className='bg-success px-1 py-2 rounded text-white'>RANON </span> SEO ENGINEER</h1> 
                             <p className="text-center py-3 text-white">
              <NavLink to={"/ranon"} className={"text-white"}>
                Home
              </NavLink>{" "}
              /{" "}
              <NavLink to={"/mobile-design"} className={"text-white"}>Mobile App Development</NavLink>
            </p>
                        </div>
                   </div>
                   <div className="col-md-12 col-lg-6">
                       <div>
                           <img src={image1} className='w-50' alt="" />
                       </div>
                   </div>
               </div>
         </div>
         {/* Leading SEO Service Provider in Chennai */}
         <div className="leading-seo-service py-5">
                <div className="container">
                      <h1 className='text-center py-3 roboto text-primary'>Leading SEO Service Provider in Chennai</h1>
                       <div className="row p-2">
                            <div className="col-md-12 col-lg-8">
                                 <div>
                                     <p className='py-1'>As a premium SEO services company in Chennai, 
                                        Ranon Technologies offers top-rated SEO marketing 
                                        services such as local SEO, global SEO, national SEO 
                                        services, E-commerce SEO services, and Google Business 
                                        Profile optimization. With our comprehensive SEO specialist 
                                        in Chennai, you can potentially improve your search 
                                        rankings on all search engines.</p>
                                        <p className='py-1'>All our SEO techniques are white-hat 
                                            and fully compliant with organic search marketing industry 
                                            standards, your business website stays at the top in all 
                                            search engines. We are the authorized SEO agency offering 
                                            high-end and affordable SEO services in Chennai. With our 
                                            powerful SEO service, we guarantee you to rank your website top 
                                            on the search engine result page.</p>
                                 </div>
                            </div>
                            <div className="col-md-12 col-lg-4">
                                   <div className='p-2'>
                                        <img src={image2} className='w-100 p-2' alt="" />
                                   </div>
                            </div>
                       </div>
                </div>
         </div>
         <div className='bg-to-bg'>
              <div className="container">
                <h2 className='text-center py-2'>Best SEO Company in Chennai</h2>
                 <p className='p-3 text-center'>We will turn your one buck into ten bucks through our unique SEO Services in Chennai for highly qualified organic traffic to your website. We are mainly focused on ROI than higher traffic. Without conversion and ROI, there is no use in getting empty organic traffic. Our Ranon SEO Company in Chennai makes unique SEO strategies that are completely Google first page results-oriented. Our proven SEO techniques will work for your business and will challenge your competitors.</p>
              </div>

         </div>

         {/* How We Work For Your SEO Campaign? */}
         <div className="how-we-works py-4">
               <div className="container">
                    <div className="row">
                         <div className="col-md-12 col-lg-6">
                               <h3 className='py-2 roboto text-primary'>How We Work For Your SEO Campaign?</h3>
                               <p>We will collect the complete requirement and review your website 
                                completely. We spy on your competitor backlinks, ranking keywords,
                                technologies used, and much more.</p>
                                <p className='py-2'>You know there are plenty of SEO service providers out there. 
                                But as a leading SEO company in Chennai, we are passionate about this stuff. 
                                So we design our SEO strategies and plans, to suit small and medium business 
                                owners as well as e-commerce websites. Believe us, SEO is a powerful tool to 
                                generate quality leads for a long time.</p>
                         </div>
                         <div className="col-md-12 col-lg-6">
                              <div className='p-2'>
                                   <img src={image3} className='w-100 p-3' alt="" />
                              </div>
                         </div>
                    </div>
               </div>
         </div>
           {/* how-to-use seo */}
            <div className="how-to-use-seo-engin py-3">
                   <div className="container">
                         <div className="row">
                               <div className="col-md-12 col-lg-6">
                                      <div className="p-2">
                                           <img src={imagegif} className='w-75' alt="" />
                                      </div>
                               </div>
                               <div className="col-md-12 col-lg-6">
                                   <div className='p-2'>
                                        <h4>Our Unique SEO Features</h4>
                                        <ol>
                                            <li className='py-2'>We go <strong>beyond keyword rankings</strong> and help overall business growth</li>
                                            <li className='py-2'><strong>Achieve more keyword rankings</strong> than we initially committed</li>
                                            <li className='py-2'>Multifold your business to <strong>reach across the target market.</strong></li>
                                            <li className='py-2'>Get <strong>innovative lead generation strategies</strong> for high-quality conversions</li>
                                            <li className='py-2'>Unlock <strong>new business opportunities</strong> through our quality SEO service</li>
                                            <li className='py-2'>We also <strong>convert your visitors into customers</strong> with our CRO services.</li>
                                        </ol>
                                   </div>
                               </div>
                         </div>
                    </div> 
            </div>
            {/* seo service process */}
            <div className="seo-service-process bg-color text-white">
                   <div className="container">
                        <h3 className='py-3'>Our On Page And Off-Page SEO Service Process.
                        What Makes Us One Of The Best And Top Seo Services Company In Chennai?</h3>
                        <hr />
                        <p>Ranon is the best place to get professional SEO services in Chennai. Our targeted and goal focused SEO campaigns help increase website traffic and boost sales. We guarantee results beyond expectations and predictions. As a leading SEO Company in Chennai, India. We know how to optimize your site for local customers or national customers. As one of the premium SEO companies in Chennai, we use a unique blend of the latest SEO techniques to ensure your business gets the highest ranking on search engines.</p>
                         <h4 className='py-3 text-primary'>We are focused on making things work for you and your business!</h4>
                       <p>Webnox leverages the power of SEO methods to make award-winning SEO campaigns. You decide all the ideas you want to try – Webnox tests them all, promoting your services through our best SEO concepts, and combining them into winning SEO strategies towards better sales.</p>
                       <div className="row p-3">
                            <div className="col-md-12 col-lg-3">
                                 <div className="p-2">
                                      <div className="icons d-flex justify-content-center align-items-center">
                                          <img src={icons1} height={100} alt="" />
                                      </div>
                                      <div className="content">
                                           <h5 className='py-2 text-center'>GET CLIENT’S GOAL</h5>
                                           <div className='d-flex justify-content-center align-items-center'>
                                               <p className='bg-success px-4 py-1 rounded text-white'>Step 1</p>
                                           </div>
                                      </div>
                                 </div>
                            </div>
                            <div className="col-md-12 col-lg-3">
                                 <div className="p-2">
                                      <div className="icons d-flex justify-content-center align-items-center">
                                          <img src={icons2} height={100} alt="" />
                                      </div>
                                      <div className="content">
                                           <h5 className='py-2 text-center'>REALIZE CHALLENGES</h5>
                                           <div className='d-flex justify-content-center align-items-center'>
                                               <p className='bg-success px-4 py-1 rounded text-white'>Step 2</p>
                                           </div>
                                      </div>
                                 </div>
                            </div>
                            <div className="col-md-12 col-lg-3">
                                 <div className="p-2">
                                      <div className="icons d-flex justify-content-center align-items-center">
                                          <img src={icons3} height={100} alt="" />
                                      </div>
                                      <div className="content">
                                           <h5 className='py-2 text-center'>FIND SOLUTION</h5>
                                           <div className='d-flex justify-content-center align-items-center'>
                                               <p className='bg-success px-4 py-1 rounded text-white'>Step 3</p>
                                           </div>
                                      </div>
                                 </div>
                            </div>
                            <div className="col-md-12 col-lg-3">
                                 <div className="p-2">
                                      <div className="icons d-flex justify-content-center align-items-center">
                                          <img src={icons4} height={100} alt="" />
                                      </div>
                                      <div className="content">
                                           <h5 className='py-2 text-center'>FINAL RESULT</h5>
                                           <div className='d-flex justify-content-center align-items-center'>
                                               <p className='bg-success px-4 py-1 rounded text-white'>Step 4</p>
                                           </div>
                                      </div>
                                 </div>
                            </div>
                       </div>
                       <h4 className='text-center py-3'>Our Wide Range of SEO Services in Chennai</h4>
                       <p className='py-2'>SEO is a general technique and it can be applied to any business website, from small to large enterprises, to diversified industries such as Hospitals, Engineering, non-profit organizations, other product, and services. You can choose from the below SEO plans based on your business.</p>
                         <div className="row">
                                <div className="col-md-12 col-lg-6">
                                      <div className='p-3'>
                                           <h4 className='py-3'>Local SEO Services To Dominate Your City</h4>
                                           <p>Local search engine optimization involves optimizing your 
                                             website for local customers, based on location keywords. (ex: 
                                             interior designers in Chennai). Our smartest local SEO 
                                             experts can beat your competitors even if they are large brands. 
                                             It includes creating a “google my business page”, high authority 
                                             local link building, competitor analysis, optimizing your website 
                                             contents, and title tags.</p>
                                      </div>
                                </div>
                                <div className="col-md-12 col-lg-6">
                                     <div className="p-4">
                                          <img src={seoTraffic} className='w-100' alt="" />
                                     </div>
                                </div>
                         </div>
                   </div>
            </div>
    </div>
  )
}

export default SeoEng
