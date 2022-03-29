const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://vsera0927:varsha123@database.afv8a.mongodb.net/firstapidb?retryWrites=true&w=majority")
const bodyparser = require('body-parser');
const userRouter = require('./route/user.route');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use("/user",userRouter);
app.listen(3000,()=>{console.log("Server Stated")});