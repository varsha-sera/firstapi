const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const port = process.env.PORT || 3000
mongoose.connect("mongodb+srv://vsera0927:varsha123@database.afv8a.mongodb.net/firstapidb?retryWrites=true&w=majority")
const bodyparser = require('body-parser');
const userRouter = require('./route/user.route');
const categoryRouter = require('./route/category.route');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use("/user",userRouter);
app.use("/category",categoryRouter);
app.listen(port,()=>{console.log("Server Stated")});