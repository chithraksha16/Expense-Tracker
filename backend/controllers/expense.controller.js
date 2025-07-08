import Expense from "../models/expense.model.js";



export const addExpense=async(req,res)=>{
    const {title,amount,description,date}=req.body
    try{
        const expense=await Expense.create({title,amount,description ,date:new Date(date)})
        res.json({message:"Expense Created",expense})
    }
    catch(err){
        res.json({message:err.message})
    }

}

export const getExpense=async(req,res)=>{
    const userId=req.user._id
    if(!userId) return res.status(400).json({message:"User not existed"})
    const expense=await Expense.find({user:userId});
    res.json({expense})
}

export const deleteExpense=async(req,res)=>{
    const id=req.params.id
    try{
        await Expense.findByIdAndDelete(id)
        res.json({message:" Expense Deleted"})
    }
    catch(err){
        res.json({message:err.message})
    }
}


export const updateExpense=async(req,res)=>{
    const id=req.params.id
    try{
        const updateExp=await Expense.findByIdAndUpdate(id,{$set:req.body},{new:true})
        if(!updateExp) return res.status(400).json({message:"Expense Not Updated"})
            res.status(200).json({message:"Expense Sucessfully Updated",updateExp})
    }
    catch(err){
        res.json({message:err.message})
    }

}