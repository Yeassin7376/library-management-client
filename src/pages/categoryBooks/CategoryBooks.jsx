import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryBooks = () => {

    const {category} = useParams();
    const data = useLoaderData();
    console.log(category, data);
    
    const categoryBooks = data.filter(book => book.category?.trim().toLowerCase() === category.trim().toLowerCase());
    console.log(categoryBooks);
    

    return (
        <div>
            <h1 className='text-2xl md:text-5xl font-semibold'>Category Books For : {category}</h1>

            <div>
                {
                    categoryBooks.map(book => <h2>{book.name}</h2>)
                }
            </div>
        </div>
    );
};

export default CategoryBooks;