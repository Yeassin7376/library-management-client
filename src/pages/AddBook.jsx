import axios from 'axios';
import React from 'react';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';

const AddBook = () => {

    const {user} = useAuth();

    const handleAddBook = e => {

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newBook = Object.fromEntries(formData.entries())
        newBook.email = user.email;
        newBook.updatedBy = [];
        console.log(newBook);

        // save book to the DB
        axios.post(`${import.meta.env.VITE_API_URL}/books`, newBook)
            .then(res=>{
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                
            })
    }

    return (
        <div className='p-24 pt-0'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Add Book</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddBook}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Title of the book" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Quantity Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Author Name</label>
                        <input type="text" name='authorName' className="input w-full" placeholder="Author Name" />
                    </fieldset>
                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Category</label>
                        <select defaultValue="" name="category" className="select w-full">
                            <option value="" disabled={true}>Pick Category</option>
                            <option>Drawing & Painting</option>
                            <option>Photography</option>
                            <option>Video Gaming</option>
                            <option>Fishing</option>
                            <option>Running</option>
                            <option>Cooking</option>
                            <option>Reading</option>
                            <option>Writing </option>
                            </select>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Rating</label>
                        <input type="number" min="1" max="5" name='rating' className="input w-full" placeholder="Rating" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Write a Short Description" />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
                    <label className="label">Cover Photo</label>
                    <input type="text" name='image' className="input w-full" placeholder="Book cover image URL" />
                </fieldset>

                <input type="submit" className='btn w-full' value="Add Book" />
            </form>

            <div className="mt-6 p-4 bg-gray-100 rounded">
                <h3 className="text-xl font-semibold mb-2">About Book Submission</h3>
                <p className="text-gray-700">
                    After adding a book, it will appear in the public library section for other users to view. 
                    Make sure to enter correct details, especially the rating and category, to help readers find it more easily.
                    You can always edit or remove it later from your dashboard.
                </p>
            </div>
        </div>
    );
};

export default AddBook;