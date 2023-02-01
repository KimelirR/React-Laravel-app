import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import RecoverPassword from "./auth/RecoverPassword.jsx";
import Register from './auth/Register';
import Table from './admin/content/Table';
import Login from './auth/Login';
import UserForm from './admin/content/UserForm';
import NotFound from "./admin/content/NotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/table"/>
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      },
      {
        path: '/table',
        element: <Table />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Register/>
      },
      {
        path: '/recoverpassword',
        element: <RecoverPassword/>
      },
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
