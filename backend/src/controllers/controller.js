const aiService=require('../utility/ai.service.js')
const getResponse=async(req,res)=>{
const prompt=req.query.prompt;
if(!prompt){
    return res.status(400).json({error:"Prompt is required"})
}
const response=await aiService(prompt);
res.json({message:"Success",response})
}
module.exports={getReview}