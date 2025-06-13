import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AddBook from '../pages/AddBook';
import PrivateRoute from '../routes/PrivateRoute';
import AllBooks from '../pages/AllBooks/AllBooks';

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
        element: <PrivateRoute>
          <AddBook></AddBook>
        </PrivateRoute>
      },
      {
        path: 'allBooks',
        loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/books`).then(res=> res.json()),
        element: <PrivateRoute>
          <AllBooks></AllBooks>
        </PrivateRoute>
      },
    ]
  }
]);

export default router;
