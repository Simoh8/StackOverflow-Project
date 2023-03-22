import { Router } from "express";
import { addComment, deleteComment, getAllComments } from "../Controller/commentController";

const answerrouter = Router()

answerrouter.get('/comments/all', getAllComments)
answerrouter.post('/comment/addcomment', addComment)
answerrouter.delete('/comment/delete/:id', deleteComment)

export default answerrouter