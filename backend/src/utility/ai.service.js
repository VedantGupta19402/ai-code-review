import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({apiKey:process.env.GOOGLE_GEMINI_KEY});
async function generateContent(prompt) {
    try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });
        return response.text    
    } catch (error) {
        console.log(error)
    }
}
module.exports=generateContent;