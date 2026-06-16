const express=require('express');
const { getResponse } = require('../controllers/controller');
const router=express.Router();
router.get("./get-response",getResponse );
module.exports=router