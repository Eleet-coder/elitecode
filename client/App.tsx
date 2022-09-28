import React from "react";
import 'bootstrap';
import './App.css'
import Nav from "./components/Nav";
import Problems from "./components/Problems";
import {
    
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Code from "./components/Code";

const App = () => {
return (
    <div className="bg"  >
        
        <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/code" element={<Code />} />
        </Routes>

    </div>
)
}

export default App;