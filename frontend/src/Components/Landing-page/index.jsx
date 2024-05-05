import React from 'react';
import '../Landing-page/index.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope, FaMapMarker, FaBandcamp, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import bg_image from '../Landing-page/bg-image.png';
import about_us_image from '../Landing-page/about_us_image.png';
import location from '../Landing-page/location.png';
import logo from '../Landing-page/LOGO.png';
import { useState } from 'react';
import ActionAreaCard from '../Utilities/features'
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
    const navigate = useNavigate();
    const [Features, setFeatures] = useState([
        {
            name: 'Fall Detection and Alert',
            imgsrc: require('./fall.png'),
            // onClick={() => { navigate('/login') }}
            Link:('/Components/FallReports/index.jsx'),
        },

        // {
        //     name: 'Voice Activated Commands',
        //     imgsrc: require('./voice.png'),
        // },

        {
            name: 'Medication Management',
            imgsrc: require('./medicine.png'),
        },

        {
            name: 'Memory Assistance and Reminder',
            imgsrc: require('./memory.png'),
        },

        {
            name: 'Emergency Response and Alert',
            imgsrc: require('./emergency.png'),
        }

    ])
    return (
        <>
            {/* <div className='main'> */}
            <div className='topBar gradient-background'>
                <div className='topBarLeft '><FaPhone  paddingRight='15px'/>Phone No</div>
                <div className='topBarCenter '><FaEnvelope />Email</div>
                <div className='topBarRight '><FaMapMarker  />Address Here</div>

            </div>

            <div className='navbar'>
                <Navbar expand="lg" className=' bg-light shadow-5 ' >
                    <Container fluid>
                        <Navbar.Brand href="#"
                            style={{
                                // fontSize: '30px',
                                color: '#004f82',
                                fontWeight: 'bolder',
                                marginLeft: 30
                            }}>OLDVOY</Navbar.Brand>

                            <Navbar.Brand>
                                {/* <img src={logo} style={{
                                    width:'90px',
                                    height:'90px',
                                    marginLeft:'50px'
                                }}></img> */}
                            </Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse className="navbarScroll">

                            <Nav
                                style={{
                                    maxHeight: '100px',
                                
                                }}
                                navbarScroll
                            >
                                <Nav.Link href="#" className='nav'>Home</Nav.Link>
                                <Nav.Link href="#" className='nav'>Get started</Nav.Link>
                                <Nav.Link href="#about_us" className='nav'>About us</Nav.Link>
                                <Nav.Link href="#" className='nav'>Blogs</Nav.Link>
                                <Nav.Link href="#" className='nav'>Contact</Nav.Link>

                                <Button variant="outline-light" className='navbtn1 gradient-background' type="submit" onClick={() => { navigate('/login') }} >Login</Button>
                                <Button variant="outline-light" className='navbtn2 gradient-background' type="submit" onClick={() => { navigate('/signUp') }}>Signup</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className='centerDiv'>
                <img className='bgImage' src={bg_image}
                    style={{
                        width: "460",
                        height: "345"
                    }}
                />
                <div className='content1' >The world most Advanced</div>
                <div className='content2'>Medical<br />Alert System</div>
                <button className='contentBtn'>Get Started</button>

            </div>

            <div className='aboutUsDiv' id='about_us'>
                <div className='heading1 my-5'><p>About Us</p></div>

                <div className='wrapper'>
                    <img className="wrapper_img" src={about_us_image}></img>
                    <div className='text-box'>
                        <p>
                            In 2022, there were 771 million people aged 65+ years
                            globally, accounting for almost 10% of the world's
                            population.This segment has been growing at an increasing
                            rate, and it’s expected to hit 16% in 2050, and eventually 24%
                            by 2100. In Pakistan, 7% of the population (about 14 million)
                            is over 60 years of age.In 2022, there were 771 million people aged 65+ years
                            globally, accounting for almost 10% of the world's
                            population.This segment has been growing at an increasing
                            rate, and it’s expected to hit 16% in 2050
                        </p>
                    </div>
                </div>
            </div>

            <div className='featuresDiv '>
                <div className='heading2'><p>Our features</p></div>
                <div className='features'>
                    {
                        Features.map((features, index) => {
                            return (
                                <ActionAreaCard

                                    name={features.name}
                                    imgsrc={features.imgsrc}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className="footer gradient-background">

            
                <div className="footerLeft">
                    
                        <h1> OLDVOY</h1>
                        <FaInstagram color="black"/><Link className='link '>https://www.instagram.com/oldvoy2024/?igsh=MTVmaWNoN3dudnRqaQ%3D%3D</Link><br/>
                        <FaLinkedinIn color="black"/><Link className='link'>https://www.linkedin.com/in/old-voy-7779b62b4/?utm_source=share&utm_campaign=share_<br/>via&utm_content=profile&utm_medium=android_app</Link>
                    
                </div>

                <div className='footerCenter'>
                        <h1> Quick Links</h1>
                    
                    <div className='footerLinks'>

                        <Link style={{ color: "white", margin: 30 }} onClick={() => { }}>
                            About
                        </Link>
                        <br />
                        <Link style={{ color: "white", margin: 30 }} onClick={() => { }}>
                            News
                        </Link>
                        <br />
                        <Link style={{ color: "white", margin: 30 }} onClick={() => { }}>
                            Products
                        </Link>
                        <br />
                        <Link style={{ color: "white", margin: 30 }} onClick={() => { }}>
                            FAQs
                        </Link>
                        <br />
                        <Link style={{ color: "white", margin: 30 }} onClick={() => { }}>
                            Contact Us
                        </Link>
                        <br />
                        <Link style={{ color: "white", margin: 30 }} onClick={() => { }}>
                            Privacy
                        </Link>
                    </div>

                </div>

                <div className='footerRight'>
                        <h1> Location</h1>
                        <img src={location} style={{
                            height:'130px',
                            width:'250px'
                        }}></img>

                    
                    

                </div>

              
            </div>
           
            <div className='line'></div>
            <div className="copyRight gradient-background" >
                <div className="copyRightText py-2" >
                    <p>All Righ Reserved 2023 - Powered by OldVoy</p>
                </div>
            </div>
        </>
    )
}

export default LandingPage