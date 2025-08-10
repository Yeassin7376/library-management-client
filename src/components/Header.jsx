import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import LibraryLogo from './LibraryLogo';

const Header = () => {
  const { user, logoutUser } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/allBooks">All Books</NavLink>
          </li>
          <li>
            <NavLink to="/addBook">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/borrowedBooks">Borrowed Books</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success('User Logout successful');
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="navbar second px-3 md:px-10 lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{' '}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <div className='flex items-center '>
          <LibraryLogo></LibraryLogo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user && (
          <>
            <img className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full" src={user?.photoURL} title={user.displayName} alt="" />
          </>
        )}
        {user ? (
          <button onClick={handleLogout} className="btn first border-none text-white">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn first border-none text-white">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline text-black  hover:bg-[#32cf91]">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
