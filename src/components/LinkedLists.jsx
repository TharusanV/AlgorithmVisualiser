import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";

const LinkedLists = () => {
  const [singlyLinkedList, setSinglyLinkedList] = useState(true);
  const [doublyLinkedList, setDoublyLinkedList] = useState(false);
  const [circularLinkedList, setCircularLinkedList] = useState(false);


  return (
    <>
      <div>
        <h1>Linked Lists</h1>
        <p>Linked Lists use a chain-like structure where elements (nodes) are linked using pointers. 
          Unlike arrays, linked lists don't require contiguous memory allocation. meaning no direct accessing 
          (So search and access are essentially the same in terms of Big-O notation because both require traversing the list).
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: "10px",
          marginTop: "5px",
          marginBottom: "5px",
           
        }}
      >
        <button
          style={{
            padding: "10px",
            width: "30%",
            height: "50px",
            backgroundColor: singlyLinkedList ? "blue" : "gray",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          onClick={() => {
            setSinglyLinkedList(true);
            setDoublyLinkedList(false);
            setCircularLinkedList(false);
          }}
        >
          Singly Linked List
        </button>

        <button
          style={{
            padding: "10px",
            width: "30%",
            height: "50px",
            backgroundColor: doublyLinkedList ? "blue" : "gray",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
          onClick={() => {
            setSinglyLinkedList(false);
            setDoublyLinkedList(true);
            setCircularLinkedList(false);
          }}
        >
          Doubly Linked List
        </button>

        <button
          style={{
            padding: "10px",
            width: "30%",
            height: "50px",
            backgroundColor: circularLinkedList ? "blue" : "gray",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",

          }}
          onClick={() => {
            setSinglyLinkedList(false);
            setDoublyLinkedList(false);
            setCircularLinkedList(true);
          }}
        >
          Circular Linked List
        </button>
      </div>


      {singlyLinkedList && 
      <div>
        <div>
          <h1>Singly Linked Lists</h1>
          <p>
            A Singly Linked List consists of nodes where each node has: <br/>
            - Data: Stores the value. <br/>
            - Next Pointer: Points to the next node in the list. <br/>
            - Head Pointer: Points to the first node in the list.
          </p>
        </div>

        <div>
          <h2 style={{}}>Time complexity:</h2>
          <p>Search/Access - O(n) -	Traverse list from head down <br/>
            Insert/Delete at Head - O(1)	<br/>
            Insert/Delete anywhere but head - O(n) - As you got to traverse the list
          </p>
        </div>

        <div>
          <h2 style={{}}>Advantages:</h2>
          <p>Dynamic sizing, Efficient Insertions/Deletions at head</p>
        </div>

        <div>
          <h2 style={{}}>Disadvantages:</h2>
          <p>Extra Memory Overhead with each node stores an extra pointer, Slow search</p>
        </div>
      </div>}

      {doublyLinkedList && 
      <div>
        <div>
          <h1>Doubly Linked Lists</h1>
          <p>
            A Doubly Linked List has nodes where: <br/>
            - Each node contains: Data, Next Pointer (to the next node), Previous Pointer (to the previous node). <br/>
            - Head & Tail Pointers: Head points to the first node, and tail points to the last node.
          </p>
        </div>

        <div>
          <h2 style={{}}>Time complexity:</h2>
          <p>Access/Search - O(n) <br/>
            Insert - O(1)	-	If the node to be inserted/deleted is known <br/>
            Delete - O(1)	-	If the node to be inserted/deleted is known
          </p>
        </div>

        <div>
          <h2 style={{}}>Advantages:</h2>
          <p>Bidirectional traversal, efficient insertions and deletions from both ends (head and tail).</p>
        </div>

        <div>
          <h2 style={{}}>Disadvantages:</h2>
          <p> Extra memory needed for additional pointer</p>
        </div>
      </div>}

      {circularLinkedList && 
      <div>
        <div>
          <h1>Circular Linked Lists</h1>
          <p>
            A Circular Linked List can be:
            - Singly Circular Linked List : The last node's next pointer points back to the head.
            - Doubly Circular Linked List : The last node's next points to head, and the head's prev points to the last node.
          </p>
        </div>

        <div>
          <h2 style={{}}>Time complexity:</h2>
          <p>Access/Search - O(n) -  Sequential access<br/>
            Insert at Head & Tail - O(1)<br/>
            Delete at Head - O(1)<br/>
            Delete at Tail - O(n)
          </p>
        </div>

        <div>
          <h2 style={{}}>Advantages:</h2>
          <p>No NULL at the end, making some operations efficient,
            Continuous Looping makes it good for situations where data needs to be continuously cycled</p>
        </div>

        <div>
          <h2 style={{}}>Disadvantages:</h2>
          <p>Needs special conditions to avoid infinite loops.</p>
        </div>
      </div>}

      

    </>
  )
}

export default LinkedLists