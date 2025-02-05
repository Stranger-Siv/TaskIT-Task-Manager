import axios from 'axios';

const API_URL = 'https://taskit-task-manager.onrender.com/api/task';  

export const getTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}/get`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks", error);
        throw error;
    }
};


export const createTask = async (taskData) => {
    try {
      const response = await axios.post('https://taskit-task-manager.onrender.com/api/task/create', taskData);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  };
  
  export const updateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`https://taskit-task-manager.onrender.com/api/task/update/${id}`, taskData);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };
  

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task", error);
        throw error;
    }
};
