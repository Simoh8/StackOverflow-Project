import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { AddQuestion, vote } from '../Helpers'
import {  DecodedData, Vote } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
import Joi, { string } from 'joi'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
     body:{
    author:string
    answerId:string
    },

    
    params:{id:string},
    

    }
//Get all all votes for a question
export const getVotes:RequestHandler=async (req,res)=>{
  
   try {
    const{answerId}=req.body
      const vote = await (await _db.exec('FindVotesByAnswerId' ,{answerId})).recordset

     res.status(200).json(vote)
   } catch (error) {
    res.status(500).json(error)
   }

}

  export async function addVote(req: ExtendedRequest, res: Response) {
    try {
      const id = uid();
          const { answerId, author} = req.body;    
      const { error } = vote.validate(req.body);
  
      if (error) {
        return res.status(422).json(error.details[0].message);
      }

      if (req.body ) {
        _db.exec('insertVote', { id, answerId,author });
  
        return res.status(201).json({ message: 'Vote Added Succesfully' });
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }


export const deleteVote=async(req:ExtendedRequest, res:Response)=>{
  try {
    const question= await (
    await _db.exec('FindVotesByAnswerId',{id:req.params.id})
  ).recordset[0]
    if(question){
          await (await _db.exec('deleteVoteByReference',{id:req.params.id}))
        return res.status(200).json({message:'Vote Deleted'})
    }
  return res.status(404).json({error:'Error'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}