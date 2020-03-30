import express from 'express'
import { OngController } from '../controllers/OngController'

export const routes = express.Router()
console.log(OngController)
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)