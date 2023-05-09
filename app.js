import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, resp) => {
    resp.send('<h1>Hello my friend!</h1>')
})

app.listen(port, () => console.log(`listen in port: ${port}`))