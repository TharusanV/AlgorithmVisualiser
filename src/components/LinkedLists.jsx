import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";

const LinkedLists = () => {
  const [singlyLinkedLisk, setSinglyLinkedList] = useState(true);
  const [doublyLinkedLisk, setDoublyLinkedList] = useState(false);
  const [circularLinkedLisk, setCircularLinkedList] = useState(false);



  return (
    <>
      <div>
        <h1>Linked Lists</h1>
        <p>Linked Lists use a chain-like structure where each link (node) holds a value and pointer to the next node in the chain. 
          Unlike arrays, linked lists do not store elements in contiguous memory locations meaning no direct accessing.
          CREATE YOUR OWN INDEX REFERENCE TO THE TAIL NODE.
        </p>
      </div>

      <div>
        <h2>Features:</h2>
        <p>1) Pointer: A reference or pointer that points to the next node in the list. This connection between nodes is what allows the traversal of the Linked List. <br/>
          2) Dynamic in terms of size meaning you don't need a predefined size.
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
        <p>1) Dynamic sizing: Linked Lists can grow or shrink as needed, making them ideal for managing data whose size is uncertain or can change over time.   <br/>
          2) Efficient insertions and deletions especially at the start or end  <br/>
          3) Dynamic memory allocation: Linked Lists allow for dynamic memory allocation as each node can be allocated and deallocated separately. 
        </p>
      </div>

      <div>
        <h2>Disadvantages:</h2>
        <p>1) Slower access time: Accessing elements is slower because you have to start from the first one and follow the chain with no direct access by index.  <br/>
          2) Increased memory usage: The use of pointers or references in Linked Lists requires additional memory, making them less memory-efficient than Arrays in terms of overhead.    <br/>
          3) Complexity: Managing pointers and references can introduce complexity and make Linked Lists more error-prone compared to Arrays.   
        </p>
      </div>
    </>
  )
}

export default LinkedLists