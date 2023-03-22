import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { AddQuestion, AnswerSchema, RegistrationSchema } from '../Helpers'
import {  Answer, DecodedData, User } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
import Joi from 'joi'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
    body:{
    content:string ,
    questionId:string ,
    userId:string
     },
   params:{id:string},
    info?:DecodedData

    }
//Get all answers
export const getAllAnwers:RequestHandler=async (req,res)=>{
  
   try {
    
      const answer:Answer[] = await (await _db.exec('getallanswers')).recordset

     res.status(200).json(answer)
   } catch (error) {
    res.status(500).json(error)
   }

}



//Get one user by id
export const getOneAnswer=async(req:ExtendedRequest,res:Response)=>{
try {
  const {id} = req.params
    console.log(id);
    const answer:Answer[]= await (await  _db.exec('GetAnswerById', {id})).recordset[0]
  if(!answer){
     return res.status(404).json({error:'Answer Not Found'})
     
  }

  return res.status(200).json(answer)

} catch (error) {
  return res.status(500).json(error)
}

} 
// USE Stack
// SELECT * FROM answer

//  add a user 
export async function addAnswer(req: ExtendedRequest, res: Response) {
  try {

    const id = uid();
    const { content ,questionId} = req.body;
// const userId = req.user.id
    const { error } = AnswerSchema.validate(req.body);

    if (error) {
      return res.status(422).json(error.details[0].message);
    } else if (req.body) {
      _db.exec("insert_answer", { id, content, questionId });
      return res.status(201).json({ message: "Answer Added succesfully" });
    }
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
}


//delete an answer 
export const deleteAnswer=async(req:ExtendedRequest, res:Response)=>{
  try {
    const answer:Answer= await (
    await _db.exec('GetAnswerById',{id:req.params.id})
  ).recordset[0]
    if(answer){
          await _db.exec('deleteAnswerById',{id:req.params.id})
        return res.status(200).json({message:'Deleted'})
    }
  return res.status(404).json({error:'Answer Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}