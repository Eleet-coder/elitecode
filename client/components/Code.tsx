import React, { useState } from "react";
import Editor from "./Editor";
import "./Code.css";
import { Link } from "react-router-dom";
// const fs =require('fs')
import * as fs from 'fs';
import * as path from 'path';
// const axios = require('axios');
import  axios from "axios";
import Modalbtnsave from './modalbtnsave'
import Modalbtnexport from './modalbtnexport'
const Code = () => {
  
  const [js, setJs] = useState("");
  const [surren, setSurrender] = useState(false);
  const solution = {
    twosum: `
        var twoSum = function(nums, target) {
        const map = new Map();
        map.set(nums[0],0);
        for(let i = 1;i < nums.length;i++){
          if(map.has(target - nums[i])) {return [map.get(target-nums[i]),i];}
          else{map.set(nums[i],i)};
          }
        return false;
    };`,
  };
  function surrender() {
    setSurrender(true);
  }

  

  return (
    <div className="p-5">
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <Link
            to="/problems"
            style={{ color: "white", textDecoration: "none" }}
          >
            <button className="btn ms-5" id="backBtn">
              Back
            </button>
          </Link>
        </div>
        {/* <div className="profile text-light text-center">
          <p className="profile-text "></p>
        </div> */}
      </nav>
      <div className="d-flex ">
        <div
          className="promptBox me-5  p-2 ms-5"
          style={{
            display: surren ? "none" : "block",
          }}
        >
          <h1>Prompt</h1>
          <p>
            Given an array of numbers and a target number, return true if two of
            the numbers in the array add up to the target. Otherwise, return
            false. You may assume that each input would have exactly one
            solution, and you may not use the same element twice. The
            straightforward way to solve this problem would take O(n²)time. Is
            it possible to do this in O(n) time?
          </p>
          <span className="mt-5">
            Example: const nums = [2, 5, 11, 15] twoSum(num, 7) - true Rational:
            nums[0] + nums[1] = 2 + 5 = 7, twoSum(nums, 9) - false Rational: No
            elements inside the array sum up to the target number
          </span>
        </div>
        <div
          className="promptBox me-5  p-2 ms-5"
          style={{
            display: surren ? "block" : "none",
          }}
        >
          <h1>Solution</h1>
          <p>{solution.twosum}</p>
        </div>
        
        <Editor
          language="javascript"
          displayName="Javascript"
          value={js}
          onChange={setJs}
        />
        
      </div>
      <div className="d-flex mt-5">
        <button
          className="btn btn-danger btn-lg ms-5"
          onClick={() => {
            surrender();
          }}
        >
          I Want To Surrender
        </button>
        <div className="d-flex saveexportBox">
          <Modalbtnsave solution={js}/>
          <Modalbtnexport solution={js}/>    
        </div>
      </div>
    </div>
  );
};

export default Code;
