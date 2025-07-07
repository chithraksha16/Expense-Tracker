import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        let user =await User.findOne({email})
        if(user) return res.json({message:"User already exists"})
        
        let passhash= await bcrypt.hash(password,10);
        user= await User.create({name,email,password:passhash})
        res.json({message:"User Created Sucessfully...",user})
    }
    catch(err){
        res.json({message:err.message})
    }

}


export const login=async(req,res)=>{ 
    const {email,password}=req.body
    try{
        let user= await User.findOne({email})
        if(!user) return res.json({message:"User Not exists"})
        const validpass=await bcrypt.compare(password,user.password)
        if(!validpass) return res.json({message:"Invalid Password"})

        const token=  jwt.sign({id:user._id},process.env.SECRET_KEY,{
        expiresIn:"10d"
        
        })
            res.json({message:`welcome ${user.name}`,token})
    }
    catch(err){
        res.json({message:err.message})
    }

}