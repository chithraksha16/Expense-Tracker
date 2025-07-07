import express from 'express'
import {register,login} from '../controllers/user.controller.js'
const router=express.Router();

//user Register routes
router.post("/register",register);

//user login routes
router.post("/login",login)


export default router