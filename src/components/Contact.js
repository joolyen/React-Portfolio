import React from "react";
import "../styles/Portfolio.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

function Contact() {
    return (
        <Container>
            <Row className="col-md-8">
                    <h1>Contact Julian</h1>
            </Row>

            <Row className="form-group col-md-8 mb-3">
                <Col>
                    <label className="float-right" for="usr">Full Name:</label>
                </Col>
                <Col>
                    <input type="text" className="form-control" id="usr" placeholder="Enter Full Name" name="email" />
                </Col>
            </Row>

            <Row className="form-group col-md-8 mb-3">
                <Col>
                    <label className="float-right" for="email">Email:</label>
                </Col>
                <Col>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </Col>
            </Row>

            <Row className="form-group col-md-8 mb-3">
                <Col>
                    <label className="float-right" for="comment">Comment:</label>
                </Col>
                <Col>
                    <textarea className="form-control" rows="5" id="comment"></textarea>
                </Col>
            </Row>

                <button type="submit" className="btn btn-primary text-center">Submit</button>

        </Container>
    );
}

export default Contact;