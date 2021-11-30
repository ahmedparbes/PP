import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
const Blog = () => {
    return (
        <div className="all-all">
            <Header></Header>
            <div style={{ marginBottom: '300px' }} className="font ">
                <Container>
                    <h2 style={{ marginTop: '270px', color: 'white', textAlign: 'center' }}>Coming soon.....</h2>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;