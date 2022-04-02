const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    cname : {
        type : String,
        required : true,
        trim : true    
        },
        cimage : {
            type : String,
            required : true,
            trim : true
        }
})
module.exports = mongoose.model("category",categorySchema);