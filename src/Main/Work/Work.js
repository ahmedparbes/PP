import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Work.css';

const Work = () => {

    return (
        <div>

            <Container>
                <h2 className="font text-primary" style={{ textAlign: 'center', fontWeight: '700', marginTop: '30px' }}> ⚒ My Latest Creative Work</h2>
                <div className="font work-tab">
                    <div data-aos="fade-up-right" className="single-work">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/X23Ppb7/babytoys-min.png" alt="" />
                        <div className="technology">
                            <small>HTML</small>
                            <small>CSS</small>
                            <small>React js</small>
                            <small>Express js</small>
                            <small>Javascript</small>
                            <small>Node js</small>
                            <small>Firebase</small>
                            <small>Bootstrap</small>
                            <small>MUI</small>
                        </div>
                        <h3>Baby Toys</h3>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>
                            <a href="https://jerins-parlour-aa7be.web.app/"><Button variant="success">Demo</Button></a>
                            <a href="/toys"><Button variant="success">Details</Button></a>
                        </div>
                    </div>
                    <div data-aos="zoom-out-up" className="single-work">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/fQxQxdc/tr-min.png" alt="" />
                        <div className="technology">
                            <small>HTML</small>
                            <small>CSS</small>
                            <small>React js</small>
                            <small>Express js</small>
                            <small>Javascript</small>
                            <small>Node js</small>
                            <small>Firebase</small>
                            <small>Bootstrap</small>
                            <small>MUI</small>
                        </div>
                        <h3>Travel App</h3>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>

                            <a href="https://tralive-app.web.app/"><Button variant="success">Demo</Button></a>
                            <a href="/tralive"><Button variant="success">Details</Button></a>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="single-work">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/CbW3B6K/medical-min.png" alt="" />
                        <div className="technology">
                            <small>HTML</small>
                            <small>CSS</small>
                            <small>React js</small>
                            <small>Javascript</small>
                            <small>Firebase</small>
                            <small>Bootstrap</small>
                        </div>
                        <h3>Doctors Portal</h3>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>

                            <a href="https://medical-operation.web.app/"><Button variant="success">Demo</Button></a>
                            <a href="/medical"><Button variant="success">Details</Button></a>

                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="single-work">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/T8d8nt2/Screenshot-1-min.png" alt="" />
                        <div className="technology">
                            <small>HTML</small>
                            <small>CSS</small>
                            <small>Bootstrap</small>
                            <small>Javascript</small>
                        </div>
                        <h3>MacBook Pro</h3>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>
                            <a href="https://friendly-curie-7d7be1.netlify.app/"><Button variant="success">Demo</Button></a>
                            <a href="/macbook"><Button variant="success">Details</Button></a>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="single-work">
                        <img style={{ width: '100%' }} src="https://i.ibb.co/7SgdYpF/achivebook-min.png" alt="" />
                        <div className="technology">
                            <small>HTML</small>
                            <small>CSS</small>
                            <small>Javascript</small>
                            <small>Bootstrap</small>
                            <small>Rest API</small>
                        </div>
                        <h3>Book Store</h3>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>

                            <a href="https://determined-mcclintock-97d5d4.netlify.app/"><Button variant="success">Demo</Button></a>
                            <a href="/book-archive"><Button variant="success">Details</Button></a>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Work;