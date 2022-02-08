const express = require('express');
const mongoose = require ('mongoose');
const userRouter = require("./routes/user.route");
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT;


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
        });
        console.log("Database is connected");
    } catch (error) {
        console.log(`Database not Connected`);
    }
};
connectDB();

//Question 1 -
app.use("/api/v1", userRouter);

//Question 2 -
app.use("/api/v2", userRouter);


//Question 3 - 
app.use("/api/v3", userRouter);

//Question 4 -
app.use("/api/v4", userRouter);


app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
} );

