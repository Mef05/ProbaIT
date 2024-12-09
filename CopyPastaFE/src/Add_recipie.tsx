import React from "react";
import Link from "react-router-dom";
import fundal_simplu from './assets/fundal_simplu.svg';
import clip from './assets/AddRecepie/clip.svg'

function AddRecipie() {
    return (
        <div className='flex items-center justify-center'>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />
            <div className="relative mt-40 h-full flex items-center justify-center ">
                <div className="bg-theBlue w-[40rem] h-[40rem] rounded-3xl">
                    <div className="flex flex-col gap-[4rem] items-center justify-center w-[80%] h-full mx-auto">
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <input
                                type="text"
                                placeholder="Recipie name:"
                                className="w-full h-12 rounded-md bg-theBlue text-white text-3xl
                        placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <input
                                type="text"
                                placeholder="Descrpiton:"
                                className="w-full h-12 rounded-md bg-theBlue text-white text-3xl
                        placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <button className="border-2 border-white h-[3rem] w-[15rem] rounded-2xl text-white text-2xl flex items-center justify-center gap-2">
                            <img src={clip} alt="clip icon" className="h-6 w-6" />
                            Upload photo
                        </button>
                        <button className="bg-green-600 p-2 w-[70%] h-20 rounded-xl text-white text-4xl font-bold shadow-black hover:bg-[#218838]">
                            Add recipe
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddRecipie;