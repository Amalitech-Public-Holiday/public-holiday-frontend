import React from 'react';
import "normalize-css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
