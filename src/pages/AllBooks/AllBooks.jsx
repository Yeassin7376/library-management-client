import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const AllBooks = () => {
  const initialBooks = useLoaderData();
  useEffect(() => {
    document.title = `All Books | Library`;
  }, []);

  const [isFiltered, setIsFiltered] = useState(false);
const [books, setBooks] = useState(initialBooks);

const availableBooks = initialBooks.filter(book => book.quantity !== 0);



  const handleAvailableBooks = () => {
    const toggle = !isFiltered
    setIsFiltered(toggle);
    console.log(isFiltered);

    if (toggle) {
      setBooks(availableBooks);
    } else {
      setBooks(initialBooks)
    }
    
  };

  return (
    <div className="my-5 md:my-12">
      <h1 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6">All Books </h1>
      <div className="w-full flex justify-end mb-5">
        <button onClick={handleAvailableBooks} className={`btn bg-gray-100 ${isFiltered && 'bg-gray-300' }`}>
          {
            isFiltered ? 'All Books' : 'Show Available Books'
          }
          
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {books.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
