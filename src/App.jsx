import { HashRouter, Routes, Route } from "react-router-dom";

import { Algorithms, DataStructures, Home, Tree, Graph, HashTable, Heap, Arrays, LinkedLists, Stack, Queue} from "./components";
import Navbar from "./components/Navbar";

function App() {

  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataStructures" element={<DataStructures />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/trees" element={<Tree />} />
        <Route path="/graphs" element={<Graph />} />
        <Route path="/hashTables" element={<HashTable />} />
        <Route path="/heaps" element={<Heap />} />
        <Route path="/arrays" element={<Arrays />} />
        <Route path="/linkedLists" element={<LinkedLists />} />
        <Route path="/stacks" element={<Stack />} />
        <Route path="/queues" element={<Queue />} />
      </Routes>
    </HashRouter>
  )
}

export default App
