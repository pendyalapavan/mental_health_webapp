import React, { useState, useEffect } from 'react';
import { Container, Row, Col ,Card, Button, CardImg,CardBody, CardTitle} from 'react-bootstrap';


const Blogs = () => {
    function RedirectButton({ url }) {
        const handleClick = (event) => {
          event.preventDefault();
          window.location.href = url;
        };
      
        return (
          <Button className='mb-2' onClick={handleClick}>View Blog</Button>
        );
      }
 /* const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('/api/blogs');
      setBlogs(res.data);
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center m-5">Blogs</h1>
        </Col>
      </Row>
      <Row>
        {loading ? (
          <Col xs={12} className="text-center">
            <Spinner animation="border" variant="primary" />
          </Col>
        ) : (
          blogs.map((blog) => (
            <Col key={blog._id} xs={12} sm={6} md={4}>
              <Card className="mb-3">
                <Card.Img variant="top" src={blog.imageUrl} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );*/
  return (
    <Container>
      <h1 className='text-center mt-4'>OUR BLOGS</h1>
      <br/>
      <Row>
        <Col><Card className="m-3" style={{ width: '30rem', height: '24rem' }}>
            <Card.Img variant="top" width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2022-10/Frame%2041_1.png?itok=934WPfbk" />
            <Card.Body>
                <Card.Title>What We Need To Know About Trauma And Why It's Important</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/what-we-need-to-know-about-trauma-and-why-it-is-important?type=blog&all=true" />
            </Card.Body>
    </Card>
        </Col>
        <Col> <Card className="m-3" style={{ width: '30rem' , height: '24rem' }}>
            <Card.Img variant="top"width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2021-09/1%20-%20Blogpost%201.jpg?itok=wR-q78WP" />
            <Card.Body>
                <Card.Title>Somedays, I think of Suicide: Story by Ouyang Songwen</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/somedays-i-think-suicide?type=blog&all=true"/>
            </Card.Body>
    </Card>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col><Card className="m-3" style={{ width: '30rem', height: '25rem'}}>
            <Card.Img variant="top"width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2020-10/Webp.net-resizeimage-16.jpg?itok=mEkT59ia" />
            <Card.Body>
                <Card.Title>7 Ways to Support a Loved One: Joy's Story</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/7-ways-support-loved-one-joys-story?type=blog&all=true"/>
            </Card.Body>
    </Card>
        </Col>
        <Col><Card className="m-3" style={{ width: '30rem', height: '25rem'  }}>
            <Card.Img variant="top"width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/medium_730x400/public/story-images/2022-10/Thrive%20well%20Ellisha%20blog.png?itok=4LyCx1JL" />
            <Card.Body>
                <Card.Title>What Exactly Does Being “Trauma-Informed” Mean?</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/what-exactly-does-being-trauma-informed-mean?type=blog&all=true"/>
            </Card.Body>
    </Card>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col><Card className="m-3" style={{ width: '30rem', height: '25rem'  }}>
            <Card.Img variant="top" width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2020-10/Natalie-photo-final.jpg?itok=e66dt9Vi" />
            <Card.Body>
                <Card.Title>Life Goes On</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/life-goes?type=blog&all=true"/>
            </Card.Body>
            </Card>
        </Col>
        <Col><Card className="m-3" style={{ width: '30rem', height: '25rem'  }}>
            <Card.Img variant="top"width = '100' height='200'  src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2020-09/IMAGE-experience%20%281%29.jpg?itok=jDYrWGUZ" />
            <Card.Body>
                <Card.Title>When Illness is a Stepping Stone Towards Positive Experiences</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/when-illness-is-a-stepping-stone-towards-positive-experiences?type=blog&all=true"/>
            </Card.Body>
            </Card>
        </Col>
      </Row>
      <br/>
      <Row>
      <Col><Card className="m-3" style={{ width: '30rem', height: '25rem'  }}>
            <Card.Img variant="top"width = '100' height='200'  src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2020-10/rini-feature.jpg?itok=yUewx70g" />
            <Card.Body>
                <Card.Title>A Mother Builds a Support Community for Her Son and Herself</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/mother-builds-support-community-her-son-and-herself?type=blog&all=true"/>
            </Card.Body>
            </Card>
        </Col>
        <Col><Card className="m-3" style={{ width: '30rem', height: '25rem'  }}>
            <Card.Img variant="top" width = '100' height='200' src="https://www.ourbetterworld.org/sites/default/files/styles/banner_932x400/public/story-images/2021-09/2%20-%20Blogpost%202_0.jpg?itok=cnXtX0an" />
            <Card.Body>
                <Card.Title>What It's Like To Volunteer For a Suicide Hotline</Card.Title>
                <RedirectButton url="https://www.ourbetterworld.org/series/mental-health/blog/what-its-volunteer-suicide-hotline?type=blog&all=true"/>
            </Card.Body>
            </Card>
        </Col>
      </Row>
      <br/>
      <br/>
    </Container>
    )
};

export default Blogs;
