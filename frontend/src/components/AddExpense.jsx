import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import { showError, showSuccess } from '../libs/utils';

const AddExpense = () => {
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState(null)
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')

    const {addExpense}=useContext(AppContext)


const handleSubmit=(e)=>{
    e.preventDefault();
    try{
    const result=addExpense(title,amount,description,date)
    setTitle("")
    setAmount("")
    setDescription("")
    setDate("")
    showSuccess(result.data.message)
    }
    catch(error){
        console.error("Error:In adding expense")
        showError(error.response.data.message)
    }
}
return (
    <>
    <div className='w-full h-screen bg-black text-white'>
        <div >
            <form onSubmit={handleSubmit} >
                <div className='flex justify-center items-center '>
                    <div className='flex flex-col items-center justify-center gap-5 w-sm h-96 border-2 border-white mt-20 rounded-lg bg-gradient-to-r from-slate-700 to-slate-900 '>
                    <h1 className='text-xl font-mono font-bold text-blue-500'>Add Expense</h1>
                    <div>
                        <input type="text"
                        className='bg-gradient-to-r from-slate-900 to-slate-300 w-52 h-8  focus:outline-blue-600 focus:ring-blue-600 rounded-sm px-4'
                        name="title"
                        placeholder='Title'
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="number"
                        className='bg-gradient-to-r from-slate-900 to-slate-300 w-52 h-8  focus:outline-blue-600 focus:ring-blue-600 rounded-sm px-4 '
                        name="amount"
                        placeholder='Amount'
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="text"
                        name="description"
                        className='bg-gradient-to-r from-slate-900 to-slate-300 w-52 h-10  focus:outline-blue-600 focus:ring-blue-600 rounded-sm px-4'
                        placeholder='Description'
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="date"
                        className='bg-gradient-to-r from-slate-900 to-slate-300 w-52 h-8  focus:outline-blue-600 focus:ring-blue-600 rounded-sm px-4'
                        name="date"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-center gap-6 text-sm font-mono text-md mt-4'>
                        <button className='px-2 py-1 bg-blue-800 text-white rounded-lg'>Add Expense</button>
                        <button className='px-2 py-1 bg-red-800 text-white rounded-lg'>Cancel</button>
                    </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
)
}

export default AddExpense
