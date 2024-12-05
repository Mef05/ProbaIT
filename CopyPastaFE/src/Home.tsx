import React from 'react';
import fundalHome from './assets/fundalHome.svg';
import footer from './assets/footer.svg';
import yt from './assets/yt.svg';
import fb from './assets/fb.svg';
import insta from './assets/insta.svg';
import tw from './assets/tw.svg';


function Home() {
    return (
        <div className='bg-white'>
            <img className='p-0 m-0 border-0 w-full h-full' src={fundalHome} alt="background" />

            <div className='bg-[#002366] h-[29rem] w-full md:flex'>
                <h1 className='mx-auto text-white text-[3.2rem] pt-3 font-extrabold'>Top rated recipes</h1>

            </div>
            <div className='bg-white'>
                <form className='mt-10 place-content-center w-full md:flex'>
                    <div className='grid gap-x-20 mx-auto bg-white grid-rows-2 grid-cols-5 w-[70%]'>
                        <h1 className='col-span-5 text-[3rem] font-bold text-green-600 mt-12'>Contact us</h1>
                        <div className='h-36 col-span-2'>
                            <input className='text-green-600 border-2 border-solid border-green-600 h-14 block w-full mb-5 placeholder:text-green-600 placeholder:text-[1.8rem] placeholder:font-extralight' type='text' placeholder=' Last Name'></input>
                            <input className='text-green-600 border-2 border-solid border-green-600 h-14 block w-full my-5 placeholder:text-green-600 placeholder:text-[1.8rem] placeholder:font-extralight' type='text' placeholder=' First Name'></input>
                            <input className='text-green-600 border-2 border-solid border-green-600 h-14 block w-full placeholder:text-green-600 placeholder:text-[1.8rem] placeholder:font-extralight' type='text' placeholder=' Email'></input>
                        </div>
                        <textarea className='text-green-600 border-2 border-solid border-green-600 h-36 resize-none col-span-3 row-span-3 placeholder:text-green-600 placeholder:text-[1.8rem] placeholder:font-extralight' placeholder=' Message'></textarea>
                        <button className='h-12 col-start-5 bg-[#28a745] text-white rounded-2xl cursor-pointer text-[1.8rem] font-bold mt-3 ease-in transition duration-300 hover:bg-[#218838]'>Submit</button>
                    </div>
                </form>
            </div>

            <footer className='relative bg-white top-40'>
                <img className='absolute inset-0 w-full z-10' src={footer} alt="background" />
                <div className='relative flex justify-center bottom-0 z-20 gap-10 top-10'>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img className='social-media-icon' src={yt} alt="youtube" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img className='social-media-icon' src={fb} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img className='social-media-icon' src={insta} alt="instagram" />
                    </a>
                    <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
                        <img className='social-media-icon' src={tw} alt="twitch" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home

