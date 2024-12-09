import React, { useState } from 'react';
import fundal_simplu from './assets/fundal_simplu.svg';
import lock from './assets/Login/lock.svg';
import mail from './assets/Login/mail.svg';
import Header from './Header';

function Forgot() {

    return (
        <div className='flex items-center justify-center'>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />
            <div className="relative mt-40 h-full flex items-center justify-center ">
                <div className="bg-theBlue w-[50rem] h-[40rem] rounded-3xl">
                    <div className="flex flex-col gap-[6rem] items-center justify-center w-[70%] h-full mx-auto">
                        <h2 className="text-white text-5xl font-extrabold mb-6 text-center">Forgot password</h2>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 w-12' src={mail} />
                            <input
                                type="text"
                                placeholder="E-mail"
                                className="w-full h-12 rounded-md bg-theBlue text-white 
                            placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <button className="bg-green-600 p-2 w-[80%] h-20 rounded-xl text-white text-5xl font-bold shadow-black hover:bg-[#218838]">
                            Send
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );

};

export default Forgot;