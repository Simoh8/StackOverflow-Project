import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { LoginSchema, RegistrationSchema } from '../Helpers'
import { DecodedData, User } from '../Models'
import Bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import path from 'path'
import jwt from 'jsonwebtoken'
import { DatabaseHelper } from '../DatabaseHelpers'

const  _db = new DatabaseHelper()
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

interface ExtendedRequest extends Request{
  body:{username:string ,
        email:string,
        password:string
    }
    info?:DecodedData
}

export async function RegisterUser(req:ExtendedRequest, res:Response){
try {
    const id =uid()
    const{username,email,password} = req.body
    const {error} =RegistrationSchema.validate(req.body)
    if(error){
        return res.status(422).json(error.details[0].message)
    }
    const hashedPassword= await Bcrypt.hash(password,10)
    ///check if email exist
    await _db.exec('insertOrUpdateUser', {id,username,email, password:hashedPassword})
    return res.status(201).json({message:'User registered'})

} 
catch (error) {
     res.status(500).json(error) 
}
}
export async function loginUser(req:ExtendedRequest, res:Response){
try {
    const{email,password} = req.body
    const {error} =LoginSchema.validate(req.body)
    if(error){
        return res.status(422).json(error.details[0].message)
    }


    
    const user:User[]= await (await _db.exec('getUserByEmail', {email:email} )).recordset
    
        if(!user[0]){
         return res.status(404).json(' Not found in database')
        }
    const valid= await Bcrypt.compare(password, user[0].password)
    console.log(password);
        
    if(!valid){
        return res.status(404).json('wrong password')
    }
        
    const payload= user.map(item=>{
        const {password,...rest}=item
        return rest

    })

    
        const token = jwt.sign(payload[0], 
        process.env.SECRETKEY as string ,
        {expiresIn:'7200s'})

    return res.status(200).json({message:"Welcome To StackOverflow", token, role:user[0].role, username:user[0].username,})

} catch (error) {
    res.status(500).json(error) 
}
}

