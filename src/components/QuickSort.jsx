import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";
import { motion } from "framer-motion";

const QuickSort = () => {
  return (
    <>
      <div>
        <h1 className='title'>Quick Sort</h1>

        <p className="summary"  style={{color: 'black'}}>
          Another divide-and-conquer algorithm, where a pivot is chosen, and the list is partitioned into two sublists: one with elements less than the pivot and one with elements greater. The process is repeated for the sublists.
          <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(n log n) - If in order already so just checking once<br/>
          - Average: O(n log n)<br/>
          - Worst: O(n^2) <br/>
        </p>          


      </div>
    </>
  )
}

export default QuickSort