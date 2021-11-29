import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {


    return (
        <div>

            <Container>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="font contact-text-header" style={{ marginTop: '40px' }}>Have any Question or want to connect with me?</h2>
                    <small className="font">Fell free to contact with me</small>
                </div>
                <section id="contact font">

                    <div data-aos="zoom-in" className="contact-wrapper font ">
                        <div class="container">
                            <form target="_blank" action="https://formsubmit.co/dev.parvezmiah@gmail.com" method="POST">
                                <div class="form-group">
                                    <div class="form-row">
                                        <div class="col">
                                            <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                                        </div>
                                        <div class="col">
                                            <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <button
                                    className="btn btn-primary send-button font" id="submit" type="submit" value="SEND">
                                    <div className="alt-send-button">
                                        <i className="fa fa-paper-plane"></i>
                                        <span className="send-text">SEND</span>
                                    </div>

                                </button>
                            </form>
                        </div>
                        {/* <form id="contact-form" className="form-horizontal" role="form">
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control font" id="name" placeholder="NAME" name="name" value="" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="email" className="form-control font" id="email" placeholder="EMAIL" name="email" value="" required />
                                </div>
                            </div>

                            <textarea className="form-control font" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                            <button
                                className="btn btn-primary send-button font" id="submit" type="submit" value="SEND">
                                <div className="alt-send-button">
                                    <i className="fa fa-paper-plane"></i>
                                    <span className="send-text">SEND</span>
                                </div>

                            </button>

                        </form> */}



                        <div data-aos="fade-up-left" className="direct-contact-container">

                            <ul className="contact-list">
                                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Kulaura, Moulvibazar</span></i></li>

                                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+8801777469295</a></span></i></li>

                                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">dev.parvezmiah@gmail.com</a></span></i></li>

                            </ul>

                            <ul className="social-media-list font">
                                <li>
                                    <a href="https://github.com/ahmedparbes" target="_blank" className="contact-icon">

                                        <i className="fa fa-github" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#" target="_blank" className="contact-icon">
                                        <i className="fa fa-codepen" aria-hidden="true">
                                        </i></a>
                                </li>
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>


                        </div>

                    </div>

                </section>


            </Container>

        </div>
    );
};

export default Contact;