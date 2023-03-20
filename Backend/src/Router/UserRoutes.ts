import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import { addUser, deleteUser, getAllUser, getOneUser } from "../Controller/UserController";

const userrouter = Router()

userrouter.get('/users/all', getAllUser)
userrouter.get('/users/user/:id', getOneUser)
userrouter.post('/user/adduser', addUser)
userrouter.delete('/user/delete/:id', deleteUser)

export default userrouter
