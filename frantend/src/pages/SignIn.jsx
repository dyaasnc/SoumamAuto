import React, { useState } from 'react'
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function SignIn() {
  const [email, setEmail] =useState('')
  const [passWord,setPassWord] = useState('')
  const [confirmPW,setconfirmPW] = useState('')
 
  
  return (
    <div>
        <Announce />
      <NavBar />
      <div className='py-5 pl-3 font-bold text-4xl mobile:text-2xl bg-blue-200'>
      Create account 
      
      </div>
      <div className='grid justify-items-center pt-5'>
        {/* <AccountBoxIcon/> */}
        <div className='w-[500px] mobile:w-[350px] '>
        <input type={'text'} placeholder={'First Name'} className='mb-2 p-2 w-[50%] focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
        <input  type={'text'} placeholder={'Last Name'} className='w-[50%] p-2 focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
        </div>
        <div className='w-[500px] grid mobile:w-[350px]'>
        <input type={'email'} placeholder={'Email'} onChange={(e)=>{setEmail(e.target.value)}} className='mb-2 p-2 focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
        <input type={'password'} placeholder={'Password'} onChange={(e)=>{setPassWord(e.target.value)}} className='mb-2 p-2 focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
        <input type={'password'} placeholder={'confirm your password'} onChange={(e)=>{setconfirmPW(e.target.value)}} className='mb-2 p-2 focus-within:border-blue-400 border-[2px] border-solid border-grey rounded-md input outline-none'/>
        <div className='flex justify-center items-center'>
          
        {confirmPW=== ''
        ?''
        :confirmPW ===passWord
           ?<CheckIcon/>
           :<p className=' text-red-600'>Check your Password<CloseIcon/>
           </p>}
        </div>
        <p className='btn text-center'>Create account </p>
        <Link to={'/LogIn'}>
        <p className='text-gray-500 text-center pt-5'>Already have an account?</p>
        </Link>
</div >
      </div>
      <Footer/>
      </div>
  )
}

export default SignIn