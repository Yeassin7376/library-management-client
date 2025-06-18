import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';

const CategoryBooks = () => {
  const { category } = useParams();
  const data = useLoaderData();

  const categoryBooks = data.filter((book) => book.category?.trim().toLowerCase() === category.trim().toLowerCase());

  return (
    <div className="my-20">
      <h1 className="text-2xl md:text-5xl font-semibold mb-5">Category Books For : {category}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {categoryBooks.map((book) => (
          <div key={book._id} className="card bg-base-100 shadow-sm">
            <figure>
              <img className="h-[271px]" src={book.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {book.name}
                <div className="badge badge-secondary">{book.category}</div>
              </h2>
              <p className="text-gray-400">Author : {book.authorName}</p>
              <div className='flex items-center gap-1'>
                Rating : {book.rating} <FaStar className='text-amber-600'></FaStar>
              </div>
              <p>Quantity : {book.quantity}</p>
              <div className="card-actions justify-end">
                <Link to={`/bookDetails/${book._id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
