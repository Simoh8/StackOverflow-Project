import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { AddQuestion } from '../Helpers'
import { Question, DecodedData, User, Answer, Tag } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
import Joi, { string } from 'joi'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
 
    body:{
    name:string  
    },

    params:{id:string},

    }
//Get all tags
export const getAllTags:RequestHandler=async (req,res)=>{
  
   try {
    
      const tags = await (await _db.exec('getAllTags')).recordset

     res.status(200).json(tags)
   } catch (error) {
    res.status(500).json(error)
   }

}

  export async function addTag(req: ExtendedRequest, res: Response) {
    try {
      const id = uid();
      
      const {name} = req.body;
      if (req.body) {
        _db.exec('insertTag', { id, name});
  
        return res.status(201).json({ message: 'Tag Added Succesfully' });
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

//delete comment


export const deleteTag=async(req:ExtendedRequest, res:Response)=>{
  try {
    const tag= await (
    await _db.exec('get_tag',{id:req.params.id})
  ).recordset[0]
    if(tag){
          await (await _db.exec('deleteTagById',{id:req.params.id}))
        return res.status(200).json({message:'Tag Deleted'})
    }
  return res.status(404).json({error:'Tag Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}