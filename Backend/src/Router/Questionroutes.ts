import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import {  getOneQuestion, deleteQuestion, getbytitle,addQuestion,getQuestions } from "../Controller/QuestionController";

const router = Router()

router.get('/questions/all', getQuestions)

router.get('/:id', getOneQuestion)


router.post('/question/add', addQuestion)

router.delete('/question/delete/:id',deleteQuestion) 


router.get('/question/:title', getbytitle)



// router.put('/:id',VerifyToken, updateQuestion)
router.delete('/:id', deleteQuestion)


export default router