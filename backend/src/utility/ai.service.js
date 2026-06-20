const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({apiKey:process.env.GOOGLE_GEMINI_KEY});
async function generateContent(prompt) {
    try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          system:"You are expert code reviewer. You will review the code and provide feedback in a structured format who have experties in devlopment who will find problems in code and give solutions and will try to make code clean and efficent",
          contents: prompt,
        });
        return response.text    
    } catch (error) {
        console.log(error)
    }
}
module.exports=generateContent 