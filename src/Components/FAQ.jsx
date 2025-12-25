import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import WOW from 'wow.js';
import HRMSLogo from '../assets1/images/octa-tech-logo-new.png';
import ShapeDot from '../assets1/images/shapes/dots.png';
import ShapeTraingle from '../assets1/images/shapes/tringle.png';
import ShapeClose from '../assets1/images/shapes/close.png';
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
import '../assets1/css/mobile-logo.css';

const FAQPage = () => {
    const imagesArray = [
        HRMSLogo,
        ShapeDot,
        ShapeTraingle,
        ShapeClose,
    ];

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);

    useEffect(() => {
        // Initialize WOW.js
        new WOW().init();
    }, []);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const faqData = [
        {
            question: "What is SaaS+?",
            answer: "We're building on our deep domain expertise and commitment to the industries we serve with SaaS+. SaaS+ (Solution as a Service) is Octatech’s all-inclusive offering, designed to deliver industry-specific software solutions. Leveraging Octatech’s unique Power of One, SaaS+ enables fast, low-risk, end-to-end software implementations. Octatech takes full responsibility for delivering outcomes with our best-in-class SaaS ERP, covering implementation, support, and upgrade costs. With complete ownership of the solution experience; not just the software; SaaS+ ensures minimal risk. Constantly evolving, SaaS+ allows you to benefit from Octatech’s continuous improvement model."
        },
        {
            question: "What are the benefits of SaaS+?",
            answer: "SaaS+ puts customers first with faster time to value through preconfigured industry solutions and a streamlined approach. It reduces project and organisational risk with clear outcomes, strong security, and full compliance with local regulations. Accessible anytime, anywhere, SaaS+ empowers customers to innovate faster while Octatech takes complete responsibility for building, running, and supporting the software."
        },
        {
            question: "How does your cybersecurity solution protect my business?",
            answer: "Our comprehensive cybersecurity solutions include advanced threat detection, real-time monitoring, endpoint protection, and incident response. We implement multi-layered security frameworks including firewalls, encryption, access controls, and regular security audits. Our team continuously monitors for emerging threats and provides 24/7 security operations center (SOC) services to ensure your business data and systems remain protected against cyber attacks."
        },
        {
            question: "What types of AI agents can you develop for my business?",
            answer: "We develop custom AI agents tailored to your specific business needs, including customer service chatbots, data analysis agents, workflow automation bots, predictive analytics systems, and intelligent document processing agents. Our AI solutions can automate repetitive tasks, provide insights from your data, enhance customer interactions, and streamline business processes to improve efficiency and productivity."
        },
        {
            question: "How long does it take to implement a custom software solution?",
            answer: "Implementation timelines vary based on project complexity and requirements. Simple applications typically take 2-4 months, while complex enterprise solutions may require 6-12 months. We follow an agile development methodology with regular milestones and deliverables. During our initial consultation, we provide a detailed project timeline with clear phases including discovery, design, development, testing, and deployment."
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, we provide comprehensive ongoing support and maintenance for all our solutions. This includes 24/7 technical support, regular software updates, security patches, performance monitoring, backup services, and system optimization. We offer different support tiers to match your business needs, from basic maintenance to full managed services with dedicated support teams."
        },
        {
            question: "Can your solutions integrate with existing business systems?",
            answer: "Absolutely! Our solutions are designed with integration in mind. We can seamlessly connect with popular business systems including CRM platforms, ERP systems, accounting software, communication tools, and database systems. We use standard APIs, webhooks, and custom integration methods to ensure smooth data flow between your existing tools and our new solutions."
        },
        {
            question: "What industries do you specialize in?",
            answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, logistics, and technology. Our team has extensive experience in industry-specific regulations, compliance requirements, and business processes. We tailor our solutions to meet the unique challenges and opportunities within each industry sector."
        },
        {
            question: "How do you ensure data security and compliance?",
            answer: "We implement enterprise-grade security measures including data encryption, secure access controls, regular security audits, and compliance with industry standards such as GDPR, HIPAA, SOC 2, and others. Our infrastructure includes secure cloud hosting, backup systems, disaster recovery plans, and continuous monitoring. We also provide detailed compliance reporting and documentation."
        },
        {
            question: "What is your pricing model?",
            answer: "Our pricing is tailored to each project's specific requirements and scope. We offer flexible pricing models including fixed-price projects, monthly subscriptions for SaaS solutions, and hourly consulting rates. During our initial consultation, we provide transparent pricing with no hidden costs. We also offer scalable solutions that can grow with your business needs."
        }
    ];

    return (
        <>
            <Preloader images={imagesArray}>
                <div className="hrms-landing-page">
                    <div className="page-wrapper">
                        {/* Header Section - Exact copy from home.jsx */}
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
                                                        className="responsive-logo"
                                                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                      
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* FAQ Hero Section */}
                        <section className="hero-section-three rel z-2 pt-235 rpt-150 pb-130 rpb-100" style={{
                            backgroundColor: '#222b40'
                        }}>
                            <div className="container" style={{ marginTop: '-100px', marginBottom: '50px' }}>
                                <div className="row justify-content-center text-center">
                                    <div className="col-lg-8 col-md-10">
                                        <div className="hero-content-three rpt-15 rmb-75">
                                            <h1 className="mb-15 wow fadeInUp delay-0-2s" style={{
                                                marginTop: '100px',
                                                fontSize: 'xxx-large',
                                                color: 'white',
                                                marginBottom: '30px'
                                            }}>
                                                Frequently Asked Questions
                                            </h1>
                                            <p className="wow fadeInUp delay-0-4s" style={{
                                                color: 'white',
                                                fontSize: '18px',
                                                marginBottom: '50px',
                                                textAlign: 'center',
                                                maxWidth: '600px',
                                                margin: '0 auto 50px auto',
                                                lineHeight: '1.6'
                                            }}>
                                                Find answers to common questions about our SaaS+, Cybersecurity, Software Development, and AI solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img className="dots-shape" src={ShapeDot} alt="Shape" />
                            <img className="tringle-shape" src={ShapeTraingle} alt="Shape" />
                            <img className="close-shape" src={ShapeClose} alt="Shape" />

                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10">
                                        <div className="faq-accordion wow fadeInUp delay-0-2s">
                                            {faqData.map((faq, index) => (
                                                <div
                                                    key={index}
                                                    className="faq-item"
                                                    style={{
                                                        backgroundColor: 'rgba(21, 32, 59, 1)',
                                                        marginBottom: '20px',
                                                        borderRadius: '12px',
                                                        overflow: 'hidden',
                                                        border: '1px solid rgba(78, 97, 255, 0.1)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div
                                                        className="faq-question"
                                                        onClick={() => toggleAccordion(index)}
                                                        style={{
                                                            padding: '25px 30px',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            backgroundColor: activeAccordion === index ? '#4e61ff' : 'transparent',
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                        onMouseOver={(e) => {
                                                            if (activeAccordion !== index) {
                                                                e.currentTarget.style.backgroundColor = 'rgba(78, 97, 255, 0.1)';
                                                            }
                                                        }}
                                                        onMouseOut={(e) => {
                                                            if (activeAccordion !== index) {
                                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                            }
                                                        }}
                                                    >
                                                        <h4 style={{
                                                            margin: '0',
                                                            fontSize: '18px',
                                                            fontWeight: '600',
                                                            color: 'white',
                                                            flex: '1',
                                                            paddingRight: '20px'
                                                        }}>
                                                            {faq.question}
                                                        </h4>
                                                        <i
                                                            className={`fas ${activeAccordion === index ? 'fa-minus' : 'fa-plus'}`}
                                                            style={{
                                                                fontSize: '16px',
                                                                color: 'white',
                                                                transition: 'transform 0.3s ease',
                                                                transform: activeAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                                            }}
                                                        ></i>
                                                    </div>
                                                    <div
                                                        className="faq-answer"
                                                        style={{
                                                            maxHeight: activeAccordion === index ? '1000px' : '0',
                                                            overflow: 'hidden',
                                                            transition: 'all 0.3s ease',
                                                            backgroundColor: '#1a2332'
                                                        }}
                                                    >
                                                        <div style={{
                                                            padding: activeAccordion === index ? '25px 30px' : '0 30px',
                                                            transition: 'padding 0.3s ease'
                                                        }}>
                                                            <p style={{
                                                                margin: '0',
                                                                fontSize: '16px',
                                                                lineHeight: '1.7',
                                                                color: '#e0e0e0',
                                                                whiteSpace: 'pre-line'
                                                            }}>
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Still have questions section */}
                                {/* <div className="row justify-content-center mt-80">
                                    <div className="col-lg-8 text-center">
                                        <div className="still-questions wow fadeInUp delay-0-4s" style={{
                                            backgroundColor: '#222b40',
                                            padding: '50px 30px',
                                            borderRadius: '15px',
                                            border: '1px solid rgba(78, 97, 255, 0.2)'
                                        }}>
                                            <h3 style={{
                                                color: 'white',
                                                fontSize: '28px',
                                                marginBottom: '20px',
                                                fontWeight: '600'
                                            }}>
                                                Still have questions?
                                            </h3>
                                            <p style={{
                                                color: '#e0e0e0',
                                                fontSize: '16px',
                                                marginBottom: '30px',
                                                lineHeight: '1.6'
                                            }}>
                                                Can't find the answer you're looking for? Our team is here to help you with any questions about our solutions.
                                            </p>
                                            <div style={{
                                                display: 'flex',
                                                gap: '20px',
                                                justifyContent: 'center',
                                                flexWrap: 'wrap'
                                            }}>
                                                <button
                                                    onClick={() => navigate('/')}
                                                    className="theme-btn"
                                                    style={{
                                                        padding: '12px 25px',
                                                        borderRadius: '8px',
                                                        background: '#4e61ff',
                                                        color: '#ffffff',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        fontWeight: '600',
                                                        fontSize: '16px',
                                                        transition: 'all 0.3s ease',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.background = '#3d4edc';
                                                        e.target.style.transform = 'translateY(-2px)';
                                                        e.target.style.boxShadow = '0 4px 12px rgba(78, 97, 255, 0.4)';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.background = '#4e61ff';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <i className="fas fa-envelope"></i>
                                                    Contact Support
                                                </button>
                                                <button
                                                    onClick={() => navigate('/')}
                                                    className="theme-btn"
                                                    style={{
                                                        padding: '12px 25px',
                                                        borderRadius: '8px',
                                                        background: 'transparent',
                                                        color: '#ffffff',
                                                        border: '2px solid #4e61ff',
                                                        cursor: 'pointer',
                                                        fontWeight: '600',
                                                        fontSize: '16px',
                                                        transition: 'all 0.3s ease',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.target.style.background = '#4e61ff';
                                                        e.target.style.transform = 'translateY(-2px)';
                                                        e.target.style.boxShadow = '0 4px 12px rgba(78, 97, 255, 0.4)';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.target.style.background = 'transparent';
                                                        e.target.style.transform = 'translateY(0)';
                                                        e.target.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <i className="fas fa-phone"></i>
                                                    Schedule Call
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </section>

                        {/* Footer - Exact copy from home.jsx */}
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

export default FAQPage;