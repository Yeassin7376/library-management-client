import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AddBook from '../pages/AddBook';
import PrivateRoute from '../routes/PrivateRoute';

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
    ]
  }
]);

export default router;
