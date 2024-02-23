import AdminLayout from "./admin/AdminLayout";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/SignUp";
import PageNotFound from "./pageNotFound/PageNotFound";
import LandingUI from "./user/LandingUI";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const Layout = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element : <Login />
    },
    {
      path: '/admin',
      element : <AdminLayout />
    },
    {
      path: '/user',
      element : <LandingUI />
    },
    {
      path: '/signup',
      element : <Signup/>
    },
    {
      path : '*',
      element : <PageNotFound />
    }

  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
};

export default Layout;
