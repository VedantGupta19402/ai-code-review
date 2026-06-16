const getResponse=(req,res)=>{
const prompt=req.query.prompt;
if(!prompt){
    return res.status(400).json({error:"Prompt is required"})
}
res.json({message:"Success",prompt})
}