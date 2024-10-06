import { Request, Response } from "express";

const getAllTasks = (req: Request, res: Response) => {
    res.send('All Items') 
};
const createTask = (req: Request, res: Response) => {
    res.json(req.body) 
};
const getTask = (req: Request, res: Response) => {
    res.send({ id: req.params.id }) 
};
const deleteTask = (req: Request, res: Response) => {
    res.send('Delete Task') 
};
const updateTask = (req: Request, res: Response) => {
    res.send('Update Task') 
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}