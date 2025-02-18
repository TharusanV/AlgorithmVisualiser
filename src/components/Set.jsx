import React from 'react'

const Set = () => {
  return (
    <>
      <div style={{marginTop: "30px"}}>
        <h1>Sets</h1>
        <p>Does not allow duplicate elements and has no guaranteed order (depending on the implementation) meaning no direct indexing access. 
          Sets are commonly used when you need to ensure that each element is unique and don't care about the ordering. 
        </p>
      </div>

      <div>
        <h2>Key Set Operations:</h2>
        <p>
          add(element): Adds the element to the set if it's not already present. <br/>
          remove(element): Removes the specified element if it exists. <br/>
          contains(element): Returns true if the set contains the specified element. <br/>
          isEmpty(): Checks if the set is empty. <br/>
          size(): Returns the number of elements in the set. <br/>
          clear(): Removes all elements from the set. <br/>
          iterator(): Returns an iterator to traverse through the set. 
        </p>
      </div>

      <div>
        <h2>Java implementation</h2>
        <p>
          HashSet - Backed by a hash table, unordered, O(1) complexity for add, remove, contains operations. <br/>
          LinkedHashSet - Extends HashSet, insertion order, O(1) time complexity for most operations. <br/>
          TreeSet - Backed by a Red-Black tree, where elements are stored in ascending order automatically. Performance for operations is O(log n).
        </p>
      </div>

      <div>
        <h2>Common Use Cases:</h2>
        <p>
          Removing duplicates: Since sets do not allow duplicates, they are ideal for scenarios where you need to ensure uniqueness. <br/>
          Set operations: Sets provide efficient operations for union, intersection, and difference when working with multiple sets. <br/>
          Fast lookups: Especially with HashSet, sets are used to quickly check for membership of an element.
        </p>
      </div>
      
    </>
  )
}

export default Set