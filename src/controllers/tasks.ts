import { NextFunction, Request, Response } from "express";
const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError, CustomError} = require ('../errors/custom-errors')


const getAllTasks = asyncWrapper(async (req: Request, res: Response) => {
    const tasks = await Task.find({});
    res
        .status(200)
        .json({
            success: true,
            data: {
                length: tasks.length,
                tasks: tasks
            }
        });

})

const createTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body

    const existingTask = await Task.findOne({name})

    if (existingTask) {
        return next(createCustomError(`This task already exist in your list`, 400) );
    }

    const task = await Task.create(req.body);
    res
        .status(201)
        .json({
            success: true,
            task: task
        });
});


const getTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId.trim() });
    if (!task) {
        
        return next(createCustomError(` No task with id: ${taskId}`, 404) );
    }
    res
        .status(200)
        .json({ task });
})

const deleteTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId.trim() });
    if (!task) {
        return next(createCustomError(` No task with id: ${taskId}`, 404) );

    }
    res.status(200).json({
        deleted: true,
        taskDeleted: task
    })
});

const updateTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndUpdate(

        { _id: taskId },
        req.body,
        { new: true, runValidators: true }

    )

    if (!task) {
        return next(createCustomError(` No task with id: ${taskId}`, 404) );
    }

    res.status(200).json({
        updated: true,
        data: task
    });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}