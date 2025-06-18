import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import BorrowedBookList from './BorrowedBookList';

const BorrowedBooks = () => {

    useEffect(() => {
        document.title = `Borrowed Books | Library`;
      }, []);

    const [borrowBooks, setBorrowBooks] = useState([]);
    const [loading, setLoading]= useState(true)

    const {user} =useAuth();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/borrowBooks?email=${user.email}`)
            .then(res=> {
                setBorrowBooks(res.data)
                setLoading(false)
            })

        
    }, [user?.email])
    // console.log(borrowBooks);
    
    if (loading) {
        return <div className='w-full flex justify-center'>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    }

    return (
        <div className='my-10 md:my-16'>
            <h1 className='text-2xl md:text-4xl font-bold mb-20 text-center'>Borrowed Books</h1>
            <BorrowedBookList borrowBooks={borrowBooks} setBorrowBooks={setBorrowBooks}></BorrowedBookList>
        </div>
    );
};

export default BorrowedBooks;