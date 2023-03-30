import React from 'react'
import {Row, Col,Container} from 'react-bootstrap'
import ReactPlayer from 'react-player'

export default function podcasts() {
  return (
    <Container>
      <h1 className='text-center mt-4'>OUR PODCASTS</h1>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/84598ejcG_c' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/lknkkCg8oEw' /></Col>
      </Row>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/kFQ7qiqm6WA' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/3nTZq40RsXo' /></Col>
      </Row>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/xSw_VfcLJWc' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/ZCycoUCopno' /></Col>
      </Row>
      <br/>
      <Row>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/mTtucss80tc' /></Col>
        <Col><ReactPlayer width={500} height={350} url='https://youtu.be/kI3Fc8Bobog' /></Col>
      </Row>
      <br/>
      <br/>
    </Container>
    )
}