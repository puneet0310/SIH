const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const adminroutes = require('./Routes/JPRoutes');
const userroutes = require('./Routes/JSRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/SIH/Job_Provider', adminroutes);
app.use('/SIH/JOB_Seeker', userroutes); // General user routes
// Debugging middleware
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body);
    next();
});
// Database connection
mongoose.connect("mongodb://localhost:27017/SIH")
    .then(() => {
        console.log('Connected to database');
        app.listen(PORT, () => {
            console.log('Listening for requests on port', PORT);
        });
    })
    .catch((err) => {
        console.log('Database connection error:', err);
    });
