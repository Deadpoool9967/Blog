import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { UserAuth } from '../contex/AuthContex';
import { resolve } from 'path';

const Navba = () => {
  const {user,googleSignIn,logOut}= UserAuth();
  const [loading , setLoading] = useState(true)
const handleSignIn = async()=>{
  try{
    await googleSignIn()
  }catch(error){
    console.log(error)
  }

};
const handleSignOut= async ()=>{
  try{
    await logOut();
  }catch(error){
    console.log(error)
  }
}
useEffect(()=>{
  const checkAuthentication = async () =>{
    await new Promise((resolve) => setTimeout(resolve,50))
    setLoading(false)
  }
  checkAuthentication()
},user);
  return (
           <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
      
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Thought Sphere</span>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  
  {loading ? null :!user ?(
  <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
          Sign Up
          </li>
        </ul>) : (
          <div>
            <p> Welcome {user.displayName}</p>
            <p className="cursor-pointer" onClick={handleSignOut}>Sign Out</p>
          </div>
        )}
     
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link href="/homepage" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="/catogery" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
      </li>
      
      <li>
        <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
      </li>


      <li>
        <Link href="/user" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Create</Link>
      </li>

      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About us</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

export default Navba