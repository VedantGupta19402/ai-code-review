const express=require('express');
const { getReview } = require('../controllers/controller');
const router=express.Router();
router.get("/get-review",getReview );
module.exports=router