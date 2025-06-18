import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const AllBooks = () => {
  useEffect(() => {
    document.title = `All Books | Library`;
  }, []);

  const books = useLoaderData();
  // console.log(books);

  return (
    <div className="my-5 md:my-12">
      <h1 className="text-2xl md:text-5xl font-bold mb-10 md:mb-20">All Books </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
