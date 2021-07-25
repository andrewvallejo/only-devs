import React from 'react';
import { Route, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='nav'>
            <header>
                <h1>OnlyDevs</h1>
            </header>
            <div className='navBtns'>
                <NavLink to='/all-questions' className='ViewAll'>
                    <button>View All Questions</button>
                </NavLink> 
            </div>
        </nav>
    )
}

export default Header;