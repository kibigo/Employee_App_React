import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emplisting from './Components/Emplisting';
import Create from './Components/Create';
import Details from './Components/Details';
import Edit from './Components/Edit';
import Navbar from './Components/Navbar'


function App() {


  return(
    <div className='App'>
      <Navbar />
      
      <h1>React CRUD operations</h1>
      

      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Emplisting/>}/>
          <Route path='/employee/create' element={<Create />}/>
          <Route path='/employee/detail/:id' element={<Details />}/>
          <Route path='/employee/edit/:id' element={<Edit />}/>

        </Routes>


      </BrowserRouter>

    </div>
  )
};



export default App