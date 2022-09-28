import React,{useState} from "react";
import Editor from "./Editor";
import './Code.css'

const Code = () => {
    const [js,setJs] = useState('');
  return (
    <div >
          <nav className="navbar navbar-expand-lg  navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand  " href="#">Back</a>
      
    </div>
       <div className='profile'>
        
       </div>
  </nav>
    <div className='d-flex mt-5 '>
      <div className='promptBox me-5  p-5'>
        <p >
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 
 
  </p>
  <span className='mt-5'>
  Example:
  const nums = [2, 5, 11, 15]
  twoSum(num, 7) - true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) - false
  Rational: No elements inside the array sum up to the target number
  </span>
</div>

      <Editor
        language="javascript"
        displayName="Javascript"
        value={js}
        onChange={setJs}
      />
    </div>
    </div>
  );
};

export default Code;
