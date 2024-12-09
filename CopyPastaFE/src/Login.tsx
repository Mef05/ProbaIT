import React, { useState } from 'react';
import fundal_simplu from './assets/fundal_simplu.svg';
import lock from './assets/Login/lock.svg';
import mail from './assets/Login/mail.svg';
import Header from './Header';
import { Link } from 'react-router';

function Login() {

    return (
        <div className='flex items-center justify-center'>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />
            <div className="relative mt-40 h-full flex items-center justify-center ">
                <div className="bg-theBlue w-[45rem] h-[35rem] rounded-3xl">
                    <div className="flex flex-col gap-10 items-center justify-center w-[70%] h-full mx-auto">
                        <h2 className="text-white text-4xl font-bold mb-6 w-[18rem] text-center">Loghează-te, chiorăie mațele!</h2>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 w-12' src={mail} />
                            <input
                                type="text"
                                placeholder="E-mail"
                                className="w-full h-12 rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 h-12' src={lock} />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full h-12 rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <button className="bg-green-600 p-2 w-[60%] h-[4.5rem] rounded-xl text-white text-4xl font-bold hover:bg-[#218838]">
                            Log in
                        </button>
                        <Link to={'/forgotpass'} className="text-white mt-4 underline font-semibold">
                            Forgot Password?
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Login;