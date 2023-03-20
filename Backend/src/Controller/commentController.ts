import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { AddQuestion } from '../Helpers'
import { Question, DecodedData, User, Answer, Tag } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
import Joi, { string } from 'joi'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
 
    body:{
      content: string,
      author: string ,
      createdAt:Date
      questionId:string
      updatedAt:Date  
    },

    params:{id:string},

    }
//Get all Details
export const getAllComments:RequestHandler=async (req,res)=>{
  
   try {
    
      const comments = await (await _db.exec('FindCommentsByQuestionId')).recordset

     res.status(200).json(comments)
   } catch (error) {
    res.status(500).json(error)
   }

}

  export async function addComment(req: ExtendedRequest, res: Response) {
    try {
      const id = uid();
      
      const { content, questionId } = req.body;
      const author = req.user?.id; // Assuming you have a user object with an id field
      console.log( 'the author',author)
      const { error } = AddQuestion.validate(req.body);
  
      if (error) {
        return res.status(422).json(error.details[0].message);
      }
  
      if (req.body && author) {
        _db.exec('insertOrUpdateQuestion', { id, content, author,questionId });
  
        return res.status(201).json({ message: 'Comment Added Succesfully' });
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

//delete comment


export const deleteComment=async(req:ExtendedRequest, res:Response)=>{
  try {
    const comment= await (
    await _db.exec('getcommentbyQuestionId',{id:req.params.id})
  ).recordset[0]
    if(comment){
          await (await _db.exec('deleteCommentById',{id:req.params.id}))
        return res.status(200).json({message:'Comment Deleted'})
    }
  return res.status(404).json({error:'Comment Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}