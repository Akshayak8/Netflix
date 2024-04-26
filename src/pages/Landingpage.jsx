import React from "react";
import Main from "../components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Mainpage from "../components/Mainpage";
const Landingpage = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Landingpage;
