import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';

const Projects = () => {
    const projects = [
        {
            title: "Project One",
            description: "Design & Development",
            imgUrl: "https://placehold.co/300x200?text=Project+1",
            link: "#"
        },
        {
            title: "Project Two",
            description: "Design & Development",
            imgUrl: "https://placehold.co/300x200?text=Project+2",
            link: "#"
        },
        {
            title: "Project Three",
            description: "Design & Development",
            imgUrl: "https://placehold.co/300x200?text=Project+3",
            link: "#"
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>A selection of my recent work.</p>
                        <Row>
                            {projects.map((project, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <Card className="project-card mb-4 bg-dark text-white">
                                        <Card.Img variant="top" src={project.imgUrl} />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>
                                                {project.description}
                                            </Card.Text>
                                            <Button variant="primary" href={project.link}>View</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
