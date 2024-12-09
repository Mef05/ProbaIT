import React, { useState } from 'react';
import fundal_simplu from './assets/fundal_simplu.svg';
import lock from './assets/Login/lock.svg';
import mail from './assets/Login/mail.svg';
import om from './assets/Register/om.svg';
import tel from './assets/Register/tel.svg';
import Header from './Header';

function Register() {

    return (
        <div className='flex items-center justify-center'>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />
            <div className="relative mt-[2rem] h-full flex items-center justify-center ">
                <div className="bg-theBlue w-[45rem] h-[50rem] rounded-3xl">
                    <div className="flex flex-col gap-[1rem] items-center justify-center w-[70%] h-full mx-auto">
                        <h2 className="text-white text-4xl font-bold text-center mb-[4rem]">Hai, fă foamea cu noi!</h2>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4' src={om} />
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full  rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4' src={tel} />
                            <input
                                type="text"
                                placeholder="Telephone"
                                className="w-full  rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-[6px] scale-75' src={mail} />
                            <input
                                type="text"
                                placeholder="E-mail"
                                className="w-full  rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>

                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 scale-75' src={lock} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full  rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 scale-75' src={lock} />
                            <input
                                type="password"
                                placeholder="Confirm    Password"
                                className="w-full  rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <button className="mt-[4rem] bg-green-600 p-2 w-[60%] h-[4.5rem] rounded-xl text-white text-4xl font-bold">
                            Sign Up
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Register;