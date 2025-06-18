import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const BorrowModal = ({ _id, quantity }) => {
  const { user } = useAuth();
  const today = new Date().toISOString().split('T')[0];

  const [borrowedBooks, setBorrowBooks] = useState([])

  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/borrowBooks?email=${user.email}`)
    .then(res=> setBorrowBooks(res.data))
  }, [user.email])

  const handleLetBorrow =()=>{

    const alreadyBorrowed = borrowedBooks.some(book => book.bookId == _id);
    if (!alreadyBorrowed) {
      document.getElementById('my_modal_1').showModal()
    }
    else{
      toast.error("You have already borrowed this book")
    }
   
  }

  const handleBorrowSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    // const username = form.username.value;
    const returnDate = form.returnDate.value;

    const borrowInfo = {
      bookId: _id,
      email: email,
      borrowDate: today,
      returnDate: returnDate
    };


    // borrow info save to DB
    axios.post(`${import.meta.env.VITE_API_URL}/borrowBooks`, borrowInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        document.getElementById('my_modal_1').close();

        // update the quantity number
        axios.patch(`${import.meta.env.VITE_API_URL}/book/borrow/${_id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Book Borrowed Successful',
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        });
      }
    });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn btn-primary" disabled={quantity == 0} onClick={handleLetBorrow}>
        Borrow
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          {/* Top-right close button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          <h3 className="font-bold text-lg">Hello! {user.displayName}</h3>
          <p className="py-4">Before Borrow a book , Please fill up this form .</p>
          <div className="modal-action justify-center items-center">
            <form onSubmit={handleBorrowSubmit}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <label className="label">Username</label>
                <input type="text" name="username" defaultValue={user?.displayName} readOnly className="input" />

                <label className="label">Email</label>
                <input type="text" name="email" defaultValue={user?.email} className="input" />

                <label className="label">return date</label>
                <input type="date" name="returnDate" className="input" required />
              </fieldset>
              {/* if there is a button in form, it will close the modal */}
              <button type="submit" className="btn w-full mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BorrowModal;
