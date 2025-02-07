import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import MainLayouts from "../src/Components/LayOuts/MainLayouts";
import ErrorPage from "../src/Components/ErrorPage/ErrorPage";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register";

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
     },
    
    ]

}

])
export default router