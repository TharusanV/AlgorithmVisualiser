import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";

const DataStructures = () => {

  const navLinks = [
    { id: "array", title: "Array" },
    { id: "linkedList", title: "Linked List" },
    { id: "stack", title: "Stack" },
    { id: "queue", title: "Queue" },
  ];

  return (
    <section className="data">
      <div className="data-container">
        <div className="data-header-content"> 
          <h1>Data Structures</h1>
          <p>
            Data structures are ways to organize and store data efficiently so that it can be accessed and modified easily. 
            Think of them like containers that help you work with data in different ways. 
          </p>
        </div>

        <div>
          <h2>Linear Data Structures</h2>
          <div className="all-linear-container">
            <div className="item">
              <img></img>
              <h3></h3>
            </div>
          </div>
        </div>
        

       
      </div>
    </section>
  )
}

export default DataStructures