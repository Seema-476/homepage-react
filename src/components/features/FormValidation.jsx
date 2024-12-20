import React, { useState } from 'react'
import swal from 'sweetalert';

const FormValidation = () => {
  // const [value, setValue] = useState(formData)
  // const formData = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    const errors = {
      name: formData.name ? "" : "name is required",
      email: formData.email ? (validateEmail(formData.email) ? "" : "invalid email") : "email is required",
      password: formData.password ? "" : "Password is required",
      confirmPassword: formData.confirmPassword ?
        (formData.password === formData.confirmPassword ? "" : "Password not match") : "Confirm password is required",
    };
    setError(errors);
    if (!Object.values(errors).some(error => error)) {
      console.log("Submitted values:");
      setFormData({formData});
      swal({
        title: "Form Submitted Successfully!",
        text: "Your form has been submitted. Do you want to proceed?",
        icon: "success",
        buttons: ["Cancel", "Proceed"],
        dangerMode: true,
      });
    }
  };

  return (
    <div className='py-12'>
      <div className='container'>
        <h3 className='font-inter font-semibold md:text-5xl text-3xl text-black text-center pb-9'>Form Validation</h3>
        <form onSubmit={handelSubmit} className='flex flex-col justify-center items-center gap-3 max-w-[400px] mx-auto w-full'>
          {/* <div className='w-full mx-auto text-center'>
            <input
              type="text"
              placeholder='Name'
              className="p-2 border border-black w-80 rounded outline-none"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
              value={value.name} />
            {error.name && <p className="mt-1 text-red-500">{error.name}</p>}
          </div> */}
          <div className='w-full mx-auto text-center'>
            <input
              type="email"
              placeholder='Email'
              className="p-2 border border-black w-80 rounded outline-none"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email} />
            {error.email && <p className="mt-1 text-red-500">{error.email}</p>}
          </div>
          <div className='w-full mx-auto text-center'>
            <div className="p-2 border border-black w-80 rounded mx-auto">
              <div className='flex justify-between'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  autoComplete='new-password'
                  className='outline-none w-full' onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  value={formData.password} />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500">{showPassword ? 'Hide' : 'Show'}</button>
              </div>
            </div>
            {error.password && <p className="mt-1 text-red-500">{error.password}</p>}
          </div>
          <div className='w-full mx-auto text-center'>
            <div className="p-2 border border-black w-80 rounded mx-auto" >
              <div className='flex justify-between'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  className="outline-none w-full"
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  value={formData.confirmPassword} />
                <button type="button" onClick={() => setConfirmPassword(!showConfirmPassword)}
                  className="text-gray-500">{showConfirmPassword ? 'Hide' : 'Show'}</button>
              </div>
            </div>
            {error.confirmPassword && <p className="mt-1 text-red-500">{error.confirmPassword}</p>}
          </div>
          <div className="flex flex-col">
            <label className="text-black">Select a color</label>
            <select
              name="selectOption" onChange={(e) => setFormData({ ...formData, selectOption: e.target.value })}
              value={formData.selectOption}
              className="p-2 border border-black w-80 rounded outline-none">
              <option value="Red">Red</option>
              <option value="BLue">Blue</option>
            </select>
          </div>
          <div className='mx-auto text-center mt-5'>
            <button type='submit' className='bg-black py-2 px-5 rounded text-white font-medium hover:scale-95 duration-700'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormValidation
