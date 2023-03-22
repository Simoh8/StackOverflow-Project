import Joi, { ref } from 'joi'


export const 
RegistrationSchema= Joi.object({
     username:Joi.string().required(),
     email:Joi.string().required().email().messages({
        'string.empty':' Please add an Email',
        'string.email':'Not a Valid Email'

    }),
    password:Joi.string().required()
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

export const AnswerSchema=Joi.object({
    content:Joi.string().required(),
    questionId:Joi.string().required(),
    author:Joi.string().required()
})
export const vote= Joi.object({});