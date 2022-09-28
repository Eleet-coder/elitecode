import React, { useState } from "react";
import Editor from "./Editor";
import "./Code.css";
import { Link } from "react-router-dom";
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
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <Link
            to="/problems"
            style={{ color: "white", textDecoration: "none" }}
          >
            <button className="btn " id="backBtn">
              Back
            </button>
          </Link>
        </div>
        <div className="profile text-light text-center">
          <p className="profile-text ">Michael</p>
        </div>
      </nav>
      <div className="d-flex ">
        <div
          className="promptBox me-5  p-2"
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
          className="promptBox me-5  p-2"
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
          className="btn btn-danger btn-lg"
          onClick={() => {
            surrender();
          }}
        >
          I Want To Surrender
        </button>
        <div className="d-flex saveexportBox">
          <button className="btn btn-primary btn-lg me-3">save</button>
          <button className="btn btn-success btn-lg">export</button>
        </div>
      </div>
    </div>
  );
};

export default Code;
