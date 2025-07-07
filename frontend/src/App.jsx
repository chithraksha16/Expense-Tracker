import './App.css'
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Dropdown from './components/Dropdown'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/drop" element={<Dropdown/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
