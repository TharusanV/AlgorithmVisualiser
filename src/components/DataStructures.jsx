import { useEffect } from "react";
import '../stylesheets/dataStructuresStyles.css';
import { Arrays, LinkedLists, Stack, Queue, Tree, Graph, HashTable, Set, Heap } from "../components";

const DataStructures = () => {

  const linearNavLinks = [
    { id: "arrays", title: "Array" },
    { id: "linkedLists", title: "Linked List" },
    { id: "stacks", title: "Stack" },
    { id: "queues", title: "Queue" },
  ];

  const nonlinearNavLinks = [
    { id: "trees", title: "Tree" },
    { id: "graphs", title: "Graph" },
    { id: "hashTables", title: "Hash Table" },
    { id: "heaps", title: "Heap" },
  ];

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container">
      <section className="section section-1">
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
            <p>Arranges elements sequentially, where each element is connected to its previous and next element.<br/></p>
            <div className="all-items-carousel">
              {linearNavLinks.map((item) => (
                <div key={item.id} className="item" onClick={() => handleScrollToSection(item.id)}>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2>Non-Linear Data Structures</h2>
            <p>Does not store data in a sequential order; instead, elements are connected in a hierarchical/interconnected manner and are suitable for handling complex data relationships.</p>
            <div className="all-items-carousel">
              {nonlinearNavLinks.map((item) => (
                <div key={item.id} className="item" onClick={() => handleScrollToSection(item.id)}>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section id="arrays" className="section  section-2">
        <div className="data-container">
          <Arrays/>
        </div>
      </section>

      <section id="linkedLists" className="section section-3">
        <div className="data-container">
          <LinkedLists/>
        </div>
      </section>

      <section id="stacks" className="section section-4">
        <div className="data-container">
          <Stack/>
        </div>
      </section>

      <section id="queues" className="section section-5">
        <div className="data-container">
          <Queue/>
        </div>
      </section>

      <section id="graphs" className="section section-6">
        <div className="data-container">
          <Graph/>
        </div>
      </section>

      <section id="trees" className="section section-7">
        <div className="data-container">
          <Tree/>
        </div>
      </section>

      <section id="heaps" className="section section-8">
        <div className="data-container">
          <Heap/>
        </div>
      </section>

      <section id="hashTables" className="section section-9">
        <div className="data-container">
          <HashTable/>
        </div>
      </section>

      <section id="sets" className="section section-10">
        <div className="data-container">
          <Set/>
        </div>
      </section>
    </div>
  );
}

export default DataStructures;
