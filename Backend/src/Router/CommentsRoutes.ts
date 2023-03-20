import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import { addUser, deleteUser, getAllUser, getOneUser } from "../Controller/UserController";
import { addComment, deleteComment, getAllComments } from "../Controller/commentController";

const answerrouter = Router()

answerrouter.get('/comments/all', getAllComments)
// answerrouter.get('/comment/:id', getOneComment)
answerrouter.post('/comment/addcomment', addComment)
answerrouter.delete('/comment/delete/:id', deleteComment)

export default answerrouter