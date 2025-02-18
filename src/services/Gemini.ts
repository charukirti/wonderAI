import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
)

export async function genrateAIresponse(prompt: string): Promise<string>{
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent(prompt);
        const response =  result.response;
        const text =  response.text();
        return text
    } catch (error) {
        console.log(error)
        throw new Error('Failed to generate AI response')
    }
}