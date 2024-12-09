import React, { useState } from 'react';
import fundal_simplu from './assets/fundal_simplu.svg';
import lock from './assets/Login/lock.svg';
import mail from './assets/Login/mail.svg';
import Header from './Header';
import { Link } from 'react-router';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                alert('Login successful');
                // Save the token to localStorage or context
                localStorage.setItem('token', data.token);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='flex items-center justify-center'>
            <img className='p-0 m-0 border-0 w-full h-full absolute top-0 left-0 -z-10' src={fundal_simplu} alt="background" />
            <div className="relative mt-40 h-full flex items-center justify-center ">
                <div className="bg-theBlue w-[45rem] h-[35rem] rounded-3xl">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center justify-center w-[70%] h-full mx-auto">
                        <h2 className="text-white text-4xl font-bold mb-6 w-[18rem] text-center">Loghează-te, chiorăie mațele!</h2>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 w-12' src={mail} />
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full h-12 rounded-md bg-theBlue text-white outline-none placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <div className='bg-theBlue w-full h-[4rem] border-b-2 border-opacity-50 border-white flex items-center'>
                            <img className='mx-4 h-12' src={lock} />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full h-12 rounded-md bg-theBlue text-white outline-none placeholder:bg-theBlue placeholder:text-white placeholder:font-semibold"
                            />
                        </div>
                        <button type="submit" className="bg-green-600 p-2 w-[60%] h-[4.5rem] rounded-xl text-white text-4xl font-bold hover:bg-[#218838]">
                            Log in
                        </button>
                        <Link to={'/forgotpass'} className="text-white mt-4 underline font-semibold">
                            Forgot Password?
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;