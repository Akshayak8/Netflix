import React from "react";
import Main from "../components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
const Landingpage = () => {
  return (
    <div>
      <Main />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Landingpage;
