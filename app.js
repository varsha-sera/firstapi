const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000
mongoose.connect("mongodb+srv://vsera0927:varsha123@database.afv8a.mongodb.net/firstapidb?retryWrites=true&w=majority")
const bodyparser = require('body-parser');
const userRouter = require('./route/user.route');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use("/user",userRouter);
app.listen(port,()=>{console.log("Server Stated")});