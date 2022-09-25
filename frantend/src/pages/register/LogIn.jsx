import React, { useState } from 'react'
import Announce from "../../components/Announce";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { Link} from "react-router-dom";

function LogIn() {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  
  return (
    <div>
        <Announce />
      <NavBar />
      <div className='py-5 mb-5 pl-3 font-bold text-4xl mobile:text-2xl bg-blue-200'>
      Log In 
      </div>
      <div className='grid justify-items-center'>
        {/* <AccountBoxIcon/> */}
        
        <div className='w-[500px] grid mobile:w-[350px]'>
        <input type={'email'} placeholder={'Email'} onChange={(e)=>{setEmail(e.target.value)}} className='mb-2 p-2 focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
        <input type={'password'} placeholder={'Password'} onChange={(e)=>{setPassword(e.target.value)}} className='mb-2 p-2 focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
       
        <p className='btn text-center'>LOGIN</p>
        <Link to={'/SignIn'}>
        <p className=' text-gray-500 text-center pt-5'>Create new account</p>
        </Link>
</div >
      </div>
      <Footer/>
      </div>
  )
}

export default LogIn