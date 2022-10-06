import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { ContextApi } from '../App'
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
function PatientList() {
    let [data, setData] = useState([])
    let contextApi = useContext(ContextApi)


    const loadPatientList = async() => {
        let res = await axios.get(`${contextApi.apiUrl}/patients`)
        if(res.data.statusCode===200){
            setData(res.data.patient)
        }
    }
    useEffect(() => {
        loadPatientList()
    }, [])

  return <>
  <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home" style={{"textAlign":"center"}}>Home</Navbar.Brand>
      </Navbar>
      <br />
      
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Treatment</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e,i) => {
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.mobile}</td>
                    <td>{e.treatment}</td>
                    <td>{new Date(e.createdAt).toLocaleString()}</td>
                </tr>
            })
        }
      </tbody>
    </Table>
  </>
}

export default PatientList