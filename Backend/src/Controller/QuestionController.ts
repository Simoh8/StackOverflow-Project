import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'

import { AddQuestion } from '../Helpers'
import { Question, DecodedData, User, Answer, Tag } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
import Joi, { string } from 'joi'
const _db= new DatabaseHelper()


interface ExtendedRequest extends Request{
     body:{
      title: string,
      content: string,
      author: string ,
      tags: string,
      upvotes: number,
      downvotes: number,
      views: number,
      createdAt: Date,
      updatedAt: Date,
      answers: string[],
      comments: string
    },

    params:{id:string},
    info?:DecodedData

    }
//Get all questions
export const getQuestions:RequestHandler=async (req,res)=>{
  
   try {
    
      const questions:Question[] = await (await _db.exec('GetAllquestions')).recordset

     res.status(200).json(questions)
   } catch (error) {
    res.status(500).json(error)
   }

}


//Get one question
export const getOneQuestion=async(req:ExtendedRequest,res:Response)=>{
try {

  const {id} = req.params
  
  console.log(id);
  


  const singlequestion:Question[]= await (await  _db.exec('getSinglequestionQuestion', {id})).recordset[0]
  if(!singlequestion){
     return res.status(404).json({error:'Question Not Found'})
     
  }

  return res.status(200).json(singlequestion)

} catch (error) {
  return res.status(500).json(error)
}

}

// get all question by userid 
export const getbyUser=async(req:ExtendedRequest,res:Response)=>{
  try {
    const author= '4'
    console.log(author);

         if(req.info && author ){
      const question:Question[]= (await _db.exec('GetQuestionsByUserId', {author})).recordset
      if(!question[0]){
         return res.status(404).json({error:'question Not Found'})
      }
    
     return  res.status(200).json(question)
     }
    
    } catch (error) {
    res.status(500).json(error)
  }
  
  }





  export async function addQuestion(req: ExtendedRequest, res: Response) {
    try {
      const id = uid();
          const { title, content, tags ,author} = req.body;
 
      const { error } = AddQuestion.validate(req.body);
  
      if (error) {
        return res.status(422).json(error.details[0].message);
      }

  
      if (req.body ) {
        _db.exec('insertOrUpdateQuestion', { id, title, content, tags, author });
  
        return res.status(201).json({ message: 'Question Added' });
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

export const deleteQuestion=async(req:ExtendedRequest, res:Response)=>{
  try {
    const question= await (
    await _db.exec('getSinglequestionQuestion',{id:req.params.id})
  ).recordset[0]
    if(question){
          await (await _db.exec('deleteQuestion',{id:req.params.id}))
        return res.status(200).json({message:'Deleted'})
    }
  return res.status(404).json({error:'Question Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}