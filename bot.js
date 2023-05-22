import axios from 'axios'
import venom from 'venom-bot'

venom
  .create({
    session: 'session-name', //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage(async (message) => {
    console.log(message)
    if (typeof(message.body) === "string" && message.body.toUpperCase().includes('CEP')) {
      const cep = message.body.substring(4).replace('-', '').trim()
      let endereco =  await consultaCEP(cep)

      client
        .sendText(message.from, endereco)
        .then((result) => {
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    }
  });
}

const consultaCEP = async (cep) => {
  const response = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data

  const endereco = `Endereço: ${response.logradouro}, ${response.localidade} - ${response.uf}`
  return endereco
}