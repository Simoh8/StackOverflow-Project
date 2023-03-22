import express from 'express'
import cron from 'node-cron'
import sendWelcomeEmail from './EmailServices';

const app= express()



cron.schedule('*/10 * * * * *', async() => {
  console.log('running a task every 10 Second');
  await sendWelcomeEmail()
});

app.listen(3200, ()=>{
    console.log('Hello server is running is Running');
    
})
