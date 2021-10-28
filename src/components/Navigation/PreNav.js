import { NavLink } from 'react-router-dom';

export const PreNav = () => {
  return (
    <nav className='navigation public-nav'>
      <ul className='navigation-links'>
        <li>
          <NavLink to='/connect'>Home</NavLink>
          <NavLink to='/connect'>Connect</NavLink>
        </li>
      </ul>
    </nav>
  );
};

