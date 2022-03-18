import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import AddNewUnit from "./Components/AddNewUnit";
import AddJob from "./Components/AddJob";
import { ReactSession } from "react-client-session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Menu from "./Components/Main/Navbar";
import JobsList from "./Components/JobsList";

function App() {
  ReactSession.set("username", "repimark");
  return (
    <div className="App">
      <Menu></Menu>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/jobs" element={<JobsList/>}/>  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
