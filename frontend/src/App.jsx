import './App.css'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';
import AddExpense from './components/AddExpense'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/addExpense' element={<AddExpense/>} />
      </Route>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
