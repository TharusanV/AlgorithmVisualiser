import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";
import { motion } from "framer-motion";

const SelectionSort = () => {

  const [showVisual, setShowVisual] = useState(true);

  const selectionCodeVer = <code>
  {`public static int selectionSort(int array[]) {
      for(int i = 0; i < array.length - 1; i++){ 
          // Assume the current position holds the minimum element
          int min_idx = i;    

          //Iterate through the unsorted portion to find the actual minimum
          for(int j = i + 1; j < array.length; j++){
              if(array[min_idx] > array[j]){
                  // Update min_idx if a smaller element is found
                  min_idx = j;
              }
          }

          // Move minimum element to its correct position
          int temp = arr[i];
          arr[i] = arr[min_idx];
          arr[min_idx] = temp;   
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
  
  const [selectionSortArray, setSelectionSortArray] = useState([...initialArray]);
  const [sorting, setSorting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [currentIndices, setCurrentIndices] = useState([]);

  const selectionAutoSort = async () => {
    if (sorting || isFinished) return;
    setSorting(true);
    
    let arr = [...selectionSortArray];

    for (let i = 0; i < arr.length - 1; i++) {
      let min_idx = i;

      for (let j = i + 1; j < arr.length; j++) {
        setCurrentIndices([i, j]); 
        await new Promise((resolve) => setTimeout(resolve, 300));

        if(arr[j].value < arr[min_idx].value){
          min_idx = j;
        }
      }

      [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]]; 
      setSelectionSortArray([...arr]); 
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setCurrentIndices([]); 
    setSorting(false);
    setIsFinished(true);
  };

  const resetArray = () => {
    setSelectionSortArray([...initialArray]);
    setIsFinished(false);
    setSorting(false);
    setCurrentIndices([]); 
  };

  return (
    <>
      <div>
        <h1 className='title'>Selection Sort</h1>

        <p className="summary"  style={{}}>
          Repeatedly finds the minimum (or maximum) element from the unsorted portion of the list and swaps it with the first unsorted element
          <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(n^2)<br/>
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
            <button style={{marginLeft: "5px", marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={selectionAutoSort} disabled={sorting}>{sorting ? "Sorting..." : "Start Selection Sort"}</button>
            <button style={{marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={resetArray} disabled={sorting}>Reset</button>
          </div>

          <div className='block-container'>
            {selectionSortArray.map((item, index) => (
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
              {selectionCodeVer}
            </pre>
          </div>
        </div>}

      </div>
    </>
  )
}

export default SelectionSort