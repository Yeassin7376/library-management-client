import React from 'react';
import { useLoaderData } from 'react-router';
import BookCard from './BookCard';

const AllBooks = () => {

    const books = useLoaderData();
    // console.log(books);
    

    return (
        <div className='my-5 md:my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    books.map((book) => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;