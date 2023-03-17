import { Router } from "express";
import { Homepage, loginUser, RegisterUser } from "../Controller/authControllers"
import { VerifyToken } from "../Middlewares/VerifyToken";



const authrouter = Router()

authrouter.post('auth/register',RegisterUser)
authrouter.post('auth/login', loginUser)
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter