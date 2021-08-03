import React from 'react'
import {
  Route, Switch

} from "react-router-dom";

import Services from './pages/services';
import Footer from './pages/footer';
import Navbar from './components/navbar';
import Home from './pages/home';



function App() {

  return (
    <div >
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/Services' component={Services}></Route>
      </Switch>
      <Footer/>
    </div>

  )



}

export default App;

