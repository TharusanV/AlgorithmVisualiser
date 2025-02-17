import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";


const Stack = () => {
  return (
    <>
      <div style={{marginTop: "30px"}}>
        <h1>Stacks</h1>
        <p>Follows the Last-In, First-Out (LIFO) principle where new elements are added to the top and items are removed from the top.
          Think of a stack of plates.
        </p>
      </div>

      <div>
        <h2>Features:</h2>
        <p>1) Push operation: Add an element to the top<br/>
          2) Pop operation: Remove the top element <br/>
          3) Peek operation: View the top element without removing it. 
        </p>
      </div>

      <div>
        <h2>Time complexity (Worst Case):</h2>
        <p>Access/Search - O(n) - You must pop elements one by one until you find it then re-push the popped elements <br/>
          Insert - O(1)	-	Push <br/>
          Delete - O(1)	-	Pop
        </p>
      </div>

      <div>
        <h2>Advantages:</h2>
        <p>1) LIFO makes stacks suitable for managing elements in chronological or reverse chronological order. <br/>
          2) Fast insertion and deletion (push/pop) <br/>
          3) Simple implementation with arrays or linkedLists
        </p>
      </div>

      <div>
        <h2>Disadvantages:</h2>
        <p>1) Limited access to elements (only the top element is accessible after that you need to pop elements until the desired one then push it all back)  <br/>
          2) Memory Management issues can occur <br/>
          3) Can be fixed in size if implemented as an array   
        </p>
      </div>
    </>
  )
}

export default Stack