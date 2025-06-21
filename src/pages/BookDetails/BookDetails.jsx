import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router';
import BorrowModal from './BorrowModal';
import useAuth from '../../Hooks/useAuth';
import Loading from '../../components/Loading';

const BookDetails = () => {
  const [book, setBook] = useState(null);

  const { user } = useAuth();
  const params = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [user?.accessToken, params?.id]);


  useEffect(() => {
    document.title = `${book?.name} | Library`;
  }, [book?.name]);

  if (!book) {
    return <Loading></Loading>;
  }

  const {_id, name, image, rating, quantity, description, category, authorName } = book;

  return (
    <div className="my-5 md:m-10 md:p-10 lg:p-14">
      <div className="card card-side flex-col md:flex-row bg-base-100 md:w-3/4 mx-auto shadow-sm">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg text-gray-600">By {authorName}</p>

          <p className="flex items-center gap-2">
            Category : <span className="text-fuchsia-700">{category}</span> |{' '}
            <FaStar className="text-amber-500"></FaStar> {rating}
          </p>
          <p>
            Available : <span className="text-green-700 font-bold">{quantity}</span> copies
          </p>
          <p className="text-gray-400 font-semibold">{description}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Borrow</button> */}
            <BorrowModal _id={_id} quantity={quantity}></BorrowModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
