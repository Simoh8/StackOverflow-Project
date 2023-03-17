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
      author: string,
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
//Get all Details
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


export const getbytitle=async(req:ExtendedRequest,res:Response)=>{
  try {
     if(req.info){
      const question:Question[]= await (await  _db.exec('getQuestions', {author:req.body.author})).recordset
      if(!question[0]){
         return res.status(404).json({error:'question Not Found'})
      }
    
     return  res.status(200).json(question)
     }
    
  
  } catch (error) {
    res.status(500).json(error)
  }
  
  }




 export async function addQuestion( req:ExtendedRequest, res:Response) {
  try {
    const id =uid()
    const {title,content , tags}= req.body
    
    const {error}= AddQuestion.validate(req.body)

    if(error){
      return res.status(422).json(error.details[0].message)
    }

   if(req.body){
    _db.exec('insertOrUpdateQuestion',{id,title,content,tags})

   return  res.status(201).json({message:'Question Added'})
   }
  } 
  catch (error:any) {
     return res.status(500).json(error.message)
  }
 }





// export async function updateBooking(req:ExtendedRequest,res:Response){
// try {
// const {title,content,author,tags,upvotes,downvotes,views,createdAt,updatedAt,answers,comments}= req.body
//      const question:Question= await (await _db.exec('getFlightBookings',{id:req.params.id})).recordset[0]

//   if(req.info){
//     if(question){
//       await _db.exec('InsertOrUpdate', {id:req.params.id,name:req.info.Name, email:req.info.Email, destination:Destination, date:TravelDate})
//       const updatedQuestion:Q= await (await  _db.exec('getFlightBookings', {id:req.params.id})).recordset[0]
//       return res.status(200).json(updatedQuestion)
//     }
//   }

//   return res.status(404).json({error:'Booking Not Found'}) 
     
//   } 

// catch (error:any) {
//    res.status(500).json(error.message)
// }
// }


//delete question


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