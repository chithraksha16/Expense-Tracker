import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

export const Authenticate=async(req,res,next)=>{
    const token=req.header("authorization");
    try{
        if(!token) return res.json({message:"Login First"})
        const decode=jwt.verify(token,process.env.SECRET_KEY)
        const id=decode.userId
        const user=await User.findById(id);
    if(!user) return res.json({message:"User does not exists"})
        next()
    req.user=user;
    }
    catch(err){
        res.json({message:err.message})
    }

}