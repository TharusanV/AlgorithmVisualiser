import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";
import { motion } from "framer-motion";
import { mergeSortImg } from "../assets";

const MergeSort = () => {
  

  return (
    <>
      <div>
        <h1 className='title'>Merge Sort</h1>

        <p className="summary"  style={{color: 'black'}}>
          A divide-and-conquer algorithm that recursively divides the list into halves, sorts each half, and merges them back together in order.
          <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(n log n) - If in order already so just checking once<br/>
          - Average: O(n log n)<br/>
          - Worst: O(n log n) <br/>
        </p>

        <div style={{ display: "flex", justifyContent: 'center',}}>
          <img src={mergeSortImg} style={{ height: "50vh"}}alt='mergeSortImg'/> 
        </div>
          


      </div>
    </>
    
  )
}

export default MergeSort