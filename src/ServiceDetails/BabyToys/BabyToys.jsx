import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './BabyToys.css'

const BabyToys = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div style={{ color: 'white' }} className="font all-all">
            <Header></Header>
            <Container>
                <div className="projects-details-info">
                    <div className="half-width-image">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/RQgLhWY/toys-1.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/JyjNph7/toys-2.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/H79XmSn/toys-3.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/k4gq9zn/tralive-4.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <div className="info-button">
                            <a href="https://baby-toys.netlify.app/"><Button variant="success">Demo</Button></a>
                            <a href="https://github.com/parvez-miah/Baby-Toys-Website-Client"><Button variant="success">Client</Button></a>
                            <a href="https://github.com/parvez-miah/Baby-Toys-website-server"><Button variant="success">Server</Button></a>
                        </div>
                    </div>

                    <div className="projects-half-info">
                        <h2 className="project-title">Baby Toys Related Site</h2>
                        <br />
                        <p>This website is related to children's toys, anyone can login or register here and buy any product.</p>
                        <h3 style={{ color: 'orange' }}>Key Features</h3>
                        <li>This is a complete MERN stack website.</li>
                        <li>Firebase is used for the login registration page.</li>
                        <li>If the user wants, you can book the order and see the booked orders.</li>
                        <li>Contains admin panel.</li>
                        <li>If the admin wants, he can make another admin.</li>
                        <li>Order status can be changed.</li>
                        <li>Order can be confirmed.</li>
                        <li>Orders can be canceled.</li>
                        <li>The private round system was added.</li>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};


export default BabyToys;