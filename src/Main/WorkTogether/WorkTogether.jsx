import React from 'react';
import { Container } from 'react-bootstrap';
import './WorkTogether.css'

const WorkTogether = () => {
    return (
        <div className="font together">
            <h2 style={{
                textAlign: "center", fontWeight: '600', color: 'white'
            }} > ➳ Behind the Person</h2>
            < div className="font work" >
                <Container>
                    <div className="work-together">
                        <div style={{ marginLeft: '20px' }}>
                            <h2 className=" section-this ">Work Together For Success</h2>
                            <br />
                            <br />
                            <p ata-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">I am a web developer especially a MERN stack developer. I look forward to learning more about programming-related new things every day. I like blogging more in my spare time.
                                <br />
                                I also like to engage in a variety of activities during my leisure time, including playing games and hanging out with friends.
                                <br />
                                I am always looking for a company like this, where I can develop myself and be a partner in the success of the company.
                            </p>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="work-image">
                            <img src="https://i.ibb.co/TgsbrvG/finance-cuate.png" alt="" />
                        </div>
                    </div>
                </Container>
            </div>
        </div >
    );
};

export default WorkTogether;