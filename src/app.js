const express = require('express');

const userRouter = require("./routes/user.route");
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT;

const DB = require("./DB/connectDB")
DB.connectDB()


// path for postman
app.use("/api/v1", userRouter);


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
} );

