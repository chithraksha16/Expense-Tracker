
import { useState } from 'react'
import { AppContext } from './AppContext'
import axios from 'axios'
const AppState = (props) => {

  const [token,setToken]=useState('')


const register=async(name,email,password)=>{
  const api=await axios.post("http://localhost:4000/api/register",{
    name,email,password
  },
{
  headers:{
    "Content-Type":"application/json"
  },
withCredentials:true
})
return api;
}

const login=async(email,password)=>{
  try{
  const api=await axios.post("http://localhost:4000/api/login",{
    email,password
  },{
    headers:{ "Content-Type":"application/json"
    },
    withCredentials:true
  })
  setToken(api.data.token)
  return api;
  }
  catch(err){
console.log(err)
  }
}

const addExpense=async(title,amount,description,date)=>{
  const api=await axios.post("http://localhost:4000/api/addExpense",{
    title,amount,description,date
  },{
    headers:{
      "Content-Type":"application/json"
    },
    withCredentials:true
  })
  return api;
}

  return (
    <AppContext.Provider value={{register,login,addExpense}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState

