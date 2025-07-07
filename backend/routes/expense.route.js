import express from 'express';
import {addExpense,getExpense,deleteExpense,updateExpense} from '../controllers/expense.controller.js';
import { Authenticate } from '../middleware/auth.middleware.js';
const router=express.Router();


router.post("/addExpense",Authenticate,addExpense);

router.get("/AllExpense",getExpense);

router.delete("/delete/:id",deleteExpense)

router.put("/update/:id",updateExpense)


export default router