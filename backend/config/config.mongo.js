import mongoose from "mongoose";


const connectDB=async()=>{
    try{
    const conn= await mongoose.connect(process.env.MONGO_URI,
        {
            dbName:"Expense_tracking"
        })
    console.log("MongoDB connected Sucessfully",conn.connection.host)
    }
    catch(err){
        console.log("MongoDB Connection Failed",err)
    }
    }


    export default connectDB;
