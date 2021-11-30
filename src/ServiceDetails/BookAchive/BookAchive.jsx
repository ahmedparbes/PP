import React, { useState } from 'react';

import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const BookAchive = () => {
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
                                    src="https://i.ibb.co/dJcM8sZ/book-1.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '80%', height: '20%', marginTop: '40px' }}
                                    className="d-block"
                                    src="https://i.ibb.co/TKWN5rG/book-2.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>

                        </Carousel>
                        <div className="info-button">

                            <a href="https://friendly-curie-7d7be1.netlify.app/"><Button variant="success">Demo</Button></a>
                            <a href="https://github.com/parvez-miah/Mac-Book-Pro-Assainment-5"><Button variant="success">Client</Button></a>
                        </div>
                    </div>

                    <div className="projects-half-info">
                        <h2 className="project-title">Book Archive</h2>
                        <br />
                        <p>This website has been created using API. Using the website, any visitor will be able to find the book by searching.</p>
                        <h3 style={{ color: 'orange' }}>Key Features</h3>
                        <li>This website is fully responsive.</li>
                        <li>Use the search bar to search and retrieve any type of book.
                            .</li>
                        <li>After searching for your favorite books, you can see how many books have been found.</li>


                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default BookAchive;