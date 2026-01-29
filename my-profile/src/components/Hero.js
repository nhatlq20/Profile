import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm a Web Developer`}</h1>
                        <p>I design and build user interfaces that are intuitive and visually appealing. Let's create something amazing together.</p>
                        <button onClick={() => console.log('connect')}>Let’s Connect <i className="bi bi-arrow-right-circle"></i></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                         <div className="header-img-placeholder">
                            {/* Placeholder for an image or animation */}
                            <img src="https://placehold.co/400x400?text=Profile+Pic" alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
