import React from 'react'

const Register = () => {
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center '>
      <form action="" className='w-1/2 h-3/4 rounded-2xl bg-white shadow-2xl flex justify-center items-center flex-col gap-4 px-20 py-40 '>
        <div className='w-full flex justify-center items-center '>
          <h1 className='text-3xl'>Registraion Form</h1>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="" placeholder='Enter Name' className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="" placeholder='Enter UserName'   className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="email" name="" placeholder='Enter Email'  className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="" placeholder='Enter Password'  className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="" placeholder='Re-Enter Password'  className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm bg-blue-300'>
          <button  className='w-full outline-none px-4 h-10 '>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register