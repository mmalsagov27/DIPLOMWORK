import React from "react" 
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Home from "./pages/Home" 
import Fswrestling from "./pages/Fswrestling"
import Boxing from "./pages/Boxing" 
import Judo from "./pages/Judo" 
import "bootstrap/dist/css/bootstrap.min.css" 
import BootstrapNavbar from "./component/BootstrapNavbar" 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <BootstrapNavbar/> 
      <Routes> 
        <Route path = "/" element={<Home/>}/> 
        <Route path = "/Fswrestling" element={<Fswrestling/>}/> 
        <Route path = "/Boxing" element={<Boxing/>}/> 
        <Route path = "/Judo" element={<Judo/>}/> 
      </Routes> 
     
    </BrowserRouter> 
  ); 
} 
 
export default App;