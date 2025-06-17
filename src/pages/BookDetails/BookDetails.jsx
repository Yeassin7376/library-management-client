import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { name, image, rating, quantity, description, category, authorName } = data;

  return (
    <div className="my-5 md:m-10 md:p-10 lg:p-14">
      <div className="card card-side flex-col md:flex-row bg-base-100 md:w-3/4 mx-auto shadow-sm">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg text-gray-600">By {authorName}</p>

          <p className='flex items-center gap-2'>Category : <span className='text-fuchsia-700'>{category}</span> | <FaStar className='text-amber-500'></FaStar> {rating}</p>
          <p>Available : <span className='text-green-700'>{quantity}</span> copies</p>
          <p className='text-gray-400 font-semibold'>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
