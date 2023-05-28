import axios from 'axios'

export const sendMessageChatBot = async (message) => {
    const apiKey = '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';
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


console.log(await sendMessageChatBot('Qual seu nome?'))