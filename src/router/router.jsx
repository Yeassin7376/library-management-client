import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AddBook from '../pages/AddBook';
import PrivateRoute from '../routes/PrivateRoute';
import AllBooks from '../pages/AllBooks/AllBooks';
import UpdateBook from '../pages/AllBooks/UpdateBook';
import Home from '../pages/Home/Home';
import CategoryBooks from '../pages/categoryBooks/CategoryBooks';
import BookDetails from '../pages/BookDetails/BookDetails';
import BorrowedBooks from '../pages/BorrowedBooks/BorrowedBooks';
import Error from '../pages/ErrorPage/Error';
import Loading from '../components/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'addBook',
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        )
      },
      {
        path: 'allBooks',
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`).then((res) => res.json()),
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'updateBook/:id',
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`).then((res) => res.json()),
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/categoryBooks/:category',
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/books`).then((res) => res.json()),
        element: <CategoryBooks></CategoryBooks>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/bookDetails/:id',
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`).then((res) => res.json()),
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'borrowedBooks',
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        )
      },
      
    ]
  },
  {
    path: '*',
    Component: Error
  }
]);

export default router;
