// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import TaskDetail from "./components/TaskDetail";
import AddTask from "./components/AddTask"; 
import Home from './pages/Home'; 
import Navbar from "./components/Navbar"; 

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/tasks" element={<TaskDetail />} /> 
        <Route path="/add-task" element={<AddTask />} /> 
      </Routes>
    </Router>
  );
};

export default App;
