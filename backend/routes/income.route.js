import express from 'express'
import {setIncome,getIncome,updateIncome,deleteIncome} from '../controllers/income.controller.js'
import {Authenticate} from '../middleware/auth.middleware.js'
const router=express.Router();


router.post("/addIncome",Authenticate,setIncome)
router.get("/",getIncome)
router.put("/updateIncome/:id",updateIncome)
router.delete("/deleteIncome/:id",deleteIncome)




export default router