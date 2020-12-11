import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Index.css';
import { ListGroup } from 'react-bootstrap';

function Index() {
    return (
        <Container>
            <Row>
                <Col>
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-6 m-auto">
                        <p className="homePage">Welcome to my portofolio site that's build with ReactJS. If you want to see the cool stuff, check out the links below or navigate to another page.</p>
                        <ListGroup>
                            <ListGroup.Item action href="https://github.com/joolyen/">
                            GitHub
                            </ListGroup.Item>
                            <ListGroup.Item action href="https://docs.google.com/document/d/1MJaN92tZMVPVLXZaddOZ8zraUWN0hePiqg4eYCXo4FA/edit?usp=sharing">
                            Resume
                            </ListGroup.Item>
                            <ListGroup.Item action href="https://www.linkedin.com/in/julianivey/">
                            LinkedIn
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="col-md-3"></Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Index;