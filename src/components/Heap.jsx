import React from 'react'

const Heap = () => {
  return (
    <>
      <div >
        <h1>Heap</h1>
        <p>Basically an ordered binary tree. There are two types: Max-Heap: Parent nodes are greater than or equal to their children. Min-Heap: Parent nodes are equal or less than their children.
        </p>
      </div>

      <div>
        <h2>Time complexity (Worst Case):</h2>
        <p>Insert/Delete - O(log n)
          Peek (root element) - O(1)
        </p>
      </div>

      <div>
        <h2>Advantages:</h2>
        <p>1) allows for fast retrieval of the min/max element.        <br/>
          2) Efficient for priority queue implementatio.
        </p>
      </div>

      <div>
        <h2>Disadvantages:</h2>
        <p>1) Insertions and deletions are slower than arrays   <br/>
          2) Does not maintain a strict ordering among siblings, which can make certain operations less efficient compared to other Data Structures. <br/>
          3) It requires more memory to store pointers, especially in large heaps.  
        </p>
      </div>
    </>
  )
}

export default Heap