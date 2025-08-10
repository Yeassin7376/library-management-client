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
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import AboutUs from '../pages/AboutUs/AboutUs';

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
        // loader: () =>,
        element: (
            <AllBooks></AllBooks>
        ),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: 'updateBook/:id',
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/categoryBooks/:category',
        element: <CategoryBooks></CategoryBooks>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/bookDetails/:id',
        element: (
            <BookDetails></BookDetails>
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
      {
        path: 'privacyPolicy',
        Component: PrivacyPolicy
      },
      {
        path: 'aboutUs',
        Component: AboutUs
      }
      
    ]
  },
  {
    path: '*',
    Component: Error
  }
]);

export default router;
