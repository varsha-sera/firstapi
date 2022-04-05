const jwt = require('jsonwebtoken');
exports.verifyToken = (request,response,next)=>{
    try{
        console.log('Token:'+request.headers.authorization);
        if(!request.headers.authorization)
            return response.status(401).send('unauthorized');
        if(request.headers.authorization == null)
            return response.status(401).send('unauthorized');

        let token = request.headers.authorization.split(" ")[1];
        let payload = jwt.verify(token,'Header');
        console.log(payload);
        next();
    }
    catch(err){
        console.log(err);
        return response.status(401).send("Oops something went wrong");    
    }
}