import {createBrowserRouter} from "react-router-dom";
import Myimages from "../component/MyImagesComp";
import ParentComp  from "../component/ParentComp";
import ClassComp from "../component/ClassComp";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import UserStateHookComp from "../Layout/UserStateHookComp";
import MainDashBoardcomp from "../Layout/MainDashBoardcomp";
import UseEffect from "../Layout/UseEffectHookComp";
import NavComp from "../Layout/NavComp";
import ProductDashComp from "../Layout/ProductDashComp";


const router=createBrowserRouter([
    {path:"/myimages",element:<Myimages/>},
    {path:"/parent",element:<ParentComp/>},
    {path:"/parent/:id",element:<ParentComp/>},
    {path:"/class",element:<ClassComp/>},
   
    // 4 .child routing
    {path:"/main",element :<MainDashBoardcomp/>,children:[
        {path:"nav",element:<NavComp/>},
        {path:"usestate",element:<UserStateHookComp/>},
        {path:"useeffect",element:<UseEffect/>},
        {path:"product", element: <ProductDashComp/>}
    ]},
     {path:"/*",element:<PageNotFoundComp/>},

]);

export default router;