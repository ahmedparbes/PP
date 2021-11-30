import React, { useEffect } from 'react';
import './HeaderBanner.css';
import AOS from 'aos';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
const HeaderBanner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (

        <div className="banner-banner">
            <div class="bannner font">
                <div className="banner">
                    <Container>
                    
                        <div className="font banner-container">
                            <div className="half-width" data-aos="fade-right">
                                <h2 style={{ marginTop: "140px" }}>Hello My name is <span style={{ color: 'red', fontWeight: '700' }}> Parvez</span> </h2>
                                <p> I am a web developer, especially a React developer. I am fully prepared to take up the challenge under favorable circumstances. I love to solve any coding problem.

                                </p>
                                <a target='_blank' href="https://drive.google.com/file/d/1loJqV2_aBBBnfdHWZbf-QfmTGzgw0kMH/view?usp=sharing"> <Button style={{ borderRadious: '20px' }} variant="success">Download Resume</Button></a>
                            </div>
                            <div data-aos="zoom-in-up" className="half-image">
                                <img src="https://i.ibb.co/hsF0GfL/designer-girl-animate.png" alt="" />
                            </div>
                        </div>
                    </Container>
                </div>

            </div>
        </div>
    );
};

export default HeaderBanner;