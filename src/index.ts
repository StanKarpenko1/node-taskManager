const express = require('express')
const app = express();
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);


const port: number = 3000;
const url = 'http://localhost:3000/'

app.listen(
    port, 
    console.log(`
        server listening at port: ${port}... 
        and base url: ${url}...`)
)