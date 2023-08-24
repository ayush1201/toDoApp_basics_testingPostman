
const express = require('express');
const app = express();

// load config from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for todo api
const todoRoutes = require("./routes/todos");
// mount the todo api routes
app.use("/api/v1",todoRoutes);

app.listen(PORT,() => {
    console.log(`server started at ${PORT}`);
})

// connect to database
const dbConnect = require("./config/database");
dbConnect();

// default router
app.get("/",(req,res) => {
    res.send('<h1>This is HOME page</h1>')
})