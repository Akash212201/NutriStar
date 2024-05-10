import React, { useState } from 'react';

const AskQuestion = () => {
    const [visible, setVisible] = useState({});

    const questions = [
        {
            title: "Do you offer freelancers?",
            subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente doloribus consequuntur enim repellat at adipisci culpa vel aliquam rerum corporis."
        },
        {
            title: "What's the guarantee that I will be satisfied with the hired talent?",
            subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente doloribus consequuntur enim repellat at adipisci culpa vel aliquam rerum corporis."
        },
        {
            title: "Can I hire multiple talents at once?",
            subtitle: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution."
        },
        {
            title: "Why should I not go to an agency directly?",
            subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente doloribus consequuntur enim repellat at adipisci culpa vel aliquam rerum corporis."
        },
        {
            title: "Who can help me pick a right skillset and duration for me?",
            subtitle: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente doloribus consequuntur enim repellat at adipisci culpa vel aliquam rerum corporis."
        },
    ];

    const toggleVisibility = (idx) => {
        setVisible(prevState => ({
            ...prevState,
            [idx]: !prevState[idx]
        }));
    };

    return (
        <div className='bg-[#e8eee7] rounded-[40px] py-10 relative mt-[9rem]'>
            <h1 className='text-[#9E9D9D] text-xl font-secondary font-normal px-20'>
                What’s on your mind
            </h1>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <h1 className='text-[3rem] font-primary font-semibold px-20 mb-10'>Ask Question</h1>
                    <svg width="491" height="475" viewBox="0 0 491 475" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute -bottom-6 w-[390px] h-[410px]'>
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z" fill="url(#paint0_linear_0_212)" />
                        <defs>
                            <linearGradient id="paint0_linear_0_212" x1="245.5" y1="2.84126e-08" x2="245" y2="457.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div className='w-1/2 pt-6 pe-20'>
                    {
                        questions.map((question, idx) => (
                            <div key={idx} className='border-b border-b-[#d7d7d7] ms-12 mb-8 pb-4'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='font-primary font-semibold text-[20px]'>{question.title}</h1>
                                    <span className='text-2xl cursor-pointer' onClick={() => toggleVisibility(idx)}>
                                        {visible[idx] ? '-' : '+'}
                                    </span>
                                </div>

                                <div className=' text-[#617275] font-normal text-[1rem]'>
                                    {visible[idx] && <p>{question.subtitle}</p>}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default AskQuestion;
