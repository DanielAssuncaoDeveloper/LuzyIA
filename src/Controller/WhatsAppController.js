import venom from 'venom-bot'
import {getResponseChatBot} from '../Service/MessageService.js'

export const createSeassion = () => {
  venom
    .create({
      session: 'luzyIA',
    })
    .then((client) => start(client))
    .catch((erro) => {
      console.log(erro);
    });
}

const start = (client) => {
  client.onMessage(async (message) => {
    const messageUser = message.body;

    if (typeof(messageUser) === "string" &&
        messageUser.toUpperCase().includes('/BOT')) {
      client
        .sendText(message.from, '🤖 Gerando resposta...');

      const messageResponse = await getResponseChatBot(messageUser);

      client
        .sendText(message.from, messageResponse)
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }
  });
}