import React from 'react';
import { Route, NavLink } from 'react-router-dom'

const Header = () => {
    return (
            <header className="main-header">
                <h1 className="main-title">OnlyDevs</h1>
                <nav className="main-nav">
                <Route exact path = '/' render={() => 
                    <NavLink to='/all-questions'>
                        <button className='view-all-btn'>View All Questions</button>
                    </NavLink> 
                } />
                <Route exact path = '/all-questions' render={() => 
                    <NavLink to='/'>
                        <button className='random-btn'>Answer a Question</button>
                    </NavLink>
                } />
             </nav>
            </header>
       
    )
}

export default Header;