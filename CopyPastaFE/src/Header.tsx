import React from 'react';
import chefIT from './assets/chefIT.svg';
import { Link } from 'react-router';

interface HeaderProps {
    userState: 'login' | 'logout' | 'profile';
}

function Header({ userState }: HeaderProps) {
    return (
        <header className="z-50 flex justify-between items-center p-4 bg-theBlue shadow-lg shadow-black rounded-b-3xl h-[6rem] text-white">
            <div className="flex items-center gap-16">
                <Link to={'/'}>
                    <img src={chefIT} alt="chefIT logo" className="h-18 mx-10" />
                </Link>
                <nav>
                    <ul className="flex space-x-10 text-[1.5rem] text-white font-bold">
                        <li className="hover:text-gray-400 cursor-pointer"><Link to={'/search'}>Recipes</Link></li>
                        <li className="hover:text-gray-400 cursor-pointer"><Link to={'/add_recipe'}>Add Recipe</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='flex space-x-4'>
                {userState === 'logout' && (
                    <button className=" text-white gap-8 py-2 px-8 cursor-pointer text-[1.5rem] font-bold border-solid border-4 rounded-[1.2rem] border-[#002366]  hover:border-white" >Log out</button>
                )}

                {userState === 'login' && (
                    <>
                        <button className=" text-white gap-8 py-2 px-8 cursor-pointer text-[1.5rem] font-bold border-solid border-4 rounded-[1.2rem] border-[#002366]  hover:border-white" ><Link to={'/login'}>Login</Link></button>
                        <button className=" text-white gap-8 py-2 px-8 cursor-pointer text-[1.5rem] font-bold border-solid border-4 rounded-[1.2rem] border-[#002366]  hover:border-white" ><Link to={'/register'}>Register</Link></button>
                    </>
                )}

                {userState === 'profile' && (
                    <button className=" text-white gap-8 py-2 px-8 cursor-pointer text-[1.5rem] font-bold border-solid border-4 rounded-[1.2rem] border-[#002366]  hover:border-white" ><Link to={'/profile'}>Profile</Link></button>
                )}
            </div>
        </header>
    );
}

export default Header