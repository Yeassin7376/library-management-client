import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const AllBooks = () => {

    const books = useLoaderData();
    console.log(books);
    

    return (
        <div>
            {
                books.map((book) => <BookCard key={book._id} book={book}></BookCard>)
            }
        </div>
    );
};

export default AllBooks;