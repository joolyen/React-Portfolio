import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Portfolio.css";
import informedTrades from "../img/informed-trades.png";
import movieLookup from "../img/movie-lookup.png";
import noteTaker from "../img/note-taker.png";
import weatherDashboard from "../img/weather-dashboard.png";
import scheduler from "../img/work-day-scheduler.png";
import { Row, Col, Container, Card } from 'react-bootstrap';
import Submit from './Sumbit';

function Portfolio() {
    return (
        <Container>
            <Row className="col-md-8">
                <h1>Portfolio</h1>
            </Row>
            <Card>
                <Card.Header as="h2">Informed Trades</Card.Header>
                <Row>
                    <Col>
                        <div className="portfolio">
                            <img className="image" src={informedTrades} alt="Informed Trades" />
                        </div>
                        <Card.Text>Informed Trades empower users by combining basic stock info with contemporary news stories.</Card.Text>
                        <div>
                            <Submit href="https://github.com/joolyen/Informed_Trades" message="GitHub"></Submit>
                            <Submit href="https://joolyen.github.io/Informed_Trades/" message="Production"></Submit>
                        </div>

                    </Col>
                </Row>
            </Card>
            <Card>
                <Card.Header as="h2">Our Movie Lookup</Card.Header>
                <Row>
                    <Col>
                        <div className="portfolio">
                            <img className="image" src={movieLookup} alt="Our Movie Lookup" />
                        </div>
                        <p>An interactive platform to help users search for movies based on a specifc search criteria. When the user enters the search criteria in the search bar, they are presented with the movie, where to find it, and whether it is free, requires membership, or is available to purchase or rent.</p>
                        <div>
                            <Submit href="https://github.com/joolyen/Project2/" message="GitHub"></Submit>
                            <Submit href="https://our-movie-lookup.herokuapp.com/" message="Production"></Submit>
                        </div>

                    </Col>
                </Row>
            </Card>
            <Card>
                <Card.Header as="h2">Note Taker</Card.Header>
                <Row>
                    <Col>
                        <div className="portfolio">
                            <img className="image" src={noteTaker} alt="Note Taker" />
                        </div>
                        <p>An application that can be used to write, save, and delete notes. This application uses an express backend and save and retrieve note data from a JSON file.</p>
                        <div>
                            <Submit href="https://github.com/joolyen/Note-Taker" message="GitHub"></Submit>
                            <Submit href="https://taker-notes.herokuapp.com/" message="Production"></Submit>
                        </div>

                    </Col>
                </Row>
            </Card>
            <Card>
                <Card.Header as="h2">Weather Dashboard</Card.Header>
                <Row>
                    <Col>
                        <div className="portfolio">
                            <img className="image" src={weatherDashboard} alt="Weather Dashboard" />
                        </div>
                        <p>A weather dashboard that is used to show weather outlook for multiple cities at once along with the five day forecast.</p>
                        <div>
                            <Submit href="https://github.com/joolyen/Weather-Dashboard" message="GitHub"></Submit>
                            <Submit href="https://joolyen.github.io/Weather-Dashboard/" message="Production"></Submit>
                        </div>

                    </Col>
                </Row>
            </Card>
            <Card>
                <Card.Header as="h2">Work Day Scheduler</Card.Header>
                <Row>
                    <Col>
                        <div className="portfolio">
                            <img className="image" src={scheduler} alt="Work Day Scheduler" />
                        </div>
                        <p>This is a simple work day planner created for users to save their daily agenda.</p>
                        <div>
                            <Submit href="https://github.com/joolyen/Work-Day-Scheduler" message="GitHub"></Submit>
                            <Submit href="https://joolyen.github.io/Work-Day-Scheduler/" message="Production"></Submit>
                        </div>

                    </Col>
                </Row>
            </Card>
        </Container >
    );
}

export default Portfolio;