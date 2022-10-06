
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
export const ContextApi = React.createContext()
const apiUrl = 'http://localhost:8000'
function App() {
  return <>
  <BrowserRouter>
  <ContextApi.Provider value={{apiUrl}}>

  <Routes>
    <Route path='/home' element={<PatientForm/>}/>
    <Route path='/patient-list' element={<PatientList/>}/>
    <Route path='*' element={<Navigate to='/home'/>}/>
  </Routes>
  </ContextApi.Provider>
  </BrowserRouter>
  </>
}

export default App;
