import React, { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";
const Tasks = ({ task, onDelete, onUpdate }) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);

  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(task._id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault(); 

    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
    };

    onUpdate(task._id, updatedTask); 
    setIsEditing(false);  
  };

  const handleCancelEdit = () => {
    setIsEditing(false); 
  };

  const formatDateToIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
  };

  return (
    <div
      className={`relative p-4 border border-gray-300 rounded-lg shadow-md transition-all ${
        isCompleted ? "bg-green-100 border-green-500" : "bg-white"
      }`}
    >
      <button
        onClick={toggleCompletion}
        className="absolute top-2 right-2 text-green-500"
      >
        {isCompleted ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>

      {isEditing ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-3">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="p-2 border rounded-md"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="p-2 border rounded-md"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleCancelEdit}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Update Task
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2
            className={`text-xl font-semibold transition-all ${
              isCompleted ? "text-green-700 line-through" : "text-gray-800"
            }`}
          >
            {task.title}
          </h2>
          <h3
            className={`text-md transition-all ${
              isCompleted ? "text-gray-500 line-through" : "text-gray-600"
            }`}
          >
            {task.description}
          </h3>

          <div className="mt-3 flex justify-between items-center">
            <div>
              <h4 className={`text-xs transition-all ${isCompleted ? "text-gray-500" : "text-gray-400"}`}>
                Created At: {formatDateToIST(task.createdAt)}
              </h4>
              <h4 className={`text-xs transition-all ${isCompleted ? "text-gray-500" : "text-gray-400"}`}>
                Updated At: {formatDateToIST(task.updatedAt)}
              </h4>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                className="px-3 py-1 text-sm text-black bg-blue-400 rounded-lg cursor-pointer"
                disabled={isCompleted}
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-3 py-1 text-sm text-black bg-red-400 rounded-lg cursor-pointer"
                disabled={isCompleted}
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tasks;
