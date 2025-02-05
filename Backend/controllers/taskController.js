import Task from "../models/TaskSchema.js";

export const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save()
        res.status(201).json(task)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(task)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

export const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.json({message: 'Task Deleted'})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}