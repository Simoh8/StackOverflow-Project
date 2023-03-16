import Joi, { ref } from 'joi'


export const 
RegistrationSchema= Joi.object({
     Name:Joi.string().required(),
     Email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'

    }),
    Password:Joi.string().required().pattern(new
         RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),

})

export const LoginSchema= Joi.object({
     Email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'
    }),
    Password:Joi.string().required(),

})

export const AddQuestion= Joi.object({
    Title:Joi.string().required().messages({
       'string.empty':' Please add a title for your question',
   }),
   Content:Joi.string().required(),
   Comment:Joi.string().required(),
   



})