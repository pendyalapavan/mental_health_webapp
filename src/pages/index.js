/*import React, { useState } from 'react';
import ControlledCarousel from '../components/ControlledCarousal';
import { Card } from "react-bootstrap";
import {Container, Row, Col,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player'

const Home = () => {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate('/appointment');
  }
  const navigateCommunity = () => {
    navigate('/community');
  }
  return (    
    <div>
      <ControlledCarousel/>
      <br/>
      <br/>
      <Container>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-3" src="https://img.freepik.com/free-photo/close-up-doctor-filling-medical-form-with-patient_23-2148050550.jpg" alt=""/>
                </Col>
                <Col className="m-2 p-3">
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>Book an Appointment</Card.Title>
                                <Card.Text >
                                Here is great opportunity to book an appointment with one of our specialized doctors
                                </Card.Text>
                                <Button variant="primary" onClick={navigateAppointment}>Book Appointment</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col className="m-2 p-3">
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>Join our Community</Card.Title>
                                <Card.Text >
                                Here is great opportunity to join our community...
                                </Card.Text>
                                <Button variant="primary" onClick={navigateCommunity}>Join Community</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <img className="img-responsive d-block p-3" src="https://s35691.pcdn.co/wp-content/uploads/2018/11/community.jpg" alt=""/>
                </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
            <Container>
              <h3>Our Podcasts</h3>
              <br/>
              <Row>
                <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
                <Col><ReactPlayer width={500} height={350} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /></Col>
              </Row>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
        </Container>
      
    </div>
  );
};




export default Home;*/
