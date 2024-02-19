import AdminLayout from "./admin/AdminLayout";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/SignUp";
import LandingUI from "./landingUI/LandingUI";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const Layout = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <LandingUI />
    },
    {
      path: '/admin',
      element : <AdminLayout />
    },
    {
      path: '/login',
      element : <Login />
    },
    {
      path: '/signup',
      element : <Signup/>
    }
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default Layout;
