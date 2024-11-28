import React from 'react';
import "./Style.css";
import chefIT from './assets/chefIT.svg';

function Header() {
    // Declare a single instance of isLoggedIn
    const useState = React.useState;
    const [userState, setUserState] = useState('logout'); // Default to 'logout'

    // Handlers for transitioning between states
    const handleLogin = () => setUserState('login'); // User logs in
    const handleLogout = () => setUserState('logout'); // User logs out
    const handleProfile = () => setUserState('profile'); // Navigate to profile
    return (
        <header className="header">
            <div className="logo"><a href='#'><img src={chefIT} alt="chefIT logo" /></a></div>
            <nav>
                <ul className="nav-links">
                    <li>Recipes</li>
                    <li>Add Recipe</li>
                </ul>
            </nav>
            <div className='nav-right'>
                {userState === 'logout' && (
                    <>
                        <button className="auth-btn" onClick={handleLogin}>Logout</button>
                    </>
                )}

                {userState === 'login' && (
                    <>
                        <button className="auth-btn" onClick={handleProfile}>Login</button>
                        <button className="auth-btn" onClick={handleProfile}>Register</button>
                    </>
                )}

                {userState === 'profile' && (
                    <>
                        <button className="auth-btn" onClick={handleLogout}>Profile</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header