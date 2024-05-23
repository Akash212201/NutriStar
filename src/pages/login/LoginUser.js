import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

const LoginUser = () => {
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState('');
    const Form = [
        {
            Label: "Mobile Number",
            type: "number",
            placeHolder: "Mobile Number Here",
            value: mobileNumber,
            onChange: (e) => setMobileNumber(e.target.value),
        },
        {
            Label: "Password",
            type: "password",
            placeHolder: "Password Here",
            value: password,
            onChange: (e) => setPassword(e.target.value),
        }
    ]; 

    const submitHandler = (e) => {
        e.preventDefault();
       
        if (mobileNumber === "") {
            toast.error('Please enter your email');

        }
        else if (password === "") {
            toast.error('Please enter your password');

        }
        else {
            setPassword("")
            setMobileNumber('')
        }

    };
    return (
        <div className="flex justify-center items-center py-10 bg-[#f6f6f6]">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="w-[450px] rounded-[10px] bg-white px-6 pt-10 pb-2">
                <h1 className='text-center text-3xl mb-4 font-semibold'>Login</h1>
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
                        <div>
                            <input type="checkbox" className="my-4" /> Remember me!
                        </div>
                        <div>
                            <Link to="/forgetpassword" className="text-[#FCAE2A] b">
                                Forget password Click Here
                            </Link>
                        </div>
                    </div>
                    <button value="submit" className="block p-[10px] w-full bg-[#FCAE2A] text-white text-xl ">Login</button>
                </form>
                <div className="text-center text-[#ff513a] my-4 hover:text-blue-800">
                    <Link to="/user/signup">New Here Click me</Link>
                    </div>
            </div>
        </div>
    )
}

export default LoginUser