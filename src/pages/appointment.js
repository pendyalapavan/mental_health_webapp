import React from 'react'
import {useForm} from 'react-hook-form'
import {Container, Row, Col} from 'react-bootstrap'

function Appointment() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const onFormSubmit = (userData) => {
        console.log(userData)
    }
    const styles = {
        bold:{
            fontWeight : 'bold'
        }
    }
    return(

        <Container className = 'mt-3'>
             <h1 className = 'text-center mb-4'>BOOK AN APPOINTMENT</h1>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-3 w-100" src = "https://demigos.com/media/cache/61/e8/61e8be99d482c40c4f294b577a7d2e92.jpg"/>
                </Col>
                <Col>
                {/* <h1 className = 'text-center'>Doctor Form</h1> */}
                    {/* <div className = 'col-11 col-sm-8 col-md-6 mx-auto mt-3'> */}
                        <form onSubmit = {handleSubmit(onFormSubmit)}>
                            <div className = 'mb-3'>
                                <label htmlFor = 'username' style={styles.bold}>Name</label>
                                <input type = 'text' id = 'username' className = 'form-control w-100' autoComplete = 'off' {... register('username', {required : true})}/>
                                {errors.username?.type === 'required' && <p className = 'text-danger mt-2'>*Name is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'gender' style={styles.bold}>Gender</label>
                                <div>
                                    <input type="radio" name="gender" id="male"/>
                                    <label for="male" className='p-2'>Male</label>
                                </div>
                                <div>
                                    <input type="radio" name="gender" id="female"/>
                                    <label for="female" className='p-2'>Female</label>
                                </div>
                                <div>
                                        <input type="radio" name="gender" id="other"/>
                                        <label for="other" className='p-2'>Other</label>
                                </div>
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'age' style={styles.bold}>Age</label>
                                <input type = 'number' id = 'gender' className = 'form-control w-100' autoComplete = 'off' {... register('age', {required : true})}/>
                                {errors.age?.type === 'required' && <p className = 'text-danger mt-2'>*Age is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'phone' style={styles.bold}>Phone</label>
                                <input type = 'number' id = 'phone' className = 'form-control w-100' autoComplete = 'off' {... register('phone', {required : true})}/>
                                {errors.phone?.type === 'required' && <p className = 'text-danger mt-2'>*Phone number is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'username' style={styles.bold}>Place</label>
                                <input type = 'text' id = 'place' className = 'form-control w-100' autoComplete = 'off' {... register('place', {required : true})}/>
                                {errors.place?.type === 'required' && <p className = 'text-danger mt-2'>*Place is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label style = {styles.bold}>Select Your Problem</label>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'hi' className = 'form-check-input' {... register('health problems')} value = 'HTML'/>
                                    <label htmlFor = 'hi' className = 'form-check-label'>Health issues</label>
                                </div>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'sa' className = 'form-check-input' {... register('health problems')} value = 'CSS'/>
                                    <label htmlFor = 'sa' className = 'form-check-label'>Social Anxiety</label>
                                </div>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'pd' className = 'form-check-input' {... register('health problems')} value = 'Bootstrap'/>
                                    <label htmlFor = 'pd' className = 'form-check-label'>Panic Disorder</label>
                                </div>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'smc' className = 'form-check-input' {... register('health problems')} value = 'Javascript'/>
                                    <label htmlFor = 'smc' className = 'form-check-label'>Sudden Mood Changes</label>
                                </div>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'pms' className = 'form-check-input' {... register('health problems')} value = 'React'/>
                                    <label htmlFor = 'pms' className = 'form-check-label'>Pre Menstrual Syndrome</label>
                                </div>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'idd' className = 'form-check-input' {... register('health problems')} value = 'React'/>
                                    <label htmlFor = 'idd' className = 'form-check-label'>Intellectual Development Disorder</label>
                                </div>
                                <div className = 'form-check'>
                                    <input type = 'checkbox' id = 'Apf' className = 'form-check-input' {... register('health problems')} value = 'React'/>
                                    <label htmlFor = 'Apf' className = 'form-check-label'>Academic Performance Pressue</label>
                                </div>
                                
                            </div>
                            <button type = 'Request' className = 'mb-5 btn btn-success w-100'>Send Request</button>
                        </form>
                    {/* </div> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Appointment