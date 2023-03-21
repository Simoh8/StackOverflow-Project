import express, { json } from 'express'
import router from './Router/Questionroutes'

import userrouter from './Router/UserRoutes'
import authrouter from './Router/authRoutes'
import cors from 'cors'
import answerrouter from './Router/Answers'
const app= express()

//Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request


app.use('/',authrouter)
app.use('/', router)
app.use('/',userrouter)
app.use('/',answerrouter)


app.listen(4500,()=>{
console.log(" The Server is running");
})