import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const BabyToys = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="font">
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

                            <a href="https://jerins-parlour-aa7be.web.app/"><Button variant="success">Demo</Button></a>
                            <a href="https://github.com/parvez-miah/Baby-Toys-Website-Client"><Button variant="success">Client</Button></a>
                            <a href="https://github.com/parvez-miah/Baby-Toys-website-server"><Button variant="success">Server</Button></a>
                        </div>
                    </div>

                    <div className="projects-half-info">
                        <h2>Baby Toys Related Site</h2>
                        <br />
                        <p>This website is made up of baby toys items. If you want in the afternoon, you can visit this website and book any kind of hotel.</p>
                        <h3>Key Features</h3>
                        <li>This is a complete MERN stack website.</li>
                        <li>Firebase is used for the login registration page.</li>
                        <li>If the user wants, you can book the order and see the booked orders.
                            The private round system was added.</li>
                        <li>Many different technologies and frameworks have been used to create the website.</li>
                        <li>Clean Code</li>


                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};


export default BabyToys;