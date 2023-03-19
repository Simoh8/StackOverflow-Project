import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import {  getOneQuestion, deleteQuestion, getbytitle,addQuestion,getQuestions } from "../Controller/QuestionController";

const voterouter = Router()

voterouter.get('/vote/all', getVotes)

voterouter.post('/vote/add', addVote)

voterouter.delete('/vote/delete/:id',deleteVote) 

export default voterouter