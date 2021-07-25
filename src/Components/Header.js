import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='nav'>
            <header>
                <h1>OnlyDevs</h1>
            </header>
            <div className='navBtns'>
                <NavLink to="/all-questions" className='ViewAll'>
                    <button>View All Questions</button>
                </NavLink> 
                <button className='</button>
            </div>
        </nav>
    )
}