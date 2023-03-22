import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { AddQuestion, RegistrationSchema } from '../Helpers'
import {  DecodedData, User } from '../Models'
import { DatabaseHelper } from '../DatabaseHelpers'
import Joi from 'joi'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
    body:{
    username:string ,
    email:string, 
    password:string,
    },

    params:{id:string},
    info?:DecodedData

    }
//Get all Users
export const getAllUser:RequestHandler=async (req,res)=>{
  
   try {
    
      const users:User[] = await (await _db.exec('getAllUsers')).recordset

     res.status(200).json(users)
   } catch (error) {
    res.status(500).json(error)
   }

}



//Get one user by id
export const getOneUser=async(req:ExtendedRequest,res:Response)=>{
try {
  const {id} = req.params
    console.log(id);
    const singleuser:User[]= await (await  _db.exec('getUser', {id})).recordset[0]
  if(!singleuser){
     return res.status(404).json({error:'User Not Found'})
     
  }

  return res.status(200).json(singleuser)

} catch (error) {
  return res.status(500).json(error)
}

}



//  add a user 
 export async function addUser( req:ExtendedRequest, res:Response) {
  try {
    
    const id =uid()

    const {username,email,password,}= req.body
    
    const {error}= RegistrationSchema.validate(req.body)

    if(error){

      return res.status(422).json(error.details[0].message)
    }

else if(req.body){
    _db.exec('insertOrUpdateUser',{id,username,email,password})

   return  res.status(201).json({message:'User Added'})
   }
  } 
  catch (error:any) {
     return res.status(500).json(error.message)
  }
 }


// deleting a user 
export const deleteUser=async(req:ExtendedRequest, res:Response)=>{
  try {
    const user:User= await (
    await _db.exec('getUser',{id:req.params.id})
  ).recordset[0]
    if(user){
          await _db.exec('deletingUser',{id:req.params.id})
        return res.status(200).json({message:'User Deleted Succesfully'})
    }
  return res.status(404).json({error:'User Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}
