import { useState } from 'react';

const BinarySearch = () => {
  const [binarySearchArray] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  const [found, setFound] = useState(false);
  const [target, setTarget] = useState(7);
  const [mid, setMid] = useState(null);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(binarySearchArray.length - 1);

  const [consoleLog, setConsoleLog] = useState([]);


  const binarySingleStepSearch = () => {
    if(target === null || found === true){
      return;
    }

    if(consoleLog.length == 0){
      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Using binary search to find {target}</span><br/>
      </>]);
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
    
    //Finding middle of the current array based on the lowest index and highest index it could be
    const middle = Math.floor((low + high) / 2);
    setMid(middle);
    setConsoleLog((prevConsole) => [...prevConsole, <>
      <span>Searching at the midpoint: {binarySearchArray[middle]}</span><br/>
    </>]);
    
    if (binarySearchArray[middle] === target) {
      setFound(true);
      
      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>{target} found </span><br/>
      </>]);

      return;
    } 
    else if (binarySearchArray[middle] < target) {
      setLow(middle + 1);

      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Going right with {binarySearchArray[middle]} being less than target</span><br/>
      </>]);
    } 
    else {
      setHigh(middle - 1);
      setConsoleLog((prevConsole) => [...prevConsole, <>
        <span>Going left with {binarySearchArray[middle]} being greater than target</span><br/>
      </>]);
    }
  };
  
  const resetSearch = () => {
    setLow(0);
    setHigh(binarySearchArray.length - 1);
    setMid(null);
    setFound(false);
    setConsoleLog([]);
  };
  
  return (
    <div style={{width: "100%", height: "100vh", margin: 0, padding: "20px", overflowY: "scroll", backgroundColor: "#lalala"}}>
      <div style={{paddingTop: "80px", width: "90%", maxWidth: "1200px", margin: "0 auto"}}>
        <h1 className='title' style={{fontSize: "36px"}}>Binary Search</h1>

        <p style={{marginBottom: "10px"}}>
          A highly efficient search algorithm that works on sorted lists by repeatedly dividing the search interval in half. 
          If the target element is less than the midpoint, search in the left half; otherwise, search in the right half. <br/>
          <br/>
          Big O notation helps quantify how algorithm efficiency scales with input size.<br/>
          - Best: O(1) - if the target is the middle element.<br/>
          - Average: O(log(n))<br/>
          - Worst: O(log(n)) <br/>
          A binary search is significantly faster than a linear search of O(n).

        </p>

        <div className='bar' style={{display: 'flex', justifyContent: "center", flexDirection: "row", marginBottom: '10px'}}>
          <div className='target-container'>
            <label>Target: </label>
            <input 
              type="number" 
              value={target} 
              onChange={(e) => setTarget(Number(e.target.value))} 
            />
          </div>
          <button style={{marginLeft: "5px", marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={binarySingleStepSearch}>Play</button>
          <button style={{marginRight: "5px", paddingLeft: "5px", paddingRight: "5px"}} onClick={resetSearch}>Reset</button>
        </div>

        <div className='block-container' style={{display: 'flex', width: '100%', gap:'5px', justifyContent: 'center'}}>
          {binarySearchArray.map((num, index) => (
            <div key={index} >
              <div style={{
                  flex: '0 0 auto',
                  minWidth: '40px',
                  padding: '10px', 
                  textAlign: 'center', 
                  color: "grey",
                  fontWeight: "bold",
                }}
              >
                {index}
              </div>
              <div style={{
                  flex: '0 0 auto',
                  minWidth: '40px',
                  padding: '10px', 
                  textAlign: 'center', 
                  border: '2px solid red',
                  color: "black",
                  fontWeight: "bold",
                  backgroundColor: found && index === mid ? 'green' : index === mid ? 'lightblue' :  'white'
                }} 
              >
                {num}
              </div>
            </div>
          ))}
        </div>

        <div className='console-container' style={{display: 'flex', width: '100%', justifyContent: 'center', marginTop: "15px"}}>
          <div style={{width: "450px", height: "400px", backgroundColor: 'lightGrey', border: '5px solid gray',color: 'white', fontWeight: "bold", padding: "2px", overflowY: "scroll"}}> 
            <p>
              {consoleLog}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BinarySearch