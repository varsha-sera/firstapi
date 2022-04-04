const Category = require('../model/category.model');
const {validationResult} = require('express-validator');

const { response } = require('express');
exports.add = ((request,response)=>{
    console.log("Hello")
    console.log("Hello")

    const error = validationResult(request);
    if(!error.isEmpty)
    {
        return response.status(404).json({error : error.array()});
    }
    Category.create({cname : request.body.cname,
     cimage : "http://localhost:3000/images/" +request.file.filename})
.then(result=>{
    return response.status(201).json(result);
}).catch(err=>{
    return response.status(500).json({message : "Oops something went wrong.."});
});
})