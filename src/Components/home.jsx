import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WOW from 'wow.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HRMSLogo from '../assets1/images/octa-tech-logo-new.png';
import HRMSHeroImage from '../assets1/images/HRMSHeroImage2.png';
import ShapeDot from '../assets1/images/shapes/dots.png';
import ShapeTraingle from '../assets1/images/shapes/tringle.png';
import ShapeClose from '../assets1/images/shapes/close.png';
import HRMSImage2 from '../assets1/images/HRMSImage2.png';
import HRMSImage3 from '../assets1/images/HRMSImage3.png';
import NL2 from '../assets1/images/newsletter/newsletter-two.png';
import NLCircle from '../assets1/images/newsletter/circle.png';
import NLDot from '../assets1/images/newsletter/dots.png';
import PWhite1 from '../assets1/images/partners/partner-three-white1.png';
import PWhite2 from '../assets1/images/partners/partner-three-white2.png';
import PWhite3 from '../assets1/images/partners/partner-three-white3.png';
import PWhite4 from '../assets1/images/partners/partner-three-white4.png';
import PWhite5 from '../assets1/images/partners/partner-three-white5.png';
import bgDots from '../assets1/images/shapes/solutions-bg-dots.png';
import '../assets1/css/mobile-logo.css';
import Preloader from './Preloader';
// CSS imports
import '../assets1/css/flaticon.css';
import '../assets1/css/magnific-popup.css';
import '../assets1/css/animate.min.css';
import '../assets1/css/nice-select.css';
import '../assets1/css/spacing.min.css';
import '../assets1/css/menu.css';
import '../assets1/css/style.css';
import '../assets1/css/responsive.css';
const LandingPage = () => {
  const imagesArray = [
    HRMSLogo,
    HRMSHeroImage,
    ShapeDot,
    ShapeTraingle,
    ShapeClose,
    HRMSImage2,
    HRMSImage3,
    NL2,
    NLCircle,
    NLDot,
    PWhite1,
    PWhite2,
    PWhite3,
    PWhite4,
    PWhite5,
  ];
  const pageStyles = {

    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden'
  };
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [updateFrequency, setUpdateFrequency] = useState('weekly');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    number: '',
    company: '',
    subject: '',
    website: '',
    message: ''
  });

  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter submitted:', { email, updateFrequency });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  // Added this method to handle radio button change

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>

      <Preloader images={imagesArray}>
        <div className="hrms-landing-page">
          <div className="page-wrapper"  >
            {/* Header Section */}
            {/* Header Section */}
            {/* Header Section */}
            {/* Header Section */}

            <header className="main-header header-three">
              <div className="header-upper">
                <div className="container">
                  <div className="header-inner py-3 px-4" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'relative'
                  }}>
                    <div className="logo-outer" style={{ marginTop: '30px', height: 'auto' }}>
                      <div className="logo">
                        <Link to="/">
                          <img
                            src={HRMSLogo}
                            alt="Logo"
                            style={{
                              width: "150px",
                              height: "auto",
                              transition: 'transform 0.3s ease'
                            }}
                            // Add CSS class for better mobile control
                            className="responsive-logo"
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                          />
                        </Link>
                      </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="nav-outer clearfix" style={{
                      color: 'white',
                      flex: '0 0 auto' // Prevent flex shrinking
                    }}>
                      {/* Desktop Menu */}
                      <nav className="main-menu navbar-expand-lg d-none d-lg-block">
                        <div className="navbar-collapse">
                          <ul className="navigation" style={{
                            display: 'flex',
                            listStyle: 'none',
                            margin: '0',
                            padding: '0'
                          }}>
                            <li style={{ margin: '0 15px' }}><Link to="/" className="text-white1" style={{
                              color: '#ffffff',
                              textDecoration: 'none',
                              fontSize: '16px',
                              fontWeight: '500',
                              padding: '8px 5px',
                              position: 'relative',
                              transition: 'all 0.3s ease'
                            }}>Home</Link></li>
                            <li style={{ margin: '0 15px' }}><Link
                              to="/#about-section-id"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('about-section-id');
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                  });
                                }
                              }}
                              className="text-white1"
                              style={{
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500',
                                padding: '8px 5px',
                                position: 'relative',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              About
                            </Link></li>
                            <li style={{ margin: '0 15px' }}><Link
                              to="/#services-section-id"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('services-section-id');
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                  });
                                }
                              }}
                              className="text-white1"
                              style={{
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500',
                                padding: '8px 5px',
                                position: 'relative',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              Services
                            </Link>
                            </li>
                            <li style={{ margin: '0 15px' }}>
                            <Link
                              to="/#contact-section-id"
                              onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById('contact-section-id');
                                if (element) {
                                  element.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                  });
                                }
                              }}
                              className="text-white1"
                              style={{
                                color: '#ffffff',
                                textDecoration: 'none',
                                fontSize: '16px',
                                fontWeight: '500',
                                padding: '8px 5px',
                                position: 'relative',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              Contact
                            </Link>
                            </li>
                            <li style={{ margin: '0 15px' }}>
                              <Link
                                to="/faq"
                                className="text-white1"
                                style={{
                                  color: '#ffffff',
                                  textDecoration: 'none',
                                  fontSize: '16px',
                                  fontWeight: '500',
                                  padding: '8px 5px',
                                  position: 'relative',
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                FAQ
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </nav>

                      {/* Mobile Navigation */}
                      <div className="d-flex d-lg-none align-items-center">
                        <button
                          type="button"
                          className="navbar-toggle"
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '5px',
                            width: '40px',
                            height: '40px'
                          }}
                        >
                          <span style={{
                            display: 'block',
                            height: '2px',
                            width: '24px',
                            marginBottom: '5px',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease',
                            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                          }}></span>
                          <span style={{
                            display: 'block',
                            height: '2px',
                            width: '24px',
                            marginBottom: '5px',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease',
                            opacity: isMenuOpen ? 0 : 1
                          }}></span>
                          <span style={{
                            display: 'block',
                            height: '2px',
                            width: '24px',
                            backgroundColor: '#ffffff',
                            transition: 'all 0.3s ease',
                            transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                          }}></span>
                        </button>
                      </div>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="menu-right d-none d-lg-flex align-items-center">
  <button
    onClick={() => {
      const element = document.getElementById('contact-section-id');
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }}
    className="theme-btn"
    style={{
      padding: '10px 20px',
      marginRight: '15px',
      borderRadius: '6px',
      background: 'rgba(78, 97, 255, 0.9)',
      color: '#ffffff',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '15px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center'
    }}
    onMouseOver={(e) => {
      e.target.style.background = 'rgba(78, 97, 255, 1)';
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 4px 8px rgba(78, 97, 255, 0.3)';
    }}
    onMouseOut={(e) => {
      e.target.style.background = 'rgba(78, 97, 255, 0.9)';
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = 'none';
    }}
  >
    Get Started
  </button>
</div>
                  </div>

                  {/* Mobile Menu - Updated positioning */}
                  <div
                    className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      right: "0",
                      backgroundColor: 'rgb(34, 43, 64)',
                      padding: isMenuOpen ? "20px" : "0",
                      maxHeight: isMenuOpen ? "400px" : "0",
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                      opacity: isMenuOpen ? "1" : "0",
                      visibility: isMenuOpen ? "visible" : "hidden",
                      zIndex: "1000",
                      boxShadow: isMenuOpen ? "0 6px 12px rgba(0, 0, 0, 0.15)" : "none",
                      borderTop: isMenuOpen ? "1px solid rgba(255, 255, 255, 0.1)" : "none"
                    }}
                  >
                    <ul className="navigation clearfix text-center" style={{
                      listStyle: 'none',
                      margin: '0',
                      padding: '0'
                    }}>
                      <li style={{
                        textAlign: 'center',
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <Link to="/" className="text-white" style={{
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '500',
                          display: 'block',
                          padding: '5px'
                        }}>Home</Link>
                      </li>
                      <li style={{
                        textAlign: 'center',
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <Link
                          to="/#about-section-id"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('about-section-id');
                            if (element) {
                              element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }}
                          className="text-white1"
                          style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '8px 5px',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li style={{
                        textAlign: 'center',
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <Link
                          to="/#services-section-id"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('services-section-id');
                            if (element) {
                              element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }}
                          className="text-white1"
                          style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '8px 5px',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Services
                        </Link>
                      </li>
                      <li style={{
                        textAlign: 'center',
                        padding: '12px 0',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        <Link
                          to="/#contact-section-id"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('contact-section-id');
                            if (element) {
                              element.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }
                          }}
                          className="text-white1"
                          style={{
                            color: '#ffffff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '8px 5px',
                            position: 'relative',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                      <li style={{
                        textAlign: 'center',
                        padding: '12px 0'
                      }}>
                        <Link to="/faq" className="text-white" style={{
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '16px',
                          fontWeight: '500',
                          display: 'block',
                          padding: '5px',

                        }}>FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section-three rel z-2 pt-235 rpt-150 pb-130 rpb-100" style={{
              backgroundColor: '#222b40'
            }}>
              <div className="container" style={{ marginTop: '-100px', marginBottom: '50px' }}>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-11">
                    <div className="hero-content-three rpt-15 rmb-75">
                      <h1 className="mb-15 wow fadeInUp delay-0-2s" style={{ marginTop: '100px', fontSize: 'xxx-large', color: 'white', marginBottom: '100px' }}>
                        Unlock Growth with Secure SaaS+, Intelligent AI, and Advanced Protection
                      </h1>
                      <p className="wow fadeInUp delay-0-4s" style={{ color: 'white' }}>
                        Empower your business with cutting-edge SaaS+, Cybersecurity, Software Development, and Custom AI Agents. Designed for automation, scalability, security, and performance — so you can focus on growth while we handle the tech.
                      </p>
                      <form className="newsletter-form mt-40" onSubmit={handleNewsletterSubmit}>
                        <div className="newsletter-email wow fadeInUp delay-0-6s">
                          <input
                            type="email"
                            placeholder="Enter Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <button 
  type="button"
  onClick={() => {
    const element = document.getElementById('contact-section-id');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
>
  Contact sales <i className="fas fa-arrow-right"></i>
</button>
                        </div>
                        <div className="newsletter-radios wow fadeInUp delay-0-8s">
                          <div className="custom-control custom-radio">


                          </div>
                          <div className="custom-control custom-radio">


                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="hero-image-three wow fadeInLeft delay-0-4s">
                      <img
                        src={HRMSHeroImage}
                        alt="HRMS Dashboard Preview"
                        style={{
                          marginLeft: "80px",
                          maxWidth: "70%",
                          height: "auto",
                          marginTop: "-70px",
                          objectFit: "contain",
                          borderRadius: "12px"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img className="dots-shape" src={ShapeDot} alt="Shape" />
              <img className="tringle-shape" src={ShapeTraingle} alt="Shape" />
              <img className="close-shape" src={ShapeClose} alt="Shape" />
            </section>


            {/* Solutions Section */}
            <section id='about-section-id'
              className="solutions-section-three text-white text-center rel bg-blue pt-130 rpt-100 z-1 pb-75 rpb-45"
              style={{ backgroundImage: `url(${bgDots})`, backgroundColor: ' #141B2D' }}

            >
              <div className="container" style={{}}>
                <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="section-title mb-75">
                      <h2 style={{ marginBottom: '120px', fontSize: '40px' }}>Making life simple for our community</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center" >
                  <div className="col-xl-4 col-md-6">
                    <div className="solution-item-three wow fadeInUp delay-0-2s" >
                      <i className="far fa-user" ></i>
                      <h3><Link to="/" >Cybersecurity Solutions</Link></h3>
                      <p>Protect your business with advanced security frameworks, risk assessments, and threat prevention strategies tailored to your needs.</p>

                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="solution-item-three wow fadeInUp delay-0-4s">
                      <i className="fas fa-chart-line"></i>
                      <h3><Link to="/">AI-Powered Automation</Link></h3>
                      <p>Streamline repetitive tasks, optimize workflows, and boost productivity with custom AI agents and real-time intelligent insights.</p>

                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="solution-item-three wow fadeInUp delay-0-6s">
                      <i className="fas fa-user-plus"></i>
                      <h3><Link to="/">Custom Software Development</Link></h3>
                      <p>Build scalable, secure, and tailored applications to meet your unique business needs — from concept to deployment.</p>

                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="about-section-three rel z-1 pt-130 rpt-100" style={{ backgroundColor: '#222b40', color: 'white', padding: '60px 0' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-7 col-lg-6">
                    <div className="about-image rmb-55 wow fadeInLeft delay-0-2s" style={{ marginBottom: '30px', textAlign: 'center' }}>
                      <img
                        src={HRMSImage2}
                        alt="About HRMS"
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',

                        }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="about-content-three wow fadeInRight delay-0-2s" style={{ padding: '0 15px' }}>
                      <div className="section-title mb-25" style={{ marginBottom: '20px' }}>
                        <h2 style={{
                          color: 'white',
                          fontSize: '32px',
                          lineHeight: '1.3',
                          marginBottom: '20px',
                          '@media (max-width: 767px)': { fontSize: '26px' }
                        }}>Transform Business Operations with Our Smart Tech Solutions</h2>
                      </div>
                      <p style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        marginBottom: '25px'
                      }}>We deliver SaaS+ platforms, advanced Cybersecurity, custom-built Software, and AI Agents that automate tasks. Designed for scalability, security, and efficiency, our solutions empower businesses to innovate, optimize, and grow.</p>
                      <ul className="list-style-one mt-25 mb-35" style={{
                        listStyle: 'none',
                        padding: '0',
                        margin: '25px 0 35px'
                      }}>
                        {['Comprehensive SaaS+ Solutions', 'Advanced Cybersecurity Services', 'Tailored Software Development', 'AI Agents & Automation'].map((item, index) => (
                          <li key={index} style={{
                            color: 'white',
                            position: 'relative',
                            paddingLeft: '30px',
                            marginBottom: '12px',
                            fontSize: '16px'
                          }}>
                            <i className="fas fa-check" style={{
                              color: '#4e61ff',
                              position: 'absolute',
                              left: '0',
                              top: '5px'
                            }}></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a href="#contact-section-id" className="theme-btn style-three" style={{
                        display: 'inline-block',
                        padding: '12px 25px',
                        backgroundColor: '#4e61ff',
                        color: 'white',
                        borderRadius: '5px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease'
                      }}>Get Started <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="browser-support-section rel z-1 py-130 rpy-100" style={{
              backgroundColor: '#222b40',
              color: 'white',
              padding: '60px 0',

            }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-5 col-lg-6 order-lg-1 order-2">
                    <div className="browser-support-content rmb-55 wow fadeInRight delay-0-2s" style={{
                      padding: '0 15px',
                      marginBottom: '30px'
                    }}>
                      <div className="section-title" style={{ marginBottom: '30px' }}>
                        <h2 style={{
                          color: 'white',
                          fontSize: '32px',
                          lineHeight: '1.3',
                          marginBottom: '20px'
                        }}>Prevail Your Solutions Anytime, Anywhere</h2>
                      </div>
                      <div className="row">
                        {[
                          {
                            icon: 'fas fa-check',
                            title: 'Cross-Platform Compatibility',
                            desc: 'Leverage our SaaS+ platforms and custom software across desktop, tablet, or mobile—ensuring seamless business operations wherever you are.'
                          },
                          {
                            icon: 'fas fa-check',
                            title: 'Secure & Role-Based Access',
                            desc: 'Safeguard sensitive data with advanced cybersecurity frameworks and role-based permissions, giving every user access only to what they need.'
                          }
                        ].map((item, index) => (
                          <div key={index} className="col-md-6" style={{ marginBottom: '25px' }}>
                            <div className={`solution-item-two ${index === 1 ? 'color-two' : ''}`} style={{
                              padding: '20px',
                              borderRadius: '8px',
                              height: '320px',
                              transition: 'all 0.3s ease',
                              display: 'flex',
                              flexDirection: 'column'
                            }}>
                              <div style={{ marginBottom: '15px' }}>
                                <i className={item.icon} style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '50%',
                                  backgroundColor: index === 0 ? '#4e61ff' : '#FFB200',
                                  color: 'white',
                                  fontSize: '16px'
                                }}></i>
                              </div>
                              <h4 style={{
                                color: 'white',
                                fontSize: '20px',
                                marginBottom: '10px',
                                wordBreak: 'break-word' // Prevents text from overflowing
                              }}>{item.title}</h4>
                              <p style={{

                                fontSize: '15px',
                                lineHeight: '1.6',
                                wordBreak: 'break-word', // Ensures text wraps properly
                                flex: '1' // Takes remaining space
                              }}>{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 order-lg-2 order-1" style={{ marginBottom: '30px' }}>
                    <div className="browser-support-image text-center text-lg-right">
                      <img
                        src={HRMSImage3}
                        alt="HRMS Accessibility"
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          borderRadius: '8px',

                          display: 'inline-block'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="newsletter-section-two mt-30 rmt-0 rel z-2" style={{ background: ' #222b40' }}>
              <div className="container"  >
                <div className="newsletter-inner style-two bg-gray bgs-cover text-white rel z-1" style={{ background: 'rgb(22, 30, 46)' }}>
                  <div className="row align-items-center align-items-xl-start" >
                    <div className="col-lg-6" >
                      <div className="newsletter-content p-60" >
                        <div className="section-title mb-30">

                          <h1 style={{ marginBottom: '120px', fontSize: '40px' }}>Subscribe to Tech Insights & Innovation Updates</h1>
                        </div>
                        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                          <div className="newsletter-email" style={{ backgroundColor: ' #131b2c' }}>
                            <input
                              type="email"
                              placeholder="Enter Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <button type="submit">Subscribe <i className="fas fa-angle-right"></i></button>
                          </div>

                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="newsletter-images wow fadeInUp delay-0-4s">
                        <img src={NL2} alt="HRMS Newsletter" />
                        <img src={NLCircle} alt="shape" className="circle slideUpRight" />
                        <img src={NLDot} alt="shape" className="dots slideLeftRight" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id='services-section-id' className="services-section-three bg-lighter rel z-1 pt-250 pb-100 rpb-70" style={{ backgroundColor: ' #131b2c' }}>
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                    <div className="section-title mt-100 rmt-70 mb-55">

                      <h2 style={{ color: 'white' }}>Enhancing Business Efficiency with Smart Tech Solutions</h2>
                    </div>
                  </div>
                </div>
                <div className="row" style={{ color: 'white' }}>
                  <div className="col-xl-4 col-md-6" >
                    <div className="service-item wow fadeInUp delay-0-2s" style={{ backgroundColor: '#222b40' }}>
                      <i className="flaticon-file"></i>
                      <div className="content">
                        <h3><a href="single-service.html" style={{ color: 'white' }}>Comprehensive SaaS+ Platforms</a></h3>
                        <p>Streamline and scale your operations with a fully managed cloud platform engineered for enterprise-grade performance, security, and growth.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-4s" style={{ backgroundColor: '#222b40' }}>
                      <i className="flaticon-responsive-design"></i>
                      <div className="content">
                        <h3><a href="single-service.html" style={{ color: 'white' }}>Custom Software Development</a></h3>
                        <p>Develop tailored applications to solve unique business challenges, from concept to deployment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-6s" style={{ backgroundColor: '#222b40' }}>
                      <i className="flaticon-security"></i>
                      <div className="content">
                        <h3><a href="single-service.html" style={{ color: 'white' }}>Advanced Cybersecurity Protection</a></h3>
                        <p>Safeguard critical data and systems with enterprise-grade security, role-based access, and threat prevention.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-0-8s" style={{ backgroundColor: '#222b40' }}>
                      <i className="flaticon-puzzle"></i>
                      <div className="content">
                        <h3><a href="single-service.html" style={{ color: 'white' }}>AI Agents & Intelligent Automation</a></h3>
                        <p>Automate repetitive tasks, optimize workflows, and improve decision-making with AI-powered agents.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-1-0s" style={{ backgroundColor: '#222b40' }}>
                      <i className="flaticon-badge"></i>
                      <div className="content">
                        <h3><a href="single-service.html" style={{ color: 'white' }}>Seamless Communication Tools</a></h3>
                        <p>Empower teams with secure, integrated solutions for messaging, collaboration, and project management.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="service-item wow fadeInUp delay-1-2s" style={{ backgroundColor: '#222b40' }}>
                      <i className="flaticon-analytics"></i>
                      <div className="content">
                        <h3><a href="single-service.html" style={{ color: 'white' }}>Data-Driven Analytics</a></h3>
                        <p>Leverage real-time insights and reports to track performance, monitor operations, and guide strategic growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>





            {/* <!--====== Partner Section Start ======--> */}
            {/* <div className="partner-area-three text-center pt-130 rpt-100">
              <div className="container">
                <div className="row justify-content-around justify-content-lg-between mb-80 rmb-50">
                  <div className="col-lg-2 col-md-4 col-6">
                    <a className="partner-item-three wow fadeInUp delay-0-2s" href="project-details.html">
                      <img src={PWhite1} alt="Partner" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6">
                    <a className="partner-item-three wow fadeInUp delay-0-4s" href="project-details.html">
                      <img src={PWhite2} alt="Partner" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6">
                    <a className="partner-item-three wow fadeInUp delay-0-6s" href="project-details.html">
                      <img src={PWhite3} alt="Partner" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6">
                    <a className="partner-item-three wow fadeInUp delay-0-8s" href="project-details.html">
                      <img src={PWhite4} alt="Partner" />
                    </a>
                  </div>
                  <div className="col-lg-2 col-md-4 col-6">
                    <a className="partner-item-three wow fadeInUp delay-1-0s" href="project-details.html">
                      <img src={PWhite5} alt="Partner" />
                    </a>
                  </div>
                </div>
                <hr />
              </div>
            </div> */}
            {/* Contact Section */}
            <section id='contact-section-id' style={{
              padding: '115px 0 130px',
              position: 'relative',
              zIndex: 1,
              backgroundColor: '#222b40'
            }}>
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 15px'
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '50px'
                }}>
                  <h2 style={{
                    fontSize: '42px',
                    marginBottom: '20px',
                    color: 'white',
                    fontWeight: '600',
                  }}>Contact Us</h2>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <form
                    style={{
                      width: '100%',
                      maxWidth: '800px',
                      padding: '45px',
                      backgroundColor: 'white',
                      borderRadius: '15px',
                      background: '#131b2c',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',

                    }}
                  >
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '20px'
                    }}>
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company"
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Subject"
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div>
                        <input
                          type="url"
                          placeholder="Website"
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                      <div style={{ gridColumn: '1 / -1' }}>
                        <textarea
                          placeholder="Message"
                          required
                          rows="4"
                          style={{
                            width: '100%',
                            padding: '12px 20px',
                            backgroundColor: '#f7f9fc',
                            border: '1px solid #e6e9ef',
                            borderRadius: '8px',
                            color: '#333',
                            fontSize: '16px',
                            resize: 'vertical',
                            transition: 'all 0.3s ease'
                          }}
                        ></textarea>
                      </div>
                      <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                        <button
                          type="submit"
                          style={{
                            padding: '12px 40px',
                            backgroundColor: '#4254f4', // Matching the blue from login/sign up buttons
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            marginTop: '20px'
                          }}
                        >
                          Submit <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Adding decorative element similar to the one in hero section */}
              <div style={{
                position: 'absolute',
                top: '100px',
                left: '100px',
                width: '80px',
                height: '80px',
                opacity: '0.5',
                zIndex: '-1'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <g fill="#4254f4">
                    <circle cx="10" cy="10" r="3" />
                    <circle cx="30" cy="10" r="3" />
                    <circle cx="50" cy="10" r="3" />
                    <circle cx="70" cy="10" r="3" />
                    <circle cx="90" cy="10" r="3" />
                    <circle cx="10" cy="30" r="3" />
                    <circle cx="30" cy="30" r="3" />
                    <circle cx="50" cy="30" r="3" />
                    <circle cx="70" cy="30" r="3" />
                    <circle cx="90" cy="30" r="3" />
                    <circle cx="10" cy="50" r="3" />
                    <circle cx="30" cy="50" r="3" />
                    <circle cx="50" cy="50" r="3" />
                    <circle cx="70" cy="50" r="3" />
                    <circle cx="90" cy="50" r="3" />
                    <circle cx="10" cy="70" r="3" />
                    <circle cx="30" cy="70" r="3" />
                    <circle cx="50" cy="70" r="3" />
                    <circle cx="70" cy="70" r="3" />
                    <circle cx="90" cy="70" r="3" />
                    <circle cx="10" cy="90" r="3" />
                    <circle cx="30" cy="90" r="3" />
                    <circle cx="50" cy="90" r="3" />
                    <circle cx="70" cy="90" r="3" />
                    <circle cx="90" cy="90" r="3" />
                  </g>
                </svg>
              </div>

              {/* Adding a decorative element like the star in the hero section */}
              <div style={{
                position: 'absolute',
                right: '150px',
                top: '250px',
                zIndex: '-1'
              }}>
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0L18.5 11.5H30L20.5 18.5L24 30L15 23L6 30L9.5 18.5L0 11.5H11.5L15 0Z" fill="#4254f4" />
                </svg>
              </div>
            </section>


            {/* Footer */}
            <footer className="footer-section footer-two bg-gray text-white rel z-1">
              <div className="container">
                <div className="footer-top py-50">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                        <h4 className="footer-title">OctaTech FZE</h4>
                        <p>Our advanced solutions simplify business operations by combining SaaS+, Cybersecurity, Software Development, and AI Automation — delivering scalability, security, and performance</p>

                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">

                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">

                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                      <div className="footer-widget">
                        <h4 className="footer-title">Contact Info</h4>
                        <ul className="list-style-three">
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>UAE, USA</span>
                          </li>
                          <li>
                            <i className="fas fa-envelope"></i>
                            <a href="support@octatechfze.com">hello@octatechfze.com</a>
                          </li>
                          {/* <li>
                            <i className="fas fa-phone"></i>
                            <a href="tel:+1234567890">+123 456 7890</a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="copyright-area text-center py-20">
                  <p>© 2025 octatechfze. All Rights Reserved</p>
                </div>
              </div>
              <img className="dots-shape" src={ShapeDot} alt="Shape" />
              <img className="tringle-shape" src={ShapeTraingle} alt="Shape" />
              <img className="close-shape" src={ShapeClose} alt="Shape" />
            </footer>

            {/* Scroll Top Button */}
            <button
              className="scroll-top scroll-to-target"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="fa fa-angle-up"></span>
            </button>
          </div>
        </div>
      </Preloader>
    </>
  );
};

export default LandingPage;