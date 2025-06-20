import React, { useState } from 'react'
 
const Register = () => {
  let [formData,setFromData]=useState([])
  const[errorMessage,setErrorMessage]=useState("")
  let handleChange=(e)=>{
    let{name,value}=e.target
    if(name=="password"){
      let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)
      // console.log(getAllValidationErrorMessage());
      validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
      value==""&&setErrorMessage("")
    }
    setFromData({...formData,[name]:value})
  }
  const [matched,SetMatched]=useState(true)
  const handleCheckPassword=(e)=>{
    let {value}=e.target
    formData.password!=value?SetMatched(false):SetMatched(true)
    value=""&&SetMatched(false)
  }
   
  let handleSubmit=(e)=>{
    e.preventDefault()
    let {name,userName,password,email}=formData
    if(!name||!userName||!password||!email){
      toast.error("All feilds are mandatory")
      return
    }
    let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
    if(!validateAll()){
      toast.error(`${getAllValidationErrorMessage()}`)
    }
    if(!matched){
      toast.error("passsword and confirm password did not match")
  return
    }
 
    console.log(formData);
  }
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center '>
      <form action="" className='w-1/2 h-3/4 rounded-2xl bg-white shadow-2xl flex items-center flex-col gap-4 px-20 py-40 max-sm:w-[80%]' onSubmit={handleSubmit}>
        <div className='w-full flex justify-center items-center ' >
          <h1 className='text-3xl max-lg:text-sm max-sm:text-sm'>Registraion Form</h1>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
          <input type="text" name="name" placeholder='Enter Name' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
          <input type="text" name="username" placeholder='Enter UserName'   className='w-full outline-none px-4 h-10'onChange={handleChange}/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
          <input type="email" name="email" placeholder='Enter Email'  className='w-full outline-none px-4 h-10'onChange={handleChange}/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
          <input type="password" name="password" placeholder='Enter Password'  className='w-full outline-none px-4 h-10'onChange={handleChange}/>
        </div>

        <div className={`border-2 w-full flex justify-center items-center px-3 rounded-sm ${matched?'border-black':'border-red-700'}`}  >
          <input type="password" name="" placeholder='Re-Enter Password'  className='w-full outline-none px-4 h-10' onChange={handleCheckPassword}/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm bg-blue-300'>
          <button  className='w-full outline-none px-4 h-10 '>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register