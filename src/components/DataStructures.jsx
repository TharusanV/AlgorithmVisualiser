import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../stylesheets/dataStructuresStyles.css';
import { motion } from "framer-motion";
import { Arrays, LinkedLists, Stack, Queue} from "../components";


const DataStructures = () => {

  const linearNavLinks = [
    { id: "arrays", title: "Array",},
    { id: "linkedLists", title: "Linked List" },
    { id: "stacks", title: "Stack" },
    { id: "queues", title: "Queue" },
  ];

  const nonlinearNavLinks = [
    { id: "trees", title: "Tree",},
    { id: "graphs", title: "Graph" },
    { id: "hashTables", title: "Hash Table" },
    { id: "heaps", title: "Heap" },
  ];

  return (
    <section className="data">
      <div className="data-container" style={{paddingTop: "80px"}}>
        <div className="data-header-content"> 
          <h1>Data Structures</h1>
          <p>
            Data structures are ways to organize and store data efficiently so that it can be accessed and modified easily. 
            Think of them like containers that help you work with data in different ways. 
          </p>
        </div>

        <div className="allLinear-container">
          <h2>Linear Data Structures</h2>
          <p>Arranges elements sequentially, where each element is connected to its previous and next element.<br/></p>
          <div className="all-items-carousel">
            {linearNavLinks.map((item) => (
            <div to={item.id} className="item" key={item.id}>
              <h3>{item.title}</h3>
            </div>
            ))}
          </div>
        </div>

        <div className="allNonLinear-container">
          <h2>Non-Linear Data Structures</h2>
          <p>Does not store data in a sequential order; instead elements are connected in a hierarchical/interconnected manner and is suitable for handling complex data relationships.</p>
          <div className="all-items-carousel">
            {nonlinearNavLinks.map((item) => (
            <div to={item.id} className="item" key={item.id}>
              <h3>{item.title}</h3>
            </div>
            ))}
          </div>
        </div>

        <div className="content-container"> 
          <Arrays/>
          <LinkedLists/>
          <Stack/>
          
        </div>
      </div>

 
    </section>
  )
}

export default DataStructures