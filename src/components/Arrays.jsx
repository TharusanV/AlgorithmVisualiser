import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";

const Arrays = () => {
  return (
      <>
        <div>
          <h1>Arrays</h1>
          <p>An Array is a collection of elements of the same data type. Imagine a row of boxes where each box holds a value (like numbers, words, etc.).
            <br/> Arrays are static, meaning its size cannot grow or shrink during runtime 
          </p>
        </div>

        <div>
          <h2>Time complexity (Worst Case):</h2>
          <p>Access - O(1) -  Direct Indexing e.g. a[3]<br/>
            Search - O(n) -	Linear Search (Goes through the entire list until reached) <br/>
            Insert - O(n)	-	Requires shifting elements <br/>
            Delete - O(n)	-	Requires shifting elements
          </p>
        </div>

        <div>
          <h2>Advantages:</h2>
          <p>1) Fast access to elements through direct indexing. <br/>
            2) Memory-efficient, as they use contiguous memory allocation. This means elements are stored in adjacent memory locations, reducing memory overhead.  <br/>
          </p>
        </div>

        <div>
          <h2>Disadvantages:</h2>
          <p>1) Fixed size upon creation. Attempting to add more elements can lead to overflow or memory allocation errors.  <br/>
            2) Inefficient insertions and deletions: Inserting or deleting elements in an Array can be ineffective because it requires shifting elements to maintain order, which can be a time-consuming process for large Arrays.   <br/>
            3) Wasted memory: Arrays may allocate memory for the maximum size even if you do not use all the available slots. 
          </p>
        </div>
      </>
  )
}

export default Arrays