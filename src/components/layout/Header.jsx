import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
  DropDown,
} from "responsive-navigation";
import { Link } from "react-router-dom";
// icons
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
// image
import image1 from "../../assets/hoem-page/christmas-left-design.png";
const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="sticky-top">
             <div className="celebration-home-top" style={{position:"fixed",top:"-50",left:'-10px',zIndex:"99"}}>
             <img src={image1} className="celebta" height={200} alt=""/>
       </div>
      <div className="header-contact-details p-1 text-white">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="left-side">
            <ul type="none">
              <li className="d-inline px-2">
                <MdOutlineMailOutline /> google123@gmail.com
              </li>
              <li className="d-inline px-2">
                <IoLocationOutline /> Chennai, Tamil Nadu 6000422
              </li>
              <li className="d-inline px-2">
                <IoPhonePortraitOutline /> +91 984 100 17 88
              </li>
            </ul>
          </div>
          <div className="right-side ">
            <div className="icons">
              <ul>
                <li className="mx-2 h5">
                  <div>
                    <TiSocialLinkedin />
                  </div>
                </li>
                <li className="mx-2 h5">
                  <div>
                    <FaXTwitter />
                  </div>
                </li>
                <li className="mx-2 h5">
                  <div>
                    <TiSocialFacebook />
                  </div>
                </li>
                <li className="mx-2 h5">
                  <div>
                    <FaInstagram />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
      <Navbar
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
          padding: "20px 0",
        }}
      >
        <NavbarBrand>
          <a href="/" style={{ fontSize: "30px", fontWeight: "700" }}>
            RANON
          </a>
        </NavbarBrand>
        <NavbarContent>
          <NavItem>
            <Link
              to={"/ranon"}
              className="px-3 py-2"
              onClick={() => setActive("home")}
              style={{
                background: active == "home" ? "#07488e" : "",
                color: active == "home" ? "white" : "",
              }}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to={"/about"}
              className="px-3 py-2"
              onClick={() => setActive("about")}
              style={{
                background: active == "about" ? "#07488e" : "",
                color: active == "about" ? "white" : "",
              }}
            >
              About
            </Link>
          </NavItem>
          <div className="mt-2">
            <DropDown style={{ width: "200px" }} label="Services">
              <NavItem>
                <div className="py-1 header-items">
                  <Link
                    to={"/web-design"}
                    className="Link "
                    onClick={() => setActive("web-design")}
                    style={{
                      background: active == "web-design" ? "#07488e" : "",
                      color: active == "web-design" ? "white" : "",
                      fontSize: "12px",
                    }}
                  >
                    Web Design & Development
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="py-1 header-items">
                  <Link
                    to={"/mobile-design"}
                    className="Link "
                    onClick={() => setActive("mobile-design")}
                    style={{
                      background: active == "mobile-design" ? "#07488e" : "",
                      color: active == "mobile-design" ? "white" : "",
                      fontSize: "12px",
                    }}
                  >
                    Mobile Development
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="py-1 header-items">
                  <Link
                    to={"/ecommerce"}
                    className="Link "
                    onClick={() => setActive("ecommerce")}
                    style={{
                      background: active == "ecommerce" ? "#07488e" : "",
                      color: active == "ecommerce" ? "white" : "",
                      fontSize: "12px",
                    }}
                  >
                    Ecommerce Service
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="py-1 header-items">
                  <Link
                    to={"/seo-engineer"}
                    className="Link "
                    onClick={() => setActive("seo-engineer")}
                    style={{
                      background: active == "seo-engineer" ? "#07488e" : "",
                      color: active == "seo-engineer" ? "white" : "",
                      fontSize: "12px",
                    }}
                  >
                     Seo-Engineer
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="py-1 header-items">
                  <Link
                    to={"/taxportal"}
                    className="Link "
                    onClick={() => setActive("taxportal")}
                    style={{
                      background: active == "taxportal" ? "#07488e" : "",
                      color: active == "taxportal" ? "white" : "",
                      fontSize: "12px",
                    }}
                  >
                     taxportal
                  </Link>
                </div>
              </NavItem>
            </DropDown>
          </div>
          <NavItem>
            <Link to={"/contact"} className="px-3 py-2"
                onClick={() => setActive("contact")}
                  style={{
                    background: active == "contact" ? "#07488e" : "",
                    color: active == "contact" ? "white" : "",
                    fontSize: "12px",
                  }}
            >
              Contact
            </Link>
          </NavItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default Header;
