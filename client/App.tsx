import React from "react";
import "bootstrap";
import "./App.css";
import Nav from "./components/Nav";
import Problems from "./components/Problems";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Code from "./components/Code";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="bg">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/code" element={<Code />} />
        <Route
          path="*"
          element={<h1 className="text-light">Error 404, not found</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;
