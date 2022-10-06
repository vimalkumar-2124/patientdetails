import axios from 'axios';
import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../App';

function PatientForm() {
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [mobile, setMobile] = useState("")
    let [treatment, setTreatment] = useState("")
    let contextApi = useContext(ContextApi)
    let navigate = useNavigate()
    let handleSubmit =  async() => {
        let res = await axios.post(`${contextApi.apiUrl}/patients`,{
            name,
            age,
            mobile,
            treatment
        })
        if(res.data.statusCode===200){
            alert(`${res.data.message}`)
        }
    }

   
  return <>
  <div className='container'>

  <div className='wrapper-title mt-3'>
    <h1><strong>Fill patient details</strong></h1>
  </div>
  <div className='wrapper-main mt-3'>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><strong>Name</strong><sup style={{'color':'red'}}>*</sup></Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Age</strong><sup style={{'color':'red'}}>*</sup></Form.Label>
        <Form.Control type="email" placeholder="Enter age" onChange={(e) => setAge(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Mobile</strong><sup style={{'color':'red'}}>*</sup></Form.Label>
        <Form.Control type="text" placeholder="Enter mobile number" onChange={(e) => setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Treatment</strong><sup style={{'color':'red'}}>*</sup></Form.Label>
        <Form.Control type="text" placeholder="Enter treatment" onChange={(e) => setTreatment(e.target.value)}/>
      </Form.Group>
    </Form>
    </div>
    <div className='mt-3' style={{'textAlign':'center'}}>

        <Button variant="primary" onClick={() => handleSubmit()}>
          Submit
        </Button>
        &nbsp;
        <Button variant="secondary" onClick={() => navigate('/patient-list')}>
          Show list
        </Button>
      </div>
      
  </div>
  </>
}

export default PatientForm