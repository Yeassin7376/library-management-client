import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import ReactStars from 'react-stars';

const CategoryBooks = () => {
  const { category } = useParams();
  const data = useLoaderData();
  console.log(category, data);

  const categoryBooks = data.filter((book) => book.category?.trim().toLowerCase() === category.trim().toLowerCase());
  console.log(categoryBooks);

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
              <p className='text-gray-400'>Author : {book.authorName}</p>
              <p>
                <ReactStars count={5} value={book.rating} edit={false} size={24} isHalf={true} activeColor="#ffd700" />
              </p>
              <p>Quantity : {book.quantity}</p>
              <div className="card-actions justify-end">
                <Link to={``}><button className="btn btn-primary">Details</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
