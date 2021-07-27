import React from 'react';
import { Route, NavLink } from 'react-router-dom'

const Header = () => {
    return (
            <header class="main-header">
                <h1>OnlyDevs</h1>
                <nav>
                <Route exact path = '/' render={() => 
                    <NavLink to='/all-questions' className='viewAll'>
                        <button>View All Questions</button>
                    </NavLink> 
                } />
                <Route exact path = '/all-questions' render={() => 
                    <NavLink to='/' className='randomQuestion'>
                        <button>Answer a Question</button>
                    </NavLink>
                } />
             </nav>
            </header>
       
    )
}

export default Header;