import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import {  getOneQuestion, deleteQuestion, getbyEmail, getQuestion } from "../Controller/QuestionController";

const router = Router()

router.get('/question', getQuestion)
router.get('/:id', getOneQuestion)
// router.post('',VerifyToken, addQuestion)
router.get('/questions/emails',VerifyToken, getbyEmail)
// router.put('/:id',VerifyToken, updateQuestion)
router.delete('/:id', deleteQuestion)


export default router