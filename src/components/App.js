import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
import Home from "./Home";
import Form from "./form";

const App = () => {
  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
