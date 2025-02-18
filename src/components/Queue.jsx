import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";

const Queue = () => {
  return (
    <>
      <div style={{marginTop: "30px"}}>
        <h1>Queues</h1>
        <p>Follows the First-In, First-Out (FIFO) principle where like a line of people, the first one in line is the first to leave.
        </p>
      </div>

      <div>
        <h2>Features:</h2>
        <p>1) Enqueue operation: Add an element to the rear (back of the queue)<br/>
          2) Dequeue operation: Remove the front element and returning it <br/>
          3) Peek operation: View the front element without removing it. 
        </p>
      </div>

      <div>
        <h2>Time complexity (Worst Case):</h2>
        <p>Access (from front/rear) - O(1) <br/>
          Search	O(n) -	Must traverse the queue to find an element. <br/>
          Insert (at Rear) - O(1)	-	Enqueue <br/>
          Delete (from Front) - O(1)	-	Dequeue
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
        <p>1) Limited access with only the front and rear elements are accessible  <br/>
          2) Memory usage is high especially in cases of long Queues.  <br/>
          3) In some applications, if the Queue becomes full, it can block further enqueuing until space becomes available which can be problematic where continuous data flow is critical.   
        </p>
      </div>
    </>
  )
}

export default Queue