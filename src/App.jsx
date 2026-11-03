import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Distance from './pages/Distance.jsx'
import Speed from './pages/Speed.jsx'
import Time from './pages/Time.jsx'
import Dashboard from './pages/Dashboard.jsx'
function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Distance' element={<Distance/>}/>
      <Route path='/Speed' element={<Distance/>}/>
      <Route path='/Time' element={<Distance/>}/>
    </Routes>
    <Distance/>
    <Speed/>
    <Time/>
    <Dashboard/>
    <Footer/>
    </>
  )
}

export default App
