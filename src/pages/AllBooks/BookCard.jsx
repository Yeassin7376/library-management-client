import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {

    const {_id, name, category, authorName, rating, image} = book;

    

  return (
    <div className="card bg-base-100 border shadow-sm">
        <figure>
          <img className='w-full h-72 object-cover' src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge">{rating}<FaStar className='text-amber-500' /></div>
          </h2>
          <p>Category : {category}</p>
          <p>Author : {authorName}</p>
          <div className="card-actions justify-end">
            <Link to={`/updateBook/${_id}`}><button className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div>
  );
};

export default BookCard;
