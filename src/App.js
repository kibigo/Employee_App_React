import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emplisting from './Components/Emplisting';


function App() {


  return(
    <div className='App'>
      <h1>React CRUD operations</h1>

      <BrowserRouter>

        <Routes>
          
          <Route path='/' element={<Emplisting/>}/>

        </Routes>


      </BrowserRouter>

    </div>
  )
};



export default App