import React, { useState } from 'react'

const FormValidation = () => {
  const formData = {
    Name: "",
    Email: "",
    Password: "",
    ConfirmPassword:"",
  }
  const [formValue, setFormValidation] = useState(formData)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target; // Get the name and value from the input field
  //   setFormValidation((prevFormValue) => ({
  //     ...prevFormValue,
  //     [name]: value, // Update the correct field dynamically based on the name
  //   }));
  // };
  
  const handleClick = (e) => {
    e.preventDefault()
    
    const newErrors = {};
    if (!formValue.Name) {
      newErrors.Name = "Name is required";
    }
    if (!formValue.Email) {
      newErrors.Email = "Email is required";
    }
    if (!formValue.Password) {
      newErrors.Password = "Password is required";
    }
    if (formValue.Password !== formValue.ConfirmPassword) {
      newErrors.ConfirmPassword = "Passwords do not match";
    }
  }
  return (
    <div className='py-12'>
      <div className='container'>
        <h3 className='font-inter font-semibold text-4xl text-black text-center pb-9'>Form Validation</h3>
        <form onSubmit={handleClick} action="" className='flex flex-col justify-center items-center gap-3'>
          <input onChange={(e)=>setFormValidation({...formValue,formValue,Name:e.target.value})} value={formValue.Name} type="text" placeholder='Name' className='border border-black p-2 w-96 outline-none rounded' />
          {errors.name && <div className="text-red-500">{errors.name}</div>}
          <input type="text" placeholder='Email' className='border border-black p-2 w-96 outline-none rounded' />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
          <input type="text" placeholder='Password' className='border border-black p-2 w-96 outline-none rounded' />
          {errors.password && <div className="text-red-500">{errors.password}</div>}
          <input type="text" placeholder='Confirm Password' className='border border-black p-2 w-96 outline-none rounded' />
          {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
        </form>
        <button type='submit' className='mx-auto'>btn</button>
      </div>
    </div>
  )
}

export default FormValidation
