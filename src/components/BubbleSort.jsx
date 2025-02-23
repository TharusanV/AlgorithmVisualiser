import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";

const BubbleSort = () => {

  const [showVisual, setShowVisual] = useState(true);

  const bubbleCodeVer = <code>
  {`public static int bubbleSort(int array[]) {
      boolean swapped;

      for(int i = 0; i < array.length - 1; i++){ 
          swapped = false;
          for(int j = 0; j < array.length - i - 1; j++){
              if(array[j] > array[j+1]){
                  int temp = arr[j];
                  arr[j] = arr[j+1];
                  arr[j+1] = temp;

                  swapped = true;
              }
          }

          // If no swaps occurred, array is already sorted
          if (!swapped){break;}
      }
}`}
  </code>

  const [bubbleSortArray, setBubbleSortArray] = useState([30, 10, 50, 20, 40]);

  
  const [sorting, setSorting] = useState(false);

  const [isFinished, setIsFinished] = useState(false);

  const bubbleSingleStepSearch = () => {
    if(isFinished){return};

    let arr = [...bubbleSortArray]
    let swapped;

    for(let i = 0; i < arr.length - 1; i++){
      swapped = false;
      for(let j = 0; j < arr.length - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        
          setArray([...arr]);
          swapped = true;
        }
      }
      if (!swapped){
        setIsFinished(true);
        break;
      }
    }
    setIsFinished(true);
  }

  const bubbleAutoSort = () => {
    
  };

  const resetSearch = () => {

  };



  return (
    <>
      <div>
        <h1 className='title'>Bubble Sort</h1>

        <p className="summary"  style={{color: 'black'}}>
          A simple sorting algorithm where adjacent elements are compared and swapped if they are in the wrong order. This process repeats until the list is sorted.
          <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(n) - If in order already so just checking once<br/>
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
            <button style={{marginLeft: "5px", marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={bubbleAutoSort} disabled={sorting}>Play</button>
            <button style={{marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={resetSearch}>Reset</button>
          </div>

          <div className='block-container'>
            {bubbleSortArray.map((num, index) => (
              <div key={index} >
                <div className="mapped-container" style={{border: '2px solid grey',color: "white", backgroundColor: 'black'}} >
                  {num}
                </div>
              </div>
            ))}
          </div>

        </div>}

        {!showVisual &&
        <div className="code-container" style={{color: "black"}}>
          <div>
            <pre>
              {bubbleCodeVer}
            </pre>
          </div>
        </div>}

      </div>
    </>
    
  )
}

export default BubbleSort