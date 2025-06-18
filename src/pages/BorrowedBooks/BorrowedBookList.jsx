import axios from 'axios';
import React from 'react';

const BorrowedBookList = ({ borrowBooks, setBorrowBooks }) => {
    

    const handleBookReturn = (_id, bookId) =>{
        console.log("returned", _id);

        axios.delete(`${import.meta.env.VITE_API_URL}/borrowBooks/${_id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount) {
                    axios.patch(`${import.meta.env.VITE_API_URL}/book/return/${bookId}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            const remainingBooks = borrowBooks.filter(book => book._id !== _id)
                            setBorrowBooks(remainingBooks);
                        }
                    })
                }
            })
        
    }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                #
              </label>
            </th>
            <th>Book</th>
            <th>category</th>
            <th>Borrow Date</th>
            <th>Return Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {borrowBooks.map((book, index) => (
            <tr key={book._id}>
              <th>
                <label>
                  {index+1}
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={book.image}
                        alt={book.name}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{book.name}</div>
                    <div className="text-sm opacity-50">By {book.authorName}</div>
                  </div>
                </div>
              </td>
              <td>
                {book.category}
              </td>
              <td>{book.borrowDate}</td>
              <td>{book.returnDate}</td>
              <th>
                <button onClick={()=> handleBookReturn(book._id, book.bookId)} className="btn bg-amber-100 btn-xs">Return</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBookList;
