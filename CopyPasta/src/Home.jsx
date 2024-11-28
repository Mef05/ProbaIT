import React from 'react';
import fundalHome from './assets/fundalHome.svg';
import footer from './assets/footer.svg';
import yt from './assets/yt.svg';
import fb from './assets/fb.svg';
import insta from './assets/insta.svg';
import tw from './assets/tw.svg';

import "./Home.css";

function Home() {
    return (
        <div className='home'>
            <img className='background' src={fundalHome} alt="background" />

            <div className='top-rated'>
                <h1 className='top-rated-text'>Top rated recipes</h1>

            </div>
            <div className='contact'>
                <h1 className='contact-text'>Contact us</h1>
                <p className='contact-paragraph'>We are here to help you with any question you may have. Just send us a message and we will get back to you as soon as possible.</p>
                <form className='contact-form'>
                    <input className='contact-input' type='text' placeholder='Last Name'></input>
                    <input className='contact-input' type='text' placeholder='First Name'></input>
                    <input className='contact-input' type='text' placeholder='Email'></input>
                    <textarea className='contact-input' placeholder='Message'></textarea>
                    <button className='contact-button'>Send</button>
                </form>
            </div>

            <footer className='footer'>
                <div className='social-media'>
                    <img className='social-media-icon' src={yt} alt="youtube" />
                    <img className='social-media-icon' src={fb} alt="facebook" />
                    <img className='social-media-icon' src={insta} alt="instagram" />
                    <img className='social-media-icon' src={tw} alt="twitter" />
                </div>
                <img className='footer-background' src={footer} alt="background" />
            </footer>
        </div>
    );
}

export default Home

