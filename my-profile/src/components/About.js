import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>
                            I am a passionate frontend developer with a keen eye for design and a drive for creating seamless digital experiences. With a background in computer science and a love for art, I bridge the gap between technical functionality and aesthetic appeal.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, gaming, or traveling.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
