const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const categoryController = require('../controller/category.controller');
const multer = require('multer');
var stroage = multer.diskStorage(
    {
        destination : 'public/images',
        filename : function(req,file,cb){
            cb(null,Date.now()+"-"+file.originalname);
        }
    }
);
var upload = multer({storage : stroage});
router.post("/add",upload.single('cimage'),
body('cname').notEmpty(),
categoryController.add
);

module.exports = router;