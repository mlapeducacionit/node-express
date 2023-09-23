import express from 'express'
import 'dotenv/config'
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`)
})