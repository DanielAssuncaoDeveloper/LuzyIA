import axios from 'axios'

export const sendMessageChatBot = async (message) => {
    const apiKey = process.env.OPENAI_KEY;
    const url = "https://api.openai.com/v1/chat/completions";
    const bodyParameters = {
        model: 'gpt-3.5-turbo',
        messages: [
            {
                role: "user", 
                content: message
            }
        ],
        temperature: 0
    };
    const config = {
        headers: {
            Authorization: `Bearer ${apiKey}` 
        }
    }; 
    
    const dataResponse = (await axios.post(url, bodyParameters, config)).data;
    const responseMessages = dataResponse.choices.map( men => men.message.content )  
    const responseChat = responseMessages.reduce( 
        (pastResponse, currentResponse) => 
            pastResponse + currentResponse);

    return responseChat;
}