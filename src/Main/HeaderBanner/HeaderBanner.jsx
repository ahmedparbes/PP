import React, { useEffect } from 'react';
import './HeaderBanner.css';
import AOS from 'aos';
import { Container } from 'react-bootstrap';

const HeaderBanner = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (

        <div class="bannner font">
            <div className="banner">
                <Container>
                    <div className="font banner-container">
                        <div className="half-width" data-aos="fade-right">
                            <h2 style={{ marginTop: "140px" }}>Hello My name is <span style={{ color: 'red', fontWeight: '700' }}> Parvez</span> </h2>
                            <p> I am a web developer, especially a React developer. I am fully prepared to take up the challenge under favorable circumstances. I love to solve any coding problem.

                            </p>
                            <button id="resume-button">Download Resume</button>
                        </div>
                        <div data-aos="zoom-in-up" className="half-image">
                            <img src="https://i.ibb.co/hsF0GfL/designer-girl-animate.png" alt="" />
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default HeaderBanner;