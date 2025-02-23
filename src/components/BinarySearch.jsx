import "../stylesheets/allAlgorithmsStyles.css"
import { useState } from "react";

const BinarySearch = () => {

const binaryCodeVer = <code>
{`public static int binarySearch(int sortedArray[], int target) {
    int startIndex = 0;
    int endIndex = sortedArray.length - 1;

    while (startIndex <= endIndex) {
        int midIndex = (startIndex + endIndex) / 2;

        if (sortedArray[midIndex] == target)
            return midIndex;
        else if (target > sortedArray[midIndex])
            startIndex = midIndex + 1;
        else
            endIndex = midIndex - 1;
        }
    
    return -1;
}`}
</code>



  const [binarySearchArray] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  const [found, setFound] = useState(false);
  const [target, setTarget] = useState(7);
  const [mid, setMid] = useState(null);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(binarySearchArray.length - 1);

  const [stepNum, setStepNum] = useState(0);

  const [consoleLog, setConsoleLog] = useState([]);


  const binarySingleStepSearch = () => {
    if(target === null || found === true){return;}

    if(consoleLog.length == 0){
      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Using binary search to find {target}</span><br/>
      </>]);

      setStepNum(1);

      return;
    }

    //When the target is NOT in the sorted array after the binary search algorithm is used then this condition will occur
    if (low > high) {
      setMid(null);
      setFound(false);

      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Array exhausted - Target not found </span><br/>
      </>]);

      return;
    }

    if(stepNum === 1){
      //Finding middle of the current array based on the lowest index and highest index it could be
      const middle = Math.floor((low + high) / 2);
      setMid(middle);
      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Searching at the midpoint: {binarySearchArray[middle]}</span><br/>
      </>]);

      setStepNum(2);

      return;
    }

    else if(stepNum === 2){
        //Check if target is the same as the middle value possible. If its not then run the else if statements
        if (binarySearchArray[mid] === target) {
          setFound(true);
          
          setConsoleLog((prevConsole) => [...prevConsole, <>
            <span>{target} found </span><br/>
          </>]);

          return;
        } 
        else if (binarySearchArray[mid] < target) {
          setLow(mid + 1);
          setMid(null);

          setConsoleLog((prevConsole) => [...prevConsole, <>
            <span>Going right with {binarySearchArray[mid]} being less than target</span><br/>
          </>]);
        } 
        else {
          setHigh(mid - 1);
          setMid(null);
          
          setConsoleLog((prevConsole) => [...prevConsole, <>
            <span>Going left with {binarySearchArray[mid]} being greater than target</span><br/>
          </>]);
        }

        setStepNum(1);

        return;
    }

    
    

  };
  
  const resetSearch = () => {
    setStepNum(0);
    setLow(0);
    setHigh(binarySearchArray.length - 1);
    setMid(null);
    setFound(false);
    setConsoleLog([]);
  };


  const [showVisual, setShowVisual] = useState(true);
  
  return (
    <>
      <div>
        <h1 className='title'>Binary Search</h1>

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
            <button style={{marginLeft: "5px", marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={binarySingleStepSearch}>Play</button>
            <button style={{marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={resetSearch}>Reset</button>
          </div>

          <div className='block-container'>
            {binarySearchArray.map((num, index) => (
              <div key={index} >
                <div className="mapped-container" style={{color: "grey"}}>
                  {index}
                </div>
                <div className="mapped-container" style={{border: '2px solid grey',color: "white",backgroundColor: found && index === mid ? 'green' : index === mid ? 'red' : stepNum != 0 && index >= low && index <= high ? '#0099ff' :'black' }} >
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
              {binaryCodeVer}
            </pre>
          </div>
        </div>}


        
      </div>
    </>
  )
}

export default BinarySearch