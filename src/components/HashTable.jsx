import React from 'react'

const HashTable = () => {
  return (
    <>
      <div style={{marginTop: "30px"}}>
        <h1>HashTable (or Dictionaries/HashMaps)</h1>
        <p>Stores key-value pairs, where keys are mapped to values using a hash function. 
          It provides fast access to elements based on keys.
          Like a phone book where you look up a value (a person's phone number) by a key (their name). 
        </p>
      </div>


      <div>
        <h2>Time complexity:</h2>
        <p>Average Case: O(1)	-	For insert,delete,search due to efficient hashing <br/>
          Worst Case: O(n) - Due to hash collisions
        </p>
      </div>  

      <div>
        <h2>Advantages:</h2>
        <p>Very fast lookup if you know the key, efficient for large datasets.
        </p>
      </div>

      <div>
        <h2>Disadvantages:</h2>
        <p>1) Poor performance if there are many hash collisions  <br/>
          2) Requires good hash functions.
        </p>
      </div>   

      <div>
        <h2>Side Note about Hash Collisions:</h2>
        <p>
          Side-Note about Hash Collisions, it's dealt for you but good to know. 
          A hash function will take in a key and convert it to a hash value which is then mapped to a position in the hashmap's underlying array 
          (also called a bucket in the hashtable). 
          <br/> <br/>
          Even though you may have two unique keys they can have the same hash value which causes a collision.
          The cause of this stems from there being a limited number of possible hash values compared to the vast number of possible keys. 
          <br/><br/>
          To resolve collisions, two common strategies are used: <br/>
          Separate chaining, where multiple entries are stored in the same bucket using a data structure like a linked list or tree <br/>
          Open addressing, which finds another open bucket to store the new entry.
        </p>
      </div> 
    </>
  )
}

export default HashTable