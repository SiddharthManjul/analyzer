import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";

export const initializeMistralModel = async () => {
    return new ChatGroq({
        model: "mistral-saba-24b",
        temperature: 0.1,
        apiKey: process.env.GROQ_API_KEY,
    });
};

export const getMIstralResponse = async (
    model: ChatGroq,
    chatHistory: (SystemMessage | HumanMessage | AIMessage)[]
) => {
    return await model.invoke(chatHistory)
}

export const initializeMistralChatHistory = () => [
    new SystemMessage("You are a helpful assistant. Answer the user's questions to the best of your ability."),
];