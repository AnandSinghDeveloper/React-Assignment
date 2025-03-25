import React from 'react'
import { Link } from 'react-router'

const SignUP = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className=' '>
      <div className="w-full h-screen p-5 ">
        <div>
          <h2 className="text-2xl font-semibold">Create your</h2>
          <h2 className="text-2xl font-semibold">PopX account</h2>
        </div>
        <form onSubmit={ (e=>{submitHandler(e)})} className='mt-5 flex flex-col items-center justify-between h-[85%] w-full' > 
        <div className='relative'>
          <label htmlFor="name" className="text-sm absolute top-0 left-5 bg-white w-25 px-2   text-purple-500 font-medium">FullName <span className='text-red-500'>*</span></label>
          <input type=" text" placeholder='Enter full name' required id="phone" className="border-2  border-[#CBCBCB] placeholder:text-sm rounded-lg w-[100%] px-4 py-2 mb-3 mt-2" />
          <label htmlFor="Phone" className="text-sm absolute top-16 left-5 bg-white w-30 px-2 text-purple-500 font-medium">Phone Number <span className='text-red-500'>*</span></label>
          <input type=" text" id="number" placeholder='Enter phone number'  required className="border-2 placeholder:text-sm border-[#CBCBCB] rounded-lg w-[100%] px-4 py-2 mb-3 mt-2" />
          <label htmlFor="Email"  className="text-sm absolute top-32 left-5 bg-white w-30 px-2 text-purple-500 font-medium">Email address <span className='text-red-500'>*</span></label>
          <input type=" email" id="email" placeholder='Enter email address' required className="border-2 placeholder:text-sm border-[#CBCBCB] rounded-lg w-[100%] px-4 py-2 mb-3 mt-2" />

          <label htmlFor="Password" className="text-sm absolute top-47 left-5 bg-white w-25 px-2 text-purple-500 font-medium">Password <span className='text-red-500'>*</span></label>
          <input type="Password" id="name" placeholder='Enter password' required className="border-2 border-[#CBCBCB] placeholder:text-sm rounded-lg w-[100%] px-4 py-2 mb-3 mt-2" />

          <label htmlFor="name" className="text-sm absolute top-63 left-5 bg-white w-25 px-2 text-purple-500 font-medium"> Company <span className='text-red-500'>*</span></label>
          <input type=" text" id="name" placeholder='Enter company' required className="border-2 border-[#CBCBCB] placeholder:text-sm rounded-lg w-[100%] px-4 py-2 mt-2" />

          <h3 className='text-lg mt-3 text-black-500 font-medium'> Are you an Agency ?<span className='text-red-500'>*</span></h3>
          <div className='inline-block'>
          <input type="radio" id="yes" name="fav_language" value="yes" className='w-5 h-4 ml-3 mt-3'/>
          <label htmlFor="yes" className="text-lg  ml-3 text-black-500 font-medium">Yes</label>
          </div>
          <div className=' inline-block '>
          <input type="radio" id="no" name="fav_language" value="no" className='w-5 h-4 ml-3  '/>
          <label htmlFor="no" className="text-lg ml-3  text-black-500 font-medium">No</label>
          </div>
          
         
        </div>
          <Link to={'/homescreen'} className='flex items-center justify-center bg-[#6C25FF] active:bg-[#5f46b9] text-white font-bold py-2 px-4 rounded  w-[100%] '>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUP
