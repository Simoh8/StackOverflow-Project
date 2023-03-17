import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import { getAllUser, getOneUser } from "../Controller/UserController";

const userrouter = Router()

userrouter.get('/users/all', getAllUser)
userrouter.get('/users/user/:id', getOneUser)

export default userrouter