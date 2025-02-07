import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import MainLayouts from "../src/Components/LayOuts/MainLayouts";
import ErrorPage from "../src/Components/ErrorPage/ErrorPage";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register";
import Orders from "../src/Components/Orders/Orders";
import PrivateRoute from "../src/Components/PrivateRoute/PrivateRoute";
import Profile from "../src/Components/Profile/Profile";

const router=createBrowserRouter([
{    path:"/",
     element:<MainLayouts></MainLayouts>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[{
        path:"/",
       element: <Home></Home>
     },{
        path:'/login',
        element:<Login></Login>
     },
     {
        path:'/register',
        element:<Register></Register>
     },{
      path:'/oders',
      element:<PrivateRoute><Orders></Orders></PrivateRoute>
      
     },
     {
      path:'/profile',
      element:<PrivateRoute><Profile></Profile></PrivateRoute>
      
     },
    
    ]

}

])
export default router