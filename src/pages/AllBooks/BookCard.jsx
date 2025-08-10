import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  const { _id, name, category, authorName, rating, image } = book;

  return (

    <div key={_id} className="card bg-base-100 shadow-sm">
      <figure>
        <img className="h-[271px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="text-lg ">
          {name}
          <span className="badge second text-[8px] ml-1 md:ml-1.5">{category}</span>
        </h2>
        <p className="text-gray-400">Author : {authorName}</p>
        <div className="flex items-center gap-1">
          Rating : {rating} <FaStar className="text-amber-600"></FaStar>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/bookDetails/${book._id}`}>
            <button className="btn first">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
