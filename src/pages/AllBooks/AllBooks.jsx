import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';
import Loading from '../../components/Loading';
import useAuth from '../../Hooks/useAuth';

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    document.title = `All Books | Library`;
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/books`, {
      headers: {
        authorization : `Bearer ${user?.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, [user?.accessToken]);

  const filteredBooks = isFiltered ? books.filter((book) => book.quantity !== 0) : books;

  const handleAvailableBooks = () => {
    setIsFiltered((prev) => !prev);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-5 md:my-12">
      <h1 className="text-2xl md:text-5xl font-bold mb-5 md:mb-6">All Books </h1>
      <div className="w-full flex justify-end mb-5">
        <button onClick={handleAvailableBooks} className={`btn bg-gray-100 ${isFiltered && 'bg-gray-300'}`}>
          {isFiltered ? 'All Books' : 'Show Available Books'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredBooks.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
