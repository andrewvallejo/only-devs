import { NavLink } from 'react-router-dom';

export const PublicNav = () => {
  return (
    <nav className='navigation public-nav'>
      <ul className='navigation-links'>
        <li>
          <NavLink to='/connect'>Connect</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
};

