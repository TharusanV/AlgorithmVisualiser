import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";
import { motion } from "framer-motion";

const InsertionSort = () => {

  const [showVisual, setShowVisual] = useState(true);

  const insertionCodeVer = <code>
  {`public static int insertionSort(int[] array) {
      for(int i = 1; i < array.length; i++){ 
          int currentValue = array[i]; 
          int j = i - 1;
          
          while(j >= 0 && array[j] > currentValue){
              array[j + 1] = array[j];
              j--;
          }

          array[j + 1] = currentValue;
      }
}`}
  </code>

  //Using id as the items may swap so if we were to use index instead it might cause animation issues
  const initialArray = [
    { value: 30, id: 0 }, 
    { value: 10, id: 1 },
    { value: 50, id: 2 },
    { value: 20, id: 3 },
    { value: 40, id: 4 },
  ];
  
  const [insertionSortArray, setInsertionSortArray] = useState([...initialArray]);
  const [sorting, setSorting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentIndices, setCurrentIndices] = useState([]);

  const insertionAutoSort = async () => {
    if (sorting || isFinished) return;
    setSorting(true);
  
    let arr = [...insertionSortArray];
    let sortedItems = [];
    let unsortedItems = [];
  
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i].value;
      let j = i - 1;
      let tempIndices = [];
  
      while (j >= 0 && arr[j].value > currentValue) {
        tempIndices.push(j);
        arr[j + 1].value = arr[j].value;
        j--;
      }
  
      // Place the currentValue in the correct spot by replacing the value to avoid index issues when I map
      arr[j + 1].value = currentValue;
  
      // Add sorted items and unsorted items back to the array
      sortedItems = arr.slice(0, i + 1);
      unsortedItems = arr.slice(i + 1);
  
      setCurrentIndices([...tempIndices]);
      setInsertionSortArray([...sortedItems, ...unsortedItems]);
  
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  
    setCurrentIndices([]);
    setSorting(false);
    setIsFinished(true);
  };
  
  
  

  const resetArray = () => {
    setIsFinished(false);
    setSorting(false);
    setCurrentIndices([]);

    return new Promise((resolve) => {
      setInsertionSortArray([]);
      
      // Wait for a small delay to ensure the array is cleared
      setTimeout(() => {
        setInsertionSortArray([...initialArray]);
        resolve(); 
      }, 1);
    });
  };
  
  

  return (
    <>
      <div>
        <h1 className='title'>Insertion Sort</h1>

        <p className="summary"  style={{}}>
          Builds the sorted array one element at a time by comparing each new element to those already sorted and inserting it in the correct position.
          <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(n)<br/>
          - Average: O(n^2)<br/>
          - Worst: O(n^2) <br/>
        </p>

        <div style={{display: "flex",flexDirection: "row",justifyContent: 'center',alignItems: "center",width: "100%",gap: "10px",marginTop: "5px",marginBottom: "10px",}}>
          <button 
            style={{padding: "10px",width: "30%",height: "40px",backgroundColor: showVisual ? "blue" : "gray",color: "white",border: "none",cursor: "pointer",fontWeight: "bold",fontSize: "14px"}}
            onClick={() => {setShowVisual(true);}}
          >
            Visual
          </button>

          <button 
            style={{padding: "10px",width: "30%",height: "40px",backgroundColor: !showVisual ? "blue" : "gray",color: "white",border: "none",cursor: "pointer",fontWeight: "bold",fontSize: "14px"}}
            onClick={() => {setShowVisual(false);}}
          >
            Code
          </button>
        </div>

        {showVisual &&
        <div className="visual-container">
          <div className='bar' >
            <button style={{marginLeft: "5px", marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={insertionAutoSort} disabled={sorting}>{sorting ? "Sorting..." : "Start Insertion Sort"}</button>
            <button style={{marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={resetArray} disabled={sorting}>Reset</button>
          </div>

          <div className='block-container'>
            {insertionSortArray.map((item, index) => (
              <motion.div key={item.id} layout transition={{ type: "spring", stiffness: 150, damping: 12 }} className="mapped-container" style={{border: '2px solid grey',color: "white", backgroundColor: currentIndices.includes(index) ? "orange" : "lightblue",}} >
                {item.value}
              </motion.div>
            ))}
          </div>

        </div>}

        {!showVisual &&
        <div className="code-container" style={{}}>
          <div>
            <pre>
              {insertionCodeVer}
            </pre>
          </div>
        </div>}

      </div>
    </>
  )
}

export default InsertionSort