import React from 'react'
import "./style.css"
import {Row, Col} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom';
import { Card,Button } from 'react-bootstrap';

export default function Home() {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate('/appointment');
  }
  const navigateCommunity = () => {
    navigate('/community');
  }
  return (
  
     <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <div id="showcase">
            <div className="homecontainer">
              <div className="showcase-content">
                <div className="content-1">
                  <h2>MENTAL HEALTH </h2>
                  <ul>
                    <li className="inner">Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. </li>
                    <li className="inner">Mental and physical health are equally important components of overall health.  For example, depression increases the risk for many types of physical health problems, particularly long-lasting conditions like diabetes, heart disease, and stroke.</li>
                  </ul>
                  <br/>
                  <div className="btn inline-block btn-1" onClick={navigateAppointment}>
                    <p>Book Appointment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <main>
            <section id="our-beginning">
              <div className="section-wrap">
                <div className="homecontainer">
                  <div className="image">
                    <img src="https://st2.depositphotos.com/3591429/11212/i/950/depositphotos_112120698-stock-photo-ethnic-various-people.jpg" alt="" width="530px" height="594px" />
                  </div>
                  <div className="right-content">
                    <h1 className="heading-title">WELCOME TO OUR COMMUNITY</h1>
                    <h4 className="mb-1 mb-1">Here's how we got started…</h4>
                    <p className="justify mb-1 line-h ">For most of us, with uncertainty comes discomfort and fear. And when that uncertainty starts to impact how we carry out our day-to-day living, the toll on our mental health can be enormous. For those who are already living with mental illness, the dire predictions, alarm and very necessary social distancing required to help mitigate the spread of COVID-19 only exacerbates challenging symptoms and the sense of isolation. Many might be experiencing mental health challenges for the first time as a result of all that is unfolding before us.</p>
                    <div className="btn inline-block btn-1" onClick={navigateCommunity}>
                      <p>Join Community</p>
                  </div>
                  </div>
                </div>
              </div>
            </section>
         
            <section id="departments">
              <div className="section-wrap-1">
                <div className="homecontainer-2">
                  <h2 className="text-center m-heading">OUR PODCASTS</h2>
                  <br/>
                  <Row>
                    <Col><ReactPlayer width={300} height={250} url='https://youtu.be/84598ejcG_c' /></Col>
                    <Col><ReactPlayer width={300} height={250} url='https://youtu.be/lknkkCg8oEw' /></Col>
                    <Col><ReactPlayer width={300} height={250} url='https://youtu.be/kFQ7qiqm6WA' /></Col>
                  </Row>
                </div>
              </div>
            </section>

            <section id="departments">
              <div className="section-wrap-1 m-0 p-0">
                <div className="homecontainer-2">
                  <h2 className="text-center m-heading">OUR BLOGS</h2>
                  <br/>
                  <Row>
                  <Col><Card className="m-3" style={{ width: '100', height: '100' }}>
                      <Card.Img variant="top" width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2022-10/Frame%2041_1.png?itok=934WPfbk" />
                      <Card.Body>
                        <Card.Title>What We Need To Know About Trauma And Why It's Important</Card.Title>
                        <Button variant="primary">Read More</Button>
                      </Card.Body>
                      </Card>
                  </Col>
                  <Col> <Card className="m-3" style={{ width: '100', height: '100'  }}>
                      <Card.Img variant="top"width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2021-09/1%20-%20Blogpost%201.jpg?itok=wR-q78WP" />
                      <Card.Body>
                          <Card.Title>Somedays, I think of Suicide</Card.Title>
                          <Button variant="primary" className='mt-5'>Read More</Button>
                      </Card.Body>
                      </Card>
                   </Col>
                   <Col><Card className="m-3" style={{ width: '100', height: '100'  }}>
                        <Card.Img variant="top"width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2020-10/Webp.net-resizeimage-16.jpg?itok=mEkT59ia" />
                        <Card.Body>
                            <Card.Title>7 Ways to Support a Loved One: Joy's Story</Card.Title>
                            <Button variant="primary" className='mt-4'>Read More</Button>
                        </Card.Body>
                        </Card>
                     </Col>
                  </Row>
                </div>
              </div>
            </section>
            <section id="counter">
              <div className="section-wrap-2">
                <div className="homecontainer-2">
                  <div className="row">
                    <div className="column">
                      <div className="counter-block text-center">
          
                        <h2 className="counter-number">9,632</h2>
                        <h4 className="counter-text">Happy Patients</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                       
                        <h2 className="counter-number">178</h2>
                        <h4 className="counter-text">Qualified Doctors</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                      
                        <h2 className="counter-number">864</h2>
                        <h4 className="counter-text">Clinic Rooms</h4>
                      </div>
                    </div>
                    <div className="column">
                      <div className="counter-block text-center">
                      
                        <h2 className="counter-number">864</h2>
                        <h4 className="counter-text">Local Partners</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
            <section id="testimonial">
              <div className="section-wrap-2">
                <div className="homecontainer-2">
                  <h2 className="text-center m-heading py-1">WHAT OUR CLIENTS SAY</h2>
                 
                  <div className="testimonial-cards">
                    <div className="cards text-center">
                      <img src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/wided-sghaier.jpg.img.490.medium.jpg/1594912196352.jpg" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“The outcome has been just brilliant. It's changed everything and the information, skills and tools we have learnt has resulted in a significant difference in the way we approach things in our organisation.”</p>
                      <h3 className="name">Gillian Beasley</h3>
                      <h5 className="designation">Chief Exec, Cambridgeshire County Council</h5>
                    </div>
                    <div className="cards text-center">
                      <img src="https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/alex/alex-sierra_profile_1536x1152.jpg?mw=400&car=2:2" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“This workshop content was current, the facilitation approach was engaging and the impact of the day on our business was quite extraordinary.It gave us a really good understanding of mental health in general.”</p>
                      <h3 className="name">Trevor Maponder</h3>
                      <h5 className="designation">CEO, The Catalyst Care Group</h5>
                    </div>
                    <div className="cards text-center">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNJl90PHXfFAKhnxyqN947HBh-n3Jq7AkmA&usqp=CAU" alt="" width="70px" height="70px" />
                      <p className="testimonoal-content">“Since the training, we've implemented a new approach to mental health and wellbeing in the organisation and are already seeing improvements in motivation and productivity in the team.”</p>
                      <h3 className="name">Maxine Palmer</h3>
                      <h5 className="designation">Chief Exec, Green Energy Switch</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
          </main>
        </div>
   
  )
}