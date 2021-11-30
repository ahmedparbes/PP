import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './MedicalApp.css'

const MedicalApp = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="font all-service-bg">
            <Header></Header>

            <Container>
                <div className="projects-details-info">
                    <div className="half-width-image">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/fQxQxdc/tr-min.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/fQxQxdc/tr-min.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/fQxQxdc/tr-min.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <div className="button-regular" style={{ display: 'flex', justifyContent: 'space-around', marginRight: '140px', marginTop: '6px', padding: '4px' }}>
                            <a href="https://determined-mcclintock-97d5d4.netlify.app/"><Button variant="success">Demo</Button></a>
                            <a href="https://github.com/parvez-miah/Book-Achive-Assainment-6"><Button variant="success">Client</Button></a>
                        </div>
                    </div>

                    <div className="projects-half-info">
                        <h2 className="project-title">Medical Related Site</h2>
                        <br />
                        <p>This website is designed to deal with medical-related issues, the website users can order a variety of medical-related services.</p>
                        <h3>Key Features</h3>

                        <br />
                        <li>This is a complete MERN stack website.</li>
                        <li>Firebase is used for the login registration page.</li>
                        <li>If the user wants, you can book the order and see the booked orders.</li>
                        <li> The private round system was added.</li>

                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MedicalApp;