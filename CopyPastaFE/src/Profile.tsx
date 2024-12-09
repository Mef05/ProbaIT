import React from 'react';
import fundal_simplu from './assets/fundal_simplu.svg';
import bucatar from './assets/Profil/bucatar.svg';
import { Link } from 'react-router';

interface ProfileProps {
    name: string;
    email: string;
    telephone: string;
    collegeGroup: string;
}

function Profile({ name, email, telephone, collegeGroup }: ProfileProps) {
    return (
        <div>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />
            <div className='flex flex-col gap-[8rem] h-[88vh] justify-center items-center'>
                <div className='flex h-1/2 w-full gap-[20rem] justify-center'>
                    <div className='bg-theBlue w-[25%] h-full rounded-2xl
                                    flex flex-col justify-center items-center gap-10'>
                        <img className='h-1/2 rounded-2xl' src={bucatar} alt="bucatar" />
                        <h1 className='text-white text-2xl border-b-2 border-white w-[80%]'>{name}</h1>
                    </div>
                    <div className='bg-theBlue w-[35%] h-full rounded-2xl
                                    flex flex-col justify-center items-center gap-14'>
                        <h1 className='text-white text-4xl border-b-2 border-white w-[80%]'>Email: {email}</h1>
                        <h1 className='text-white text-4xl border-b-2 border-white w-[80%]'>Telephone: {telephone}</h1>
                        <h1 className='text-white text-4xl border-b-2 border-white w-[80%]'>College group: {collegeGroup}</h1>
                    </div>
                </div>
                <button className="bg-green-600 p-2 w-[16%] h-[4.5rem] rounded-xl text-white text-4xl font-bold hover:bg-[#218838]">
                    <Link to={'/add_recipe'}>Add a recipe</Link>
                </button>
            </div>
        </div>
    );
}

export default Profile;