import React from "react";
import "../styles/About.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import julian from '../img/julian.png';
import { Row, Col, Container } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <Row className="col-md-8">
                <h1>About Julian</h1>
            </Row>
            <Row>
                <Col className="col-md-3">
                    <img className="image" src={julian} alt="Our Movie Lookup" roundedCircle />
                </Col>
                <Col className="col-md-9">
                    <dl>
                        <dt>
                            Favorite movies: 
                        </dt>
                        <dd>
                            The Last Dragon, Rocky IV, Coming to America, V for Vendetta and Transformers the Movie (animated, 1985) 
                        </dd>
                            
                        <dt>
                            What are your hobbies? 
                        </dt>
                        <dd>
                            Listening to Music, Playing Madden, Cooking, Social Media Interaction, Finding “junk” and repurposing it, Reading about and playing with technology, Web development stuff, digital marketing stuff 
                        </dd> 

                        <dt>
                            Favorite food or snacks:   
                        </dt>
                        <dd>
                            Hot Tamales, Burrito from Chipotle or Qdoba, Italian Hoagie, Soft Pretzels, Cheesesteak, Tea
                        </dd> 

                        <dt>
                            What was your best day? 
                        </dt>
                        <dd>
                            "Everyday is a gift" ~ Tony Soprano
                        </dd>     
                    </dl>
                </Col>
            </Row>
        </Container>
    );
}

export default About;