import ejs from 'ejs'
import sendMail from '../Helpers/email';
import mssql from 'mssql'
import { sqlConfig } from '../config';

interface User{
Id:string
name:string
email:string
password:string
}
const sendWelcomeEmail = async()=>{
    const pool = await mssql.connect(sqlConfig)
    const users:User[]= await(await pool.request().
    query("SELECT * FROM users WHERE isSent ='0'")).recordset
    console.log(users);

for(let user of users){
    ejs.renderFile('Templates/registration.ejs',{name:user.name}, async(error, html)=>{
    const message = {
    from: process.env.EMAIL,
    to: user.email,
    subject: "StackOverflow Registration",
    html
};

console.log(html);

 try {
await sendMail(message) 
await pool.request().query(`UPDATE user SET isSent ='1' WHERE Id ='${user.Id}'`)
 } catch (error) {
    console.log(error);
    
 }  
})
}    
}

export default sendWelcomeEmail

