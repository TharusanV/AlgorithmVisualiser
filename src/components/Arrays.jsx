import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";

const Arrays = () => {
  return (
      <>
        <div>
          <h1>Arrays</h1>
          <p>An Array is a collection of elements of the same data type, where a unique index identifies each element.
            Imagine a row of boxes where each box holds a value (like numbers, words, etc.).
          </p>
        </div>

        <div>
          <h2>Features:</h2>
          <p>1) Arrays are static, meaning its size cannot grow or shrink during runtime <br/>
            2) Arrays are zero-indexed. The index is a numeric value that specifies the position of an element. <br/>
            3) Use Cases: Storing fixed-size collections of data, static lists.
          </p>
        </div>

        <div>
          <h2>Time complexity:</h2>
          <p>Access - O(1) -  Direct Indexing e.g. a[3]<br/>
            Search - O(n) -	Linear Search (Goes through the entire list until reached) <br/>
            Insert - O(n)	-	Requires shifting elements <br/>
            Delete - O(n)	-	Requires shifting elements
          </p>
        </div>

        <div>
          <h2>Advantages:</h2>
          <p>1) Fast access: Accessing elements in an Array is extremely fast because it involves direct indexing. Given the index, you can immediately access the desired element.  <br/>
            2) Memory efficiency: Arrays are memory-efficient, as they use contiguous memory allocation. This means elements are stored in adjacent memory locations, reducing memory overhead.  <br/>
            3) Predictable performance: Arrays provide predictable performance for access, insertion, and deletion operations, as these operations are typically performed under a set time.  
          </p>
        </div>

        <div>
          <h2>Disadvantages:</h2>
          <p>1) Fixed size: The size of an Array is fixed upon creation, which can be a limitation if the number of elements is not known in advance. Attempting to add more elements than the Array's size can lead to overflow or memory allocation errors.  <br/>
            2) Inefficient insertions and deletions: Inserting or deleting elements in an Array can be ineffective because it requires shifting elements to maintain order, which can be a time-consuming process for large Arrays.   <br/>
            3) Wasted memory: Arrays may allocate memory for the maximum size even if you do not use all the available slots. This can result in wasted memory in cases where the Array size is significantly larger than the actual number of elements stored.   
          </p>
        </div>
      </>
  )
}

export default Arrays