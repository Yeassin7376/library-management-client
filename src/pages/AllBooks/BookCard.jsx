import React from 'react';
import { FaStar } from 'react-icons/fa';

const BookCard = ({ book }) => {

    const {_id, name, category, authorName, rating, image} = book

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge">{rating}<FaStar className='text-amber-500' /></div>
          </h2>
          <p>Category : {category}</p>
          <p>Author : {authorName}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
