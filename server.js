const http  = require('http');

const app = require('./app');

const port = process.env.PORT || 2020;

const server = http.createServer(app);


server.listen(port, console.log(`http://localhost:${port}`));

//Handle unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error:${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
})