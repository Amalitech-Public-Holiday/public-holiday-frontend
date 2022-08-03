import React from 'react';
import "normalize-css";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
