import Joi, { ref } from 'joi'


export const 
RegistrationSchema= Joi.object({
     name:Joi.string().required(),
     email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'

    }),
    Password:Joi.string().required().pattern(new
         RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),

})

export const LoginSchema= Joi.object({
     email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'
    }),
    password:Joi.string().required(),

})

export const AddQuestion= Joi.object({
    title:Joi.string().required().messages({
       'string.empty':' Please add a title for your question',
   }),
   
   content:Joi.string().required(),
   tags:Joi.string().required(),
 


   



})