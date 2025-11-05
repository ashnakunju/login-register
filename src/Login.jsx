import React, { useState } from 'react'

function Login() {

    const [mail, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [loggedin , setloggedin] = useState("false")
    const [username, setusername] = useState("")

    const handleLogin = () =>{
         const data= JSON.parse(localStorage.getItem('user'))
        if(data.email==mail && data.password==password){
            localStorage.setItem('isloggedin',true)
            setusername(data.name)
            setloggedin(true)
        }else{
            alert(`invalid credentials`)
        }
        
        
    }
  return (
    <>
         <div className='text-center m-5 border p-5 '>
      {!loggedin? (
        <>
            <input value={mail} type='text' placeholder='email id' onChange={(e)=> setemail(e.target.value)}></input><br></br>
      <br></br>
      <input value={password} type='password' placeholder='password' onChange={(e)=> setpassword(e.target.value)}></input><br></br>
      <br></br>
      <button onClick={handleLogin} className='bg-success p-2'>LOGIN</button>
        </>
      )
      :(
        <p>you are logged in</p>
      )
      
      }
     </div>
    </>
  )
}

export default Login