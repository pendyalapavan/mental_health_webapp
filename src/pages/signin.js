import React,{useState , useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import {Container, Row, Col,Button} from 'react-bootstrap'

function SignIn() {
  const [userData, setUserData] = useState({ username: '',email: '', password: ''});
  // const user = useSelector((state) => currentId ? state.users.find((s) => s._id === currentId) : null);
  // const dispatch = useDispatch();

   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(userData);
       const user = JSON.stringify(userData);
      // dispatch(createUser(userData));
     
       fetch("https://saday.herokuapp.com/login/", {
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
               const token = JSON.stringify(response.token)
               localStorage.setItem('token', token);
     
               window.location.href = "/"
             });
           }
         }).catch((error) => { console.log(error) });
       }
  

    return (
        <Container>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-3" src="https://rukminim1.flixcart.com/image/416/416/kvcpn680/poster/q/r/5/small-yellow-grey-aesthetic-for-wall-collage-50-5pcs-104-original-imag89hxgkcgzdvy.jpeg?q=70" alt="..."/>
                </Col>
                <Col>
                    <h1 alignItems='center'>Sign In</h1>
                    <Form className="p-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"  value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="********" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value})}/>
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit}>SignIn</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;