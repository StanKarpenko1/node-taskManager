import express from 'express';
import cors from 'cors';
import connectDB from './db/connect';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ credentials: true }));
app.use(express.json());

// Routes
const tasks = require('./routes/tasks');
app.use('/api/v1/tasks', tasks);

// Define port and MongoDB connection string
const port: number = 3000;
const mongoURL = process.env.MONGO_URL;

// Start the server
const start = async () => {
    try {
        await connectDB(mongoURL!);
        app.listen(port, () => {
            console.log(`Server listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error starting the server:', error);
    }
};

start();
