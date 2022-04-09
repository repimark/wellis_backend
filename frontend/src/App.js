import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import AddNewUnit from "./Components/AddNewUnit";
import AddJob from "./Components/AddJob";
import { ReactSession } from "react-client-session";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Menu from "./Components/Main/Navbar";
import JobsList from "./Components/JobsList";
import Pivot from "./Components/Main/Pivot";
import Register2 from "./Components/Logins/Components/Register2";
import Login from "./Components/Logins/Components/Login";
import NotFound from "./Components/Utilities/NotFound";

function App() {
  ReactSession.set("username", "repimark");
  return (
    <div className="App">
      {/* <Menu></Menu> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main><Menu/></Main>}/>
        <Route path="/jobs" element={<JobsList><Menu/></JobsList>}/>
        <Route path="/pivot"  element={<Pivot><Menu/></Pivot>}/>
        <Route path="/register" element={<Register2/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
