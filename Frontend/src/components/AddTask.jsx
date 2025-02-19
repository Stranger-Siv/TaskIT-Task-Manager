// src/components/AddTask.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/taskService"; 

const AddTask = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleAddTask = async () => {
    if (newTask.title && newTask.description) {
      try {
        await createTask(newTask); 
        setNewTask({ title: "", description: "" }); 
        navigate("/tasks"); 
      } catch (error) {
        console.error("Error adding task:", error);
      }
    } else {
      console.log("Title and description are required.");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add New Task</h1>

      <div className="mb-6 p-4 border border-gray-300 rounded-md">
        <input
          type="text"
          placeholder="Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="p-2 border border-gray-300 rounded-md mb-3 w-full"
        />
        <textarea
          placeholder="Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="p-2 border border-gray-300 rounded-md mb-3 w-full"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
