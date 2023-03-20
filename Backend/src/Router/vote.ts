import { Router } from "express";
import { VerifyToken } from "../Middlewares/VerifyToken";
import { addVote, deleteVote, getVotes } from "../Controller/votes";

const voterouter = Router()

voterouter.get('/vote/all/:id', getVotes)

voterouter.post('/vote/add', addVote)

voterouter.delete('/vote/delete/:id',deleteVote) 

export default voterouter