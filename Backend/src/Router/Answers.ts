import { Router } from "express";
import { addAnswer, deleteAnswer, getAllAnwers, getOneAnswer } from "../Controller/AnswerController";

const answerrouter = Router()

answerrouter.get('/answers/all', getAllAnwers)
answerrouter.get('/answer/:id', getOneAnswer)
answerrouter.post('/answer/addanswer', addAnswer)
answerrouter.delete('/answer/delete/:id', deleteAnswer)

export default answerrouter