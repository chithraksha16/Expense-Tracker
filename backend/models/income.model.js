import mongoose from 'mongoose'

const incomeSchema=mongoose.Schema({
    incomesource:{
        type:String,
        required:true
    },
    income:{
        type:Number,
        required:true
    },
    year:{
      type:Number,
      required:true
    },
    month: {
    type: String,
    enum: [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ],
    required: true
}
})

export const Income=mongoose.model("Income",incomeSchema)