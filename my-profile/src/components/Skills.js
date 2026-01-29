import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Skills = () => {
    const skills = [
        { name: "React", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "CSS/SASS", percentage: 95 },
        { name: "Node.js", percentage: 70 },
        { name: "UI/UX Design", percentage: 80 }
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>Techniques and technologies I use to bring ideas to life.</p>
                    <Row>
                        {skills.map((skill, index) => (
                            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                                <div className="item">
                                    <h5>{skill.name}</h5>
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-fill" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
