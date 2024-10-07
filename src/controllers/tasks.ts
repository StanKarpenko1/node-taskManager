import { Request, Response } from "express";
const Task = require('../models/task');

const getAllTasks = (req: Request, res: Response) => {
    res.send('All Items')
};

const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (e) {
        res.status(500).send({ msg: e })
    }

};
const getTask = (req: Request, res: Response) => {
    res.json({ id: req.params.id })
};
const deleteTask = (req: Request, res: Response) => {
    res.json({ deleted: req.params.id })
};
const updateTask = (req: Request, res: Response) => {
    res.json({ updated: req.params.id })
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}