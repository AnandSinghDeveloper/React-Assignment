import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="">
      <div className="flex w-full flex-col items-center justify-between h-screen p-5">
         <img  src="" alt="image" />
        <div>
          <div >
            <h2 className="text-2xl font-bold text-left">Welcome to PopX</h2>
            <p className='text-left opacity-50 text-sm w-60 mr-20 '>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            </p>
         </div>
           <div className='mt-10 flex flex-col items-center justify-center '>
             <Link to={"/signup"} className=" flex  items-center justify-center bg-[#6C25FF] active:bg-purple-700 text-white font-bold py-2 px-4 rounded mb-3 w-full"> Create Account</Link>
             <Link to={"/login"} className=" flex items-center justify-center bg-[#CEBAFB] active:bg-purple-500 text-black font-bold py-2 px-4 rounded  w-full">Already Registered? Login</Link>
           </div>
        
       </div>

      </div>
    </div>
  )
}

export default Home
