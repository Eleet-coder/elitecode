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
import Signup from "./components/Signup";

const App = () => {
return (
    <div className="bg"  >
        
        <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/login" element={<Signup />} />
        </Routes>

    </div>
)
}

export default App;