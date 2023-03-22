import { Router } from "express";
import {  loginUser, RegisterUser } from "../Controller/authControllers"
import { VerifyToken } from "../Middlewares/VerifyToken";
const authrouter = Router()
authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
export default authrouter
