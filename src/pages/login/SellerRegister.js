import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'
const SellerRegister = () => {
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [brandName, setBrandName] = useState("");
    const [brandImage, setBrandImage] = useState("");

    const Form = [
        {
            Label: "Brand Name",
            type: "text",
            placeHolder: "Enter brand title",
            value: brandName,
            onChange: (e) => setBrandName(e.target.value),
        },
        {
            Label: "Brand Image",
            type: "file",
            placeHolder: "Brand Image ",
            value: brandImage,
            onChange: (e) => {
                setBrandImage(e.target.value)
                // setThumbnail(e.target.files[0]);
            }
        },
        {
            Label: "Email",
            type: "text",
            placeHolder: "Enter email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
        },
        {
            Label: "Mobile Number",
            type: "number",
            placeHolder: "Book Value",
            value: mobileNumber,
            onChange: (e) => setMobileNumber(e.target.value),
        },
        {
            Label: "Password",
            type: "text",
            placeHolder: "Enter your password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
        },
        {
            Label: "Confirm Password",
            type: "text",
            placeHolder: "Re-enter your password",
            value: cpassword,
            onChange: (e) => setCPassword(e.target.value),
        },
       

    ];

    const chunkArray = (arr, chunkSize) => {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunkedArray.push(arr.slice(i, i + chunkSize));
        }
        return chunkedArray;
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== cpassword)
            return toast.error('Password does not matched');
        if(!brandName || !brandImage || !email || !mobileNumber || !password )
            return toast.error('Please fill all the details');

    };

    return (
        <div className='lg:me-6 me-2 my-3 p-6 flex justify-center items-center '>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className='w-[600px] px-6 py-5 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                <h1 className='text-2xl font-semibold tracking-wide text-center'>Register Your Brand</h1>
                <div className="my-4 rounded-[10px] bg-white  ">
                    <form action="" onSubmit={submitHandler} encType="multipart/form-data">
                        {chunkArray(Form, 2).map((row, rowIndex) => (
                            <div key={rowIndex} className="lg:mb-4 flex flex-wrap">
                                {row.map((item, index) => (
                                    <div key={index} className="lg:w-1/2 w-full pr-2">
                                        <label htmlFor={item.Label}>{item.Label}</label>
                                        <input
                                            type={item.type}
                                            placeholder={item.placeHolder}
                                            value={item.value}
                                            onChange={item.onChange}
                                            className="text-lg outline-none border border-[#FCAE2A] rounded text-[#6C7383] px-[10px] py-[8px] w-full mb-1"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}

                        <button type="submit"
                            className="block px-[1.75rem] py-2 rounded-lg bg-[#FCAE2A] hover:bg-[#7978E9] text-white text-xl">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}




export default SellerRegister