const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config({ path: './config.env' }); // to save content of this file in nodejs environmental variable

// Handling uncaught exception
process.on('uncaughtException', (err: Error) => {
    console.error(err.name, err.message);
    console.log('Unhandled Exception occurred. Shutting down....');
    process.exit(1);
});

// Connecting express with MongoDB database

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose
    .connect(process.env.LOCAL_CONN_STR as string, mongooseOptions)
    .then(() => {
        console.log('DB connection successful');
    })
    .catch((error: Error) => {
        console.error('DB connection error:', error.message);
        process.exit(1);
    });


// Creating a server
const port = process.env.PORT || 3000; // assigning Port from environmental variables
app.listen(port, () => {
    console.log('Server is started..');
});

// Handling unhandled rejection
process.on('unhandledRejection', (err: Error) => {
    console.error(err.name, err.message);
    console.log('Unhandled rejection occurred. Shutting down....');
    process.exit(1); // if any unhandled rejection occurred
});
