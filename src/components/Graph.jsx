import React from 'react'

const Graph = () => {
  return (
    <>
      <div style={{marginTop: "30px"}}>
        <h1>Graphs</h1>
        <p>A collection of nodes (vertices) connected by lines (edges). Graphs can be directed or undirected, and may contain cycles.
        </p>
      </div>

      <div>
        <h2>Time complexity (Worst Case):</h2>
        <p>Traversal - O(V + E) 
        </p>
      </div>

      <div>
        <h2>Advantages:</h2>
        <p>1) Flexible representation for many real-world relationships.   <br/>
          2) Algorithms like Dijkstra's, BFS, and DFS optimize search operations.
        </p>
      </div>

      <div>
        <h2>Disadvantages:</h2>
        <p>1) Requires more memory to store nodes and edges..   <br/>
          2) More complex to implement than linear Data Structures. 
        </p>
      </div>
    </>
  )
}

export default Graph