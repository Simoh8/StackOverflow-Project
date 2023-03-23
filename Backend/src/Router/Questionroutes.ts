import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import {  getOneQuestion, deleteQuestion, getbyUser,addQuestion,getQuestions } from "../Controller/QuestionController";

const router = Router()

router.get('/questions/all', getQuestions)
router.get('question/:id', getOneQuestion)
router.post('/question/add', addQuestion)
router.delete('/question/delete/:id',deleteQuestion) 
router.get('/userquestion/user', getbyUser)
router.delete('/:id', deleteQuestion)

export default router