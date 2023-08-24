// for estabilishing connection between server and database

const mongoose = require('mongoose');

// but ye url to env me pada hai process object me kese chala gaya to isko feed padega using dotenv.

require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("db connection is successful")})
    .catch((error) => {
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;