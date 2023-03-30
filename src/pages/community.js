import React from 'react'
import {useForm} from 'react-hook-form'
import {Container, Row, Col} from 'react-bootstrap'

function Community() {
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
             <h1 className = 'text-center mb-4 text-color:blue'>JOIN OUR COMMUNITY</h1>
            <Row>
                <Col>
                    <img className="img-responsive d-block p-3 w-100" src = "https://static.tildacdn.com/tild3938-3035-4366-a262-636536306663/community.png"/>
                </Col>
                <Col>
                {/* <h1 className = 'text-center'>Doctor Form</h1> */}
                    {/* <div className = 'col-11 col-sm-8 col-md-6 mx-auto mt-3'> */}
                        <form onSubmit = {handleSubmit(onFormSubmit)}>
                            <div className = 'mb-3'>
                                <label htmlFor = 'username' style={styles.bold}>Name</label>
                                <input type = 'text' id = 'username' className = 'form-control w-100' autoComplete = 'off' {... register('username', {required : true, minLength: 4, maxLength: 30})}/>
                                {errors.username?.type === 'required' && <p className = 'text-danger mt-2'>*Name is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'place' style={styles.bold}>Place</label>
                                <input type = 'text' id = 'place' className = 'form-control w-100' autoComplete = 'off' {... register('place', {required : true})}/>
                                {errors.place?.type === 'required' && <p className = 'text-danger mt-2'>*Place is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'email' style={styles.bold}>Email</label>
                                <input type = 'email' id = 'email' className = 'form-control w-100' autoComplete = 'off' {... register('email', {required : true})}/>
                                {errors.email?.type === 'required' && <p className = 'text-danger mt-2'>*Email is required</p>}
                            </div>
                            <div className = 'mb-3'>
                                <label htmlFor = 'phone' style={styles.bold}>Phone</label>
                                <input type = 'number' id = 'phone' className = 'form-control w-100' autoComplete = 'off' {... register('phone', {required : true})}/>
                                {errors.phone?.type === 'required' && <p className = 'text-danger mt-2'>*Phone number is required</p>}
                            </div>
                            <h6>If you want to be a counsellor then upload the certification file below:</h6>
                            <div className = 'mb-3'>
                                <label htmlFor = 'file' style={styles.bold}>Certificate</label>
                                <input type = 'file' id = 'file' className = 'form-control w-100' autoComplete = 'off' {... register('file', {required : false})}/>
                            </div>
                            <button type = 'RequestVolunteer' className = 'mb-5 btn btn-success w-30 m-3'>Volunteer Request</button>
                            <button type = 'RequestCounsellor' className = 'mb-5 btn btn-success w-30 m-3'>Counsellor Request</button>
                        </form>
                    {/* </div> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Community