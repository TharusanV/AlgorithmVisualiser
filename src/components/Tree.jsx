import React from 'react'

const Tree = () => {
  return (
    <>
      <div >
        <h1>Trees</h1>
        <p>A hierarchical Data Structure formed up of nodes connected by edges. Each tree has a root node, and each node can have zero or more child nodes. 
        </p>
      </div>

      <div>
        <h2>Time complexity (Worst Case):</h2>
        <p>Search - O(n)
          Insert - O(n)	
          Delete - O(n)
        </p>
      </div>

      <div>
        <h2>Advantages:</h2>
        <p>1) Efficient searching, insertion, and deletion operations (especially in balanced trees (BST) where all are O(log n)).   <br/>
          2) It can represent hierarchical relationships naturally.
        </p>
      </div>

      <div>
        <h2>Disadvantages:</h2>
        <p>1) It can become unbalanced, leading to inefficiencies.   <br/>
          2) More complex to implement than linear Data Structures.   <br/>
          3) Wasted memory: Arrays may allocate memory for the maximum size even if you do not use all the available slots. This can result in wasted memory in cases where the Array size is significantly larger than the actual number of elements stored.   
        </p>
      </div>
    </>
  )
}
export default Tree