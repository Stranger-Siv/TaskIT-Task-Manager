import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { getTasks, deleteTask, updateTask } from "../services/taskService";
import Tasks from "./Tasks"; 

const TaskDetail = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const taskList = await getTasks();
      setTasks(taskList);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id); 
      fetchTasks(); 
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleUpdate = async (id, updatedTask) => {
    try {
      await updateTask(id, updatedTask); 
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Task List</h1>
        <Link
          to="/add-task"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Add Task
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Tasks
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskDetail;
