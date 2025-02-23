import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";

const LinearSearch = () => {

  const [showVisual, setShowVisual] = useState(true);

  const linearCodeVer = <code>
  {`public static int linearSearch(int array[], int target) {
      for(int i = 0; i < array.size(); i++){
        if(array[i] == target){
          return i;
        }
      }

      return -1;
  }`}
  </code>

  const [linearSearchArray] = useState([10, 9, 5, 4, 9, 11, 12, 1, 7, 3]);
  const [found, setFound] = useState(false);
  const [target, setTarget] = useState(4);

  const [index, setIndex] = useState(0);

  const [stepNum, setStepNum] = useState(0);

  const [consoleLog, setConsoleLog] = useState([]);

  const linearSingleStepSearch = () => {
    if(target === null || found === true){return;}

    if(consoleLog.length == 0){
      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Using linear search to find {target}</span><br/>
      </>]);

      setStepNum(1);

      return;
    }

    if(index > linearSearchArray.length){
      setFound(false);

      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Array exhausted - Target not found </span><br/>
      </>]);
      
      return;
    }

    if(stepNum === 1){
      if(linearSearchArray[index] === target){
        setFound(true);
          
        setConsoleLog((prevConsole) => [...prevConsole, <>
          <span>{target} found </span><br/>
        </>]);
      }
      else{
        setStepNum(2);

        setConsoleLog((prevConsole) => [...prevConsole, <>
          <span>{target} not found at index : {index} </span><br/>
        </>]);
      }
  
      return;
    }

    else if(stepNum === 2){
      if(linearSearchArray[index] != target){
        setIndex(index + 1);
        
        setConsoleLog((prevConsole) => [...prevConsole, <>
          <span>New index : {index + 1} </span><br/>
        </>]);

        setStepNum(1);

        return;
      }
    }
  }

  const resetSearch = () => {
    setStepNum(0);
    setIndex(0);
    setFound(false);
    setConsoleLog([]);
  };


  return (
    <>
      <div>
        <h1 className='title'>Linear Search</h1>

        <p className="summary">
          A highly efficient search algorithm that works on sorted lists by repeatedly dividing the search interval in half. 
          If the target element is less than the midpoint, search in the left half; otherwise, search in the right half. <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(1) - if the target is the middle element.<br/>
          - Average: O(log(n))<br/>
          - Worst: O(log(n)) <br/>
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
            <div className='target-container'>
              <label>Target: </label>
              <input 
                type="number" 
                value={target} 
                onChange={(e) => {
                  setTarget(Number(e.target.value));
                  resetSearch();
                }}
              />
            </div>
            <button style={{marginLeft: "5px", marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={linearSingleStepSearch}>Play</button>
            <button style={{marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={resetSearch}>Reset</button>
          </div>

          <div className='block-container'>
            {linearSearchArray.map((num, index) => (
              <div key={index} >
                <div className="mapped-container" style={{color: "grey"}}>
                  {index}
                </div>
                <div className="mapped-container" style={{border: '2px solid grey',color: "white", }} >
                  {num}
                </div>
              </div>
            ))}
          </div>

          <div className='console-container'>
            <div style={{width: "450px", height: "35vh", backgroundColor: 'lightGrey', border: '5px solid gray',color: 'white', fontWeight: "bold", padding: "2px", overflowY: "scroll"}}> 
              {consoleLog.map((log, index) => (
                <p key={index}>{log}</p>
              ))}
            </div>
          </div>
        </div>}

        {!showVisual &&
        <div className="code-container">
          <div>
            <pre>
              {linearCodeVer}
            </pre>
          </div>
        </div>}


        
      </div>
    </>
  )
}

export default LinearSearch