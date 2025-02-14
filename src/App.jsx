import { HashRouter, Routes, Route } from "react-router-dom";

import { Algorithms, DataStructures, Home } from "./components";
import Navbar from "./components/Navbar";

function App() {

  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataStructures" element={<DataStructures />} />
        <Route path="/algorithms" element={<Algorithms />} />
      </Routes>
    </HashRouter>
  )
}

export default App
