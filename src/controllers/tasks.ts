import { Request, Response } from "express";

const getAllTasks = (req: Request, res: Response) => {
    res.send('All Items') 
};
const createTask = (req: Request, res: Response) => {
    res.json(req.body) 
};
const getTask = (req: Request, res: Response) => {
    res.json({ id: req.params.id }) 
};
const deleteTask = (req: Request, res: Response) => {
    res.json({ deleted: req.params.id }) 
};
const updateTask = (req: Request, res: Response) => {
    res.json({updated: req.params.id }) 
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}