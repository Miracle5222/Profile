import React from 'react'
import {
  Route, Switch

} from "react-router-dom";

import HomePage from './components/home';
import Navbar from './components/navbar';




function App() {

  return (
    <div >
      <Navbar />
      <HomePage/>
     
    </div>

  )



}

export default App;

