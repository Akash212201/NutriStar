import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast'

const RegisterUser = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const Form = [
    {
      Label: "Your Mobile Number",
      type: "number",
      placeHolder: "Enter your mobile Number",
      value: mobileNumber,
      onChange: (e) => setMobileNumber(e.target.value),
    },
    {
      Label: "Email",
      type: "email",
      placeHolder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      Label: "Password",
      type: "password",
      placeHolder: "Password here",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      Label: "Confirm Password",
      type: "password",
      placeHolder: "Re-enter password here",
      value: cpassword,
      onChange: (e) => setCpassword(e.target.value),
    },
  ];

  const submitHandler = async(e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.error('Password does not match');
      return;
    }
    if (email === "") {
      toast.error('Please enter your email');
      return;
    }
    if (password === "") {
      toast.error('Please enter your password');
      return;
    }
    if (password.length < 6) {
      toast.error('Minimum password length is 6');
      return;
    }
    setMobileNumber("")
    setEmail("")
    setPassword("")
    setCpassword("")


  };
  return (
    <div className="flex justify-center items-center py-10 bg-[#f6f6f6]">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-[450px] rounded-[10px] bg-white px-6 py-8">
        <h1 className='text-center text-3xl mb-2 font-semibold'>Sign Up</h1>
        <form action="" onSubmit={submitHandler}>
          {
            Form.map((item, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={item.Label}>{item.Label}</label>
                <input
                  type={item.type}
                  placeholder={item.placeHolder}
                  value={item.value}
                  onChange={item.onChange}
                  className="text-lg input outline-none border border-[#FCAE2A] rounded px-[10px] py-[8px] w-[100%] mb-1"
                />
              </div>
            ))}
          <div className="flex justify-between items-center mb-[2vh]">
            <Link to="/user/login" className="text-[#FCAE2A] b">
              back
            </Link>
            <Link to="/seller/signup" className="text-[#FCAE2A] b">
              Register as a seller
            </Link>
          </div>
          <button value="submit" className="block p-[10px] w-full bg-[#FCAE2A] text-white text-xl ">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterUser