import { Income } from "../models/income.model.js";


export const setIncome=async(req,res)=>{
    const {incomesource,income,year,month}=req.body;
    try{
        const incomes=await Income.create({incomesource,income,year,month})
        res.status(201).json({message:"Income Set Sucessfully",incomes })
    }
    catch(error){
        res.json({message:error.message})
    }

}

export const getIncome=async (req,res) => {
    try{
        const incomes=await Income.find()
        res.json({incomes})
    }
    catch(error){
        res.json({message:error.message})
    }
}

export const updateIncome=async(req,res)=>{
    const id=req.params.id
    try{
        const updateIncome=await Income.findByIdAndUpdate(id,{$set:req.body},{new:true})
        if(!updateIncome) return res.json({message:"Not Updated Income"})
            res.json({message:"Income Updated Sucessfully",updateIncome})
    }
    catch(error){
        res.json({message:error.message})
    }
}


export const deleteIncome=async(req,res)=>{
    const id=req.params.id;
    try{
        await Income.findByIdAndDelete(id)
        res.json({message:"Income deleted sucessfully"})
    }
    catch(error){
        res.json({message:error.message})
    }
}
