import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [name,setname] =useState("")
    const [mail, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigation =useNavigate()
    
    const handleRegister = () =>{
        const user = {name,mail,password}
        localStorage.setItem('user',JSON.stringify(user))
        alert(`Registered successfully`)
        navigation('/')
    }
  return (
    <>
         <div className='text-center m-5 border p-5 '>
         <input value={name} type='text' placeholder='Full Name' onChange={(e)=> setname(e.target.value)}></input><br></br>
         <br></br>
      <input value={mail} type='text' placeholder='email id' onChange={(e)=> setemail(e.target.value)}></input><br></br>
      <br></br>
      <input value={password} type='password' placeholder='password' onChange={(e)=> setpassword(e.target.value)}></input><br></br>
      <br></br>
      <button onClick={handleRegister} className='bg-success p-2'>Register</button>
     </div>
    </>
  )
}

export default Register