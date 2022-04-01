const User = require('../model/user.model');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
exports.signUp = ((request,response)=>{
    const error = validationResult(request);
    if(!error.isEmpty)
    {
        return response.status(403).json({error : error.array()});

    }
    User.create({username : request.body.username,email : request.body.email,password : request.body.password})
    .then(result=>{
        return response.status(201).json(result);
    }
        
    ).catch(err=>{
        return response.status(500).json({message : "Oops something went wrong"});
    })
});
exports.signIn = ((request,response)=>{
    User.findOne({email : request.body.email,password : request.body.password}).then(result=>{
        let payload = {subject : result._id};
        let token = jwt.sign(payload,'Header');
        return response.status(201).
        json({
            status : "Login SuccessFul",
            result : result,
            token : token
    });
       
    }).catch(err=>{
     console.log(err);   
    return response.status(500).json({message :"Oops something went wrong",error: err});
    })
})