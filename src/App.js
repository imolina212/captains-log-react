// Dependencies
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar"

//Pages
import Home from "./Pages/Home"
import Index from "./Pages/Index";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/logs" element={<Index />}/>
        <Route path="/logs/new">New Logs</Route>
        <Route path="/logs/:index"/>
      </Routes>
    </div>
  );
};

export default App;