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
import Session from "./Components/Logins/Controllers/Session";
import { AuthProvider } from "./Components/Auth/AuthProvider";
import RequiredAuth from "./Components/RequireAuth";
import Layout from "./Components/Layout";
import Queries from "./Queries";
import ChangePassword from "./Components/User/UI/ChangePassword";
import ManageUsers from "./Components/User/UI/ManageUsers";

function App() {
  //ReactSession.set("username", "repimark");
  return (
    <div className="App">
      {/* <Menu></Menu> */}
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* PUBLIC ROUTES */}
              <Route path="register" element={<Register2 />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              {/* PROTECTED ROUTES */}
              <Route element={<RequiredAuth />}>
                <Route
                  path="/"
                  element={
                    <Main>
                      <Menu />
                    </Main>
                  }
                />
                <Route
                  path="jobs"
                  element={
                    <JobsList>
                      <Menu />
                    </JobsList>
                  }
                />
                <Route
                  path="pivot"
                  element={
                    <Pivot>
                      <Menu />
                    </Pivot>
                  }
                />
                <Route
                  path="queries"
                  element={
                    <Queries>
                      <Menu />
                    </Queries>
                  }
                />
                <Route
                  path="user/changepass"
                  element={
                    <ChangePassword>
                      <Menu />
                    </ChangePassword>
                  }
                />
                <Route
                  path="user/manage"
                  element={
                    <ManageUsers>
                      <Menu />
                    </ManageUsers>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
