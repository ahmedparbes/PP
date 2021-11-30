import React from 'react';
import { Container } from 'react-bootstrap';
import './Expertise.css'

const Expertise = () => {
    return (
        <Container>
            <h2 className="font" style={{ color: 'orange', marginBottom: '30px' }}>Experience</h2>
            <div className="font expertise">
                {/* <div class="container">
                <div class="row"> */}
                {/* <div class="col-md-6"> */}
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">JavaScript</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">85%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">ES6</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">90%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">Bootstrap5</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">95%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">HTML5</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">85%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">CSS3</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">87%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">Material UI</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">70%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">React Bootstrap</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">85%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title"> Express.js</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">75%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">MongoDB</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">75%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title">Firebase</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 style={{ color: 'white' }} class="progress-title"> Node.js</h3>
                    <div class="progress red">
                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style={{ width: '65%' }}>
                            <div class="progress-value">80%</div>
                        </div>
                    </div>
                </div>

                {/* </div>
                </div> */}
                {/* </div> */}
            </div>
        </Container>
    );
};

export default Expertise;