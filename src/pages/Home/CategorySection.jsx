import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/bookCategories`).then((res) => setCategories(res.data));
  }, []);



  return (
    <div  className='my-7 md:my-12 md:p-5'>
      <h1 className='text-2xl md:text-5xl font-bold mb-5 md:mb-8'>Book Categories</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {categories.map((category) => (
          <Link to={`/categoryBooks/${category.name}`} key={category._id} className="card bg-base-100 shadow-sm cursor-pointer">
            <figure className="px-10 pt-10">
              <img
                src={category.image}
                alt="Shoes"
                className="rounded-xl w-full h-44 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.name}</h2>
              <p className='text-gray-400'>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
