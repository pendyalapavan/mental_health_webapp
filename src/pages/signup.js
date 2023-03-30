import React,{useState , useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import {Container, Row, Col, Button} from 'react-bootstrap'

import { useDispatch } from 'react-redux';

import { createUser } from '../actions/user'
import { useSelector } from 'react-redux';

function SignUp() {
    const [userData, setUserData] = useState({ username: '',email: '', password: ''});
   // const user = useSelector((state) => currentId ? state.users.find((s) => s._id === currentId) : null);
   // const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        const user = JSON.stringify(userData);
       // dispatch(createUser(userData));
      
        fetch("https://saday.herokuapp.com/register/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: user
          }).then(async (response) => {
            if (response.status === 401) {
              response.json().then((response) => {
                alert(response.message)
                window.location.href = "/login"
              });
            }
            else if (response.status === 404) {
              response.json().then((response) => {
                alert("Please enter your details properly.")
                window.location.href = "/login"
              });
            }
            else if (response.status === 200) {
              response.json().then((response) => {
                localStorage.onlinejudge_info = JSON.stringify({
                  username: response.username,
                  email: response.email,
                  password: response.password
                })
      
                window.location.href = "/"
              });
            }
          }).catch((error) => { console.log(error) });
        }
    return (
        <Container>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-4" src="https://rukminim1.flixcart.com/image/416/416/kvcpn680/poster/q/r/5/small-yellow-grey-aesthetic-for-wall-collage-50-5pcs-104-original-imag89hxgkcgzdvy.jpeg?q=70" alt="..."/>
                </Col>
                <Col>
                    <h1 alignItems='center'>Sign Up</h1>
                    <Form className="p-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value})}/>
                        </Form.Group>
                    </Form>
                    <Button variant="primary" className='m-3'onClick={handleSubmit}>SignUp</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default SignUp;