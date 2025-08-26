import getGroqChatCompletion from "../models/GroqService";
async function handlemessage(req,res){
    const content = req.body.message;
    if(content.trim()===""){
        return res.json({message:"Please enter a valid message"});
    }
    const response = await getGroqChatCompletion(content);
    res.json({message:response});
}
export default handlemessage;
