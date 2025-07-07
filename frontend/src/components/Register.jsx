import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import {ToastContainer,Bounce,toast} from 'react-toastify'
import "react-toastify/ReactToastify.css"
const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const {register} =useContext(AppContext);

    const handleSubmit=async(e)=>{
            e.preventDefault();
            const result =await register(name,email,password)
            
        toast.success(result.data.message,{
        position:"top-right",
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        progress:undefined,
        theme:"dark",
        transition:Bounce,
    });
    }
  return (
    <>
    <ToastContainer/>
    <div className='max-w-full h-screen bg-black text-white flex justify-center '>
        <div className='flex justify-center items-center'>
        <div className='w-[400px] h-[450px] bg-slate-800 border-2 border-amber-400 rounded-lg py-6 '>
            <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-2 justify-center'>
                <div className='text-lg font-mono font-extrabold '><span className='text-blue-600 line-through animate-pulse text-2xl'>Expense</span> Tracking</div>
                <h2 className='text-md font-medium space-x-1 line-clamp-2 flex justify-center mb-4'>Register</h2>
            </div>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 ml-12 '>
                <div>
                    <label htmlFor="inputName">Name:</label>
                    <br />
                    <input type="text" 
                    className='w-2xs bg-slate-600 h-8 rounded-lg outline-offset-2 outline-sky-500 focus:outline-2 p-1 mt-1'
                    name="name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    id="inputname" />
                </div>
                <div>
                    <label htmlFor="inputEmail">Email:</label>
                    <br />
                    <input type="email" 
                    className='w-2xs bg-slate-600 h-8 rounded-lg outline-offset-2 outline-sky-500 focus:outline-2 p-1 mt-1'
                    name="email" 
                    value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                    id="inputEmail" />
                </div>
                <div>
                    <label htmlFor="inputPassword">Password:</label>
                    <br />
                    <input type="password"
                    className='w-2xs bg-slate-600 h-8 rounded-lg outline-offset-2 outline-sky-500 focus:outline-2 p-1 mt-1'
                    name="password" 
                    value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                    id="inputPassword" />
                </div>
                <div className='flex mt-3 ml-24 ' >
                    <button className='text-sm font-serif bg-blue-500 text-white shadow-xs py-1 px-8 rounded-xl hover:bg-blue-800 hover:text-amber-50'>Register</button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Register
