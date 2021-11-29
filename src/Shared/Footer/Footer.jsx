import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: 'purple', padding: '20px', color: 'white' }}>
            <footer>
                {/* <div class="last-section font">
                    <div class="recomonded">
                        <h4>My Projects</h4>
                        <p><Link style={{ color: 'white', fontSize: '18px' }} to="/">Home</Link></p>
                        <p><Link style={{ color: 'white', fontSize: '18px' }} to="/">Medical Operation</Link></p>
                        <p><Link style={{ color: 'white', fontSize: '18px' }} to="/">Baby Toys</Link></p>
                        <p><Link style={{ color: 'white', fontSize: '18px' }} to="/">MacBook Pro</Link></p>
                    </div>
                    <div class="recomonded">
                        <h4>Support</h4>
                        <p><Link style={{ color: 'white', fontSize: '18px' }} to="/">FAQ</Link></p>
                        <p><Link style={{ color: 'white', fontSize: '18px' }} to="/">Troubleshooting</Link></p>
                    </div>
                    <div class="recomonded">
                        <h4>About realme</h4>
                        <p>Hello My name is Parvez <br />
                            I am a web developer,<br /> especially a React developer. <br />I am fully prepared to take up the challenge under <br />favorable circumstances.</p>
                    </div>
                    <div class="recomonded">
                        <h4>Contact </h4>
                        <p>dev.parvezmiah@gmail.com</p>
                        <p>01777469295</p>
                        <p>01859596636</p>
                        <p>Saturday- Sunday</p>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                    </div>
                    <div class="recomonded last">

                    </div>

                </div> */}

                <p className="font" style={{ textAlign: 'center' }}>© 2021 Parvez.All Rights Reserved.</p>

            </footer>


        </div>
    );
};

export default Footer;