import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/config.mongo.js';
import expenseRouter from './routes/expense.route.js'
import userRouter from './routes/user.route.js'
import incomeRouter from './routes/income.route.js'
import cors from 'cors'
dotenv.config('./.env')
const app=express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))


//api expense routes
app.use('/api' ,expenseRouter)

//api income routes
app.use('/api',incomeRouter)

//api user routes
app.use('/api',userRouter)






app.listen(process.env.PORT,()=>{
    console.log(`server is running on PORT ${process.env.PORT}`)
    connectDB();
})