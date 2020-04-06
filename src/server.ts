import express from 'express'
import cors from 'cors'
import routes from './Router'

const app = express()

app.use(cors(
//    origin: 'https://reg.med.br'
))
app.use(express.json())
app.use(routes)

app.listen(3333)
