import { NavLink } from "react-router-dom";
// icons
import { IoPhonePortraitOutline } from "react-icons/io5";
// images
import image1 from "../assets/mobile/mobile-1.png";
import image2 from "../assets/mobile/mobile-2.png";
import image3 from "../assets/mobile/mobile-3.png";
import image4 from "../assets/mobile/mobile-4.png";
import mobileResponse from "../assets/mobile/Mobile development-bro.png";
import icons1 from "../assets/mobile/icons-1.png";
import icons2 from "../assets/mobile/icons-2.png";
import icons3 from "../assets/mobile/icons-3.png";
import icons4 from "../assets/mobile/icons-4.png";
import language1 from "../assets/mobile/language-1.png";
import language2 from "../assets/mobile/language-2.png";
import language3 from "../assets/mobile/language-3.png";
import language4 from "../assets/mobile/language-4.png";
import language5 from "../assets/mobile/language-5.png";

const MobileDesign = () => {
  return (
    <div>
      <div className="mobile-banner">
        <div className="mobile-banner d-flex justify-content-center align-items-center">
          <div>
            <h1 className="text-uppercase text-center text-white">
              <span className="roboto bg-primary p-1 rounded">RANON</span>{" "}
              infotax Mobile development
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
      </div>
      {/* Top-Notch Mobile App Development Company in Chennai */}
      <div className="top-notch container">
        <h3 className="py-3 text-center roboto text-primary">
          Top-Notch Mobile App Development Company in Chennai
        </h3>
        <p className="py-1 text-style opacity-50">
          We are the leading mobile app development service provider from
          Chennai started, making android and IOS mobile apps. We build app
          store noticeable, highly functional, and performance-centric mobile
          apps for enterprise businesses. Being a professional mobile app
          builder in Chennai, we are going beyond websites and making an
          experience out of the app, ather than just launching it. Our mobile
          app developers have vast experience in developing business-centric,
          objective-focused, and performance-based apps for your future
          business. We only hire qualified mobile app developers, who have
          experience in custom hand-code development with great creativity and
          analytical skills. Over the past years, we have developed more than 30
          mobile apps on major platforms like Android, IOS, Windows, and
          cross-browser phone applications.
        </p>
        <div className="row p-3">
          <div className="col-md-12 col-lg-6 mt-2 p-2">
            <div className="shadow p-3">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div>
                    <img src={image1} className="w-75" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-8 d-flex align-items-center">
                  <p className="fw-bold">MOBILE APP STRATEGY</p>
                </div>
              </div>
              <div className="content">
                <p className="py-2 text-style">
                  Apps we build showcase only a portion of what our mobile app
                  development team is capable of. We know what it takes to
                  convert your vision into reality. Having worked on numerous
                  projects, we understand every app project is different and
                  needs special attention. Thus, we spend considerable time in
                  planning and research.
                </p>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mt-2 p-2">
            <div className="shadow p-3">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div>
                    <img src={image2} className="w-75" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-8 d-flex align-items-center">
                  <p className="fw-bold">USER EXPERIENCE DESIGN</p>
                </div>
              </div>
              <div className="content">
                <p className="py-2 text-style">
                  For us, creativity is nothing but a way to solve old problems
                  in new ways. That means, our designers, and prototype
                  engineers always have a way out of your problem and will
                  enlighten you on newer ways to approach your mobile app
                  development project. This would help you increase customer
                  retention rate, dwell time, and app downloads.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3 ">
          <div className="col-md-12 col-lg-6 mt-2 p-2">
            <div className="shadow p-3">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div>
                    <img src={image3} className="w-75" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-8 d-flex align-items-center">
                  <p className="fw-bold">DEVELOPMENT</p>
                </div>
              </div>
              <div className="content">
                <p className="py-2 text-style">
                  A lot goes into developing a mobile app than meets our eyes.
                  We have a team that excels at each of these levels to assure
                  that the resulting product is as great as the team that made
                  it. For a team that has more than 300 apps to its credit, this
                  is the least amount you can expect. After all, excellence
                  knows no boundaries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mt-2 p-2">
            <div className="shadow p-3">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div>
                    <img src={image4} className="w-75" alt="" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-8 d-flex align-items-center">
                  <p className="fw-bold">TESTING</p>
                </div>
              </div>
              <div className="content">
                <p className="py-2 text-style">
                  A piece of software without bugs is nothing more than a
                  figment of an over-optimistic developer; our developers are
                  not spared. A team of quality analysts assures the application
                  is tested against numerous test modules and is in the state of
                  a product, not an experiment when delivered to you. We hate
                  bugs more than anything.
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* your best mobile development */}
      <div className="your-mobile-app p-3">
        <div className="container">
          <h1 className="text-center roboto text-primary">
            Your Best Mobile Application Development Partner in Chennai
          </h1>
          <p className="text-center">
            After establishing a strong team of web app development, we entered
            into mobile app development services for our clients across the
            globe. Most businesses are going beyond websites by having native
            mobile apps to reach their potential audience and simplifying the
            process to make a great experience for users. Wherever your customer
            goes, follow them before your competitor. We don’t just create
            mobile apps, we create customer-centric mobile apps that will reach
            a larger pool of audience at the right time.
          </p>

          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div>
                <img src={mobileResponse} className="w-75" alt="" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div>
                <h5 className="text-primary">Why Mobile App is Important?</h5>
                <p>
                  A mobile app is more popular than desktop websites and mobile
                  websites. It is one of the bigger opportunities for mobile app
                  owners to delight the users by giving them a memorable user
                  experience. Mobile app success is achieved by understanding
                  client business and customer behavior. An intelligent and
                  service-focused mobile app will connect your brand with
                  customers.
                </p>
                <p>
                  We have different development approaches and we use industry
                  standards in converting your web app into a native mobile app.
                  Using Xamarin and Phonegap technologies, we support
                  cross-platform apps, and apps for Windows, IOS, and Android
                  phones.
                </p>
              </div>
            </div>
          </div>
          {/* type's app or os */}
          <div className="type-of-osp-3">
            <h1 className="text-center py-2 roboto text-primary">
              What We Do Best In Mobile App Platforms
            </h1>

            <div className="row">
              <div className="col-md-12 col-lg-6 mt-3">
                <div className="bg-white p-3">
                  <div className="row">
                    <div className="col-md-12 col-lg-4">
                      <div className="image">
                        <img src={icons1} height={100} alt="" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-8 d-flex align-items-center">
                      <p className="text-bold">Iphone App Development</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      We build a highly professional native as well as hybrid
                      iPhone app, specific to your business needs, and the best
                      user experience for the end-user. Our iPhone app
                      development consists of iPhone game development, Ipad app
                      development, chat applications, and much more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mt-3">
                <div className="bg-white p-3">
                  <div className="row">
                    <div className="col-md-12 col-lg-4">
                      <div className="image">
                        <img src={icons2} height={100} alt="" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-8 d-flex align-items-center">
                      <p className="text-bold">Ipad App Development</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      We build extraordinary Ipad apps with a talented team of
                      our in-house Coimbatore Ipad app developers. we focus on
                      building Ipad apps that meet exact client business
                      functionalities, which make us stay ahead of other mobile
                      app development companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 col-lg-6">
                <div className="bg-white p-3">
                  <div className="row">
                    <div className="col-md-12 col-lg-4">
                      <div className="image">
                        <img src={icons3} height={100} alt="" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-8 d-flex align-items-center">
                      <p className="text-bold">Android App Development</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      We create and build customized android apps that are
                      powerful and scalable, to meet the business requirement.
                      Our android app development consists of an enterprise app,
                      gaming, and e-commerce mobile apps.
                    </p>{" "}
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mt-3">
                <div className="bg-white p-3">
                  <div className="row">
                    <div className="col-md-12 col-lg-4">
                      <div className="image">
                        <img src={icons4} height={100} alt="" />
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-8 d-flex align-items-center">
                      <p className="text-bold">Phonegap App Development</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      One of the powerful cross-platform mobile app development
                      frameworks, to build android, IOS, and Windows apps within
                      your budget. We use the latest technologies to build
                      superior mobile apps that are highly customizable for your
                      business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How Our App Developers do? */}
      <div className="technologies-use container my-3">
        <h1 className="text-center roboto text-primary py-4">
          Technologies we use
        </h1>
        <div className="row d-flex justify-content-between">
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 technologies-items border d-flex justify-content-center align-items-center">
            <img src={language1} className="w-100 p-2" alt="" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 technologies-items border d-flex justify-content-center align-items-center">
            <img src={language2} className="w-100 p-3" alt="" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 technologies-items border d-flex justify-content-center align-items-center">
            <img src={language3} className="w-100 p-3" alt="" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 technologies-items border d-flex justify-content-center align-items-center">
            <img src={language4} className="w-100 p-3" alt="" />
          </div>
          <div className="col-6 col-sm-6 col-md-4 col-lg-2 technologies-items border d-flex justify-content-center align-items-center">
            <img src={language5} className="w-100 p-3" alt="" />
          </div>
        </div>
      </div>

      {/* Technologies we use */}
    </div>
  );
};

export default MobileDesign;
