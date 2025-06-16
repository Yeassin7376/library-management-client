import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateBook = () => {
  const book = useLoaderData();
  const { _id, name, category, authorName, rating, image, updatedBy } = book;

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleUpdateBook = (e) => {
    e.preventDefault();
    console.log('update');
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.updatedBy = [...updatedBy, user.email];
    console.log(updatedData);

    axios.patch(`${import.meta.env.VITE_API_URL}/book/${_id}`, updatedData).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Book update has been saved',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/allBooks');
      }
    });
  };

  return (
    <div className="p-24 pt-0">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Update Book</h1>
        <p className=" text-gray-400 font-medium">
          Update the information for an existing book using the form below. You can modify any of the fields to keep the
          book details accurate and up to date.
        </p>
      </div>
      <form onSubmit={handleUpdateBook}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full"
              placeholder="Title of the book"
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Author Name</label>
            <input
              type="text"
              name="authorName"
              defaultValue={authorName}
              className="input w-full"
              placeholder="Author Name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Category</label>
            <select defaultValue={category} name="category" className="select w-full" required>
              <option value="" disabled={true}>
                Pick Category
              </option>
              <option>Novel</option>
              <option>Thriller</option>
              <option>History</option>
              <option>Drama</option>
              <option>Sci-Fi</option>
              <option>Romance</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Rating</label>
            <input
              type="number"
              min="1"
              max="5"
              name="rating"
              defaultValue={rating}
              className="input w-full"
              placeholder="Rating"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
          <label className="label">Cover Photo</label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            className="input w-full"
            placeholder="Book cover image URL"
          />
        </fieldset>

        <input type="submit" className="btn w-full" value="Update Book" />
      </form>
    </div>
  );
};

export default UpdateBook;
