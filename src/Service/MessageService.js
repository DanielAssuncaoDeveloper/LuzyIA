import { sendMessageChatBot } from '../Client/OpenAIClient.js' 

export const getResponseChatBot = async (message) => {
    const messageUser = message.substring(5).trim()
    const resposeChat = '';
    
    try {
        resposeChat = await sendMessageChatBot(messageUser);
    } catch (error) {
        resposeChat = 'Desculpe, no momento estamos fora do ar. Tente novamente mais tarde.'
    }

    return `🤖 ${resposeChat}`;
}