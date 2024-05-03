import React from "react";
import Main from "../components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
const Landingpage = () => {
  return (
    <Router basename="/Netflix-Clone">
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Landingpage;
