import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Work.css';

const Work = () => {

    return (
        <div>
            <Container>
                <h2 className="font text-primary" style={{ textAlign: 'center', fontWeight: '700' }}> ⚒ My Latest Creative Work</h2>
                <div className="font work-tab">
                    <div data-aos="fade-up-right" className="single-work">
                        <img src="https://i.ibb.co/qDzXhC0/image-1.jpg" alt="" />
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

                            <a href=""><Button variant="success">Demo</Button></a>
                            <a href=""><Button variant="success">Client</Button></a>
                            <a href=""><Button variant="success">Server</Button></a>
                        </div>
                    </div>
                    <div data-aos="zoom-out-up" className="single-work">
                        <img src="https://i.ibb.co/s9s5WTT/image-2.jpg" alt="" />
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

                            <a href=""><Button variant="success">Demo</Button></a>
                            <a href=""><Button variant="success">Client</Button></a>
                            <a href=""><Button variant="success">Server</Button></a>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="single-work">
                        <img src="https://i.ibb.co/b1d189D/image-3.jpg" alt="" />
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
                        <h3>Doctors Portal</h3>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>

                            <a href=""><Button variant="success">Demo</Button></a>
                            <a href=""><Button variant="success">Client</Button></a>

                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="single-work">
                        <img src="https://i.ibb.co/b1d189D/image-3.jpg" alt="" />
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
                            <a href=""><Button variant="success">Demo</Button></a>
                            <a href=""><Button variant="success">Client</Button></a>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className="single-work">
                        <img src="https://i.ibb.co/b1d189D/image-3.jpg" alt="" />
                        <div className="technology">
                            <small>HTML</small>
                            <small>CSS</small>
                            <small>Javascript</small>
                            <small>Bootstrap</small>
                            <small>Rest API</small>
                        </div>
                        <h3>Doctors Book</h3>

                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="button-regular" style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6px', padding: '4px' }}>

                            <a href=""><Button variant="success">Demo</Button></a>
                            <a href=""><Button variant="success">Client</Button></a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Work;