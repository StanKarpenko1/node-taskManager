import express from 'express';
import cors from 'cors';
import connectDB from './db/connect';
import dotenv from 'dotenv';


const notFound = require('./middleware/not-found');

dotenv.config();

const app = express();
const tasks = require('./routes/tasks');
const errorHandlerMiddleware = require('./middleware/error-handler')

// Middleware
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.static('src/public'));


// Routes
app.use('/api/v1/tasks', tasks);
app.use(notFound); 
app.use(errorHandlerMiddleware);


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
