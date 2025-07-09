import './App.css'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Dropdown from './components/Dropdown'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify';

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/drop" element={<Dropdown/>}/>
      <Route index element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
