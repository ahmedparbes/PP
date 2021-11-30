import React, { useState } from 'react';

import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const MacBook = () => {
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

                            <a href="https://friendly-curie-7d7be1.netlify.app/"><Button variant="success">Demo</Button></a>
                            <a href="https://github.com/parvez-miah/Mac-Book-Pro-Assainment-5"><Button variant="success">Client</Button></a>
                        </div>
                    </div>

                    <div className="projects-half-info">
                        <h2 className="project-title">MacBook Pro</h2>
                        <br />
                        <p>This website is designed to track the shopping cart related accounts look like any e-commerce website.</p>
                        <h3>Key Features</h3>
                        <li>Website Fully Responsive Mobile Friendly.</li>
                        <li>You can see how much it costs to place an order through the website.</li>
                        <li>The shopping cart's full account can be seen.</li>
                        <li>There are discounts using special promo codes.</li>


                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MacBook;