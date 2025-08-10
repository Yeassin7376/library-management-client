import React from 'react';
import { Link } from 'react-router';

const LibraryLogo = () => {
  return (
    <Link to='/' className="text-xl md:text-3xl font-bold flex items-center gap-1 md:gap-5">
      <img className="w-10 h-10 md:w-16 md:h-16 " src="./logo.png" alt="" />
      <p>Library</p>
    </Link>
  );
};

export default LibraryLogo;
