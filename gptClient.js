import axios from 'axios'

const obterRespostaOpenIA = async () => {
    const apiKey = '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'
    const url = "https://api.openai.com/v1/chat/completions"
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        data: {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: "user", 
                    content: "Hello!"
                }
            ] 
        }
    } 
    
    const response = await axios.post(url, config).data
}



console.log(await obterRespostaOpenIA())
