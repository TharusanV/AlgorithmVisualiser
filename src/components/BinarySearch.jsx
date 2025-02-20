import { useState } from 'react';

const BinarySearch = () => {
  const [binarySearchArray] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  const [found, setFound] = useState(false);
  const [target, setTarget] = useState(7);
  const [mid, setMid] = useState(null);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(binarySearchArray.length - 1);


  const binarySingleStepSearch = () => {
    //When the target is NOT in the sorted array after the binary search algorithm is used then this condition will occur
    if (low > high) {
      setMid(null);
      setFound(false);
      return;
    }
    
    //Finding middle of the current array based on the lowest index and highest index it could be
    const middle = Math.floor((low + high) / 2);
    setMid(middle);
    
    if (array[middle] === target) {
      setFound(true);
      return;
    } 
    else if (array[middle] < target) {
      setLow(middle + 1);
    } 
    else {
      setHigh(middle - 1);
    }
  };
  
  const resetSearch = () => {
    setLow(0);
    setHigh(binarySearchArray.length - 1);
    setMid(null);
    setFound(false);
  };
  
  return (
    <div>
      <h1 className='title'>Binary Search Visualisation</h1>

      <div className='bar'>
        <div className='target-container'>
          <label>Target: </label>
          <input 
            type="number" 
            value={target} 
            onChange={(e) => setTarget(Number(e.target.value))} 
          />
        </div>
        <button>Play</button>
        <button onClick={resetSearch}>Reset</button>
      </div>

      <div>
        {binarySearchArray.map((num, index) => (
          <div key={index} >
            {num}
          </div>
        ))}
      </div>



    </div>
  )
}

export default BinarySearch