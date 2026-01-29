import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                       <h3>My Profile</h3>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><i className="bi bi-linkedin"></i> LinkedIn</a>
                            <a href="#"><i className="bi bi-github"></i> GitHub</a>
                        </div>
                        <p>Copyright 2026. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
