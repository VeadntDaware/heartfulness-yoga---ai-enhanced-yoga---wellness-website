
import { GoogleGenAI, Type } from "@google/genai";
import { AICounselResult } from "../types";

// Always use process.env.API_KEY directly for initialization as per @google/genai guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getYogaAdvice = async (userMood: string): Promise<AICounselResult> => {
  const modelName = 'gemini-2.5-flash';
  
  const response = await ai.models.generateContent({
    model: modelName,
    contents: `The user says they feel: "${userMood}". 
    As a professional yoga and wellness coach at Heartfulness Yoga, provide a short piece of advice, 
    recommend 2 types of classes (from: Vinyasa, Hatha, Restorative, Power, Ashtanga, Meditation), 
    and suggest 1 specific yoga pose (e.g. Child's Pose).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          message: { type: Type.STRING, description: "Compassionate advice for the user's current mood." },
          recommendedClasses: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "List of recommended class categories." 
          },
          suggestedPose: { type: Type.STRING, description: "Name of a specific yoga pose." }
        },
        required: ["message", "recommendedClasses", "suggestedPose"]
      }
    }
  });

  try {
    // The text property is a getter and directly returns the string output
    const result = JSON.parse(response.text || '{}');
    return result as AICounselResult;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      message: "Take a deep breath. Focus on your inhale and exhale. Every moment is a new beginning.",
      recommendedClasses: ["Meditation", "Restorative"],
      suggestedPose: "Savasana"
    };
  }
};
