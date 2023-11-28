import React, { useEffect, useState } from "react"
import {HashRouter, Routes,Route} from 'react-router-dom'
import Home from './page/Home'
import Buy from './page/Buy'
import Testimonials from './page/Testimonials'
import Practice from './Components/practice/Practice'
import './App.css'


function App() {
  return (
    <div className="App">
     <HashRouter>
<Routes>
    
    <Route exact path="/" element={<Home/>}/>
    <Route path="/Testimonials" element={<Testimonials/>}/>
    <Route path="/Buy" element={<Buy/>}/>

</Routes>
</HashRouter>
    </div>
  );
}

export default App;
