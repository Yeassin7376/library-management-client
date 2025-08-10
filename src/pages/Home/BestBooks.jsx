import React from 'react';
import SectionTitile from '../../components/SectionTitile';

const BestBooks = () => {
  return (
    <div>
      <div className="my-12 md:my-20">
        <div className="text-center space-y-5">
          <SectionTitile TitleText={'Popular Books Readers Love'}></SectionTitile>
          <p className="text-gray-500">
          Discover top-rated books that readers around the world can’t put down. From timeless classics to modern must-reads — there’s something for everyone.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
          <div className="flex flex-col items-center gap-5">
            <img
              className="w-[205px] h-[205px] rounded-full object-cover"
              src="https://i.ibb.co/jPgWd3pw/download-10.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold text-gray-700">1984</h2>
            <p className="text-gray-500 text-sm">By George Orwell</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="w-[205px] h-[205px] rounded-full object-cover"
              src="https://i.ibb.co/3mkfg0RY/download-11.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold text-gray-700">To Kill a Mockingbird</h2>
            <p className="text-gray-500 text-sm">By Harper Lee</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="w-[205px] h-[205px] rounded-full object-cover"
              src="https://i.ibb.co/FLZjFk2g/Pride-and-Prejudice.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold text-gray-700">Pride and Prejudice</h2>
            <p className="text-gray-500 text-sm">Jane Austen</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="w-[205px] h-[205px] rounded-full object-cover"
              src="https://i.ibb.co/sZnp1YW/download-12.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold text-gray-700">The Alchemist</h2>
            <p className="text-gray-500 text-sm">Paulo Coelho</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="w-[205px] h-[205px] rounded-full object-cover"
              src="https://i.ibb.co/1fhbBHb6/download-5.jpg"
              alt=""
            />
            <h2 className="text-xl font-bold text-gray-700">The Great Gatsby</h2>
            <p className="text-gray-500 text-sm">F. Scott Fitzgerald</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBooks;
