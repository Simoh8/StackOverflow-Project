import express, { json } from 'express'
import router from './Router/Questionroutes'

import userrouter from './Router/UserRoutes'
import authrouter from './Router/authRoutes'
import cors from 'cors'
const app= express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request


app.use('/', router)
app.use('/',userrouter)
app.use('/auth',authrouter)


app.listen(4200,()=>{
console.log(" Server is running  nigga :) thanks to Vera and Uncle Sam ");

})