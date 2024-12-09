import React from 'react';
import fundal_simplu from './assets/fundal_simplu.svg';
import lupa from './assets/Search/lupa.svg';
import { FaCheckSquare, FaStar, FaUserCheck } from 'react-icons/fa';
import sageata from './assets/Search/sageata.svg';
import Recipe from './custom_types/reteta';

const renderStars = (stars: number) => {
    return (
        <div style={{ display: 'inline-flex' }}>
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < stars ? "orange" : "white"} size={25} />
            ))}
        </div>
    );
};

const renderRecipies = (rows: number) => {
    return (

        <div className='flex justify-center gap-[3rem] w-full flex-wrap my-12'>
            {
                [...Array(rows)].map((_, i) => (
                    <div className='flex gap-12 py-[5rem]'>
                        <Recipe title='Title' stars={5} nr_rating={5} author='Author' image_src='https://media.tenor.com/fy5_55bVdT4AAAAe/burgir.png' />
                    </div>
                ))
            }
        </div >



    );
};

function Search() {

    return (
        <div>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />

            <div className='flex flex-col h-auto w-full items-center gap-10 mt-[4rem]'>
                <div className='flex justify-center h-[3.5rem] border-2 border-black rounded-xl w-[40vw]'>
                    <input className='w-full h-full rounded-xl ml-4 outline-none text-2xl placeholder:text-black placeholder:text-2xl'
                        type="text"
                        placeholder="Search"
                    />
                    <button className='flex items-center'><img className='scale-50' src={lupa} /></button>
                </div>
                <div className='flex gap-40 items-start'>
                    <div className='flex flex-col items-center justify-center group rounded-2xl hover:bg-gray-100'>
                        <div className='flex justify-center items-center text-xl font-semibold rounded-2xl w-[11rem] h-10 shadow z-10 bg-white hover:bg-white'>
                            <h2 className='w-full pl-4'>Filters</h2>
                            <img className='scale-75 pr-2' src={sageata} />
                        </div>
                        <div className='hidden group-hover:block bg-gray-100 p-4 rounded-b-xl shadow-lg'>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'>{renderStars(5)} <input className='scale-125' type='checkbox' /></div>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'>{renderStars(4)} <input className='scale-125' type='checkbox' /></div>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'>{renderStars(3)} <input className='scale-125' type='checkbox' /></div>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'>{renderStars(2)} <input className='scale-125' type='checkbox' /></div>
                            <div className='flex items-center justify-center gap-x-2 py-1'>{renderStars(1)} <input className='scale-125' type='checkbox' /></div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center group rounded-2xl hover:bg-gray-100'>
                        <div className='flex justify-center items-center text-xl font-semibold rounded-2xl w-[11rem] h-10 shadow z-10 bg-white hover:bg-white'>
                            <h2 className='w-full pl-4'>Sort</h2>
                            <img className='scale-75 pr-2' src={sageata} />
                        </div>
                        <div className='hidden group-hover:block bg-gray-100 p-4 rounded-b-xl w-full shadow-lg font-bold'>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'><button className=''>Top rated</button></div>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'><button className=''>Worst rated</button></div>
                            <div className='flex items-center justify-center gap-x-2 border-b-2 border-gray-200 py-1'><button className=''>Most rated</button></div>
                            <div className='flex items-center justify-center gap-x-2 py-1'><button className=''>Least rated</button></div>
                        </div>
                    </div>
                </div>

                <div className='w-[90vw]'>{renderRecipies(10)}</div>
            </div>
        </div >
    );
};

export default Search;