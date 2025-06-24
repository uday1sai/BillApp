import { createBrowserRouter } from "react-router-dom";
import Register from "../components/users/Register";
import Login from "../components/users/Login";
import Main from "../components/users/Main/Main";
import Home from "../components/users/Main/home/Home";
import About from "../components/users/Main/about/About";
import AddBill from "../components/users/Main/addBills/AddBill";
import FillterBills from "../components/users/Main/fillterBill/FillterBills";

let Route=createBrowserRouter([
    {
        path:'/register',
        element:<Register></Register>
    },{
        path:"/",
        element:<Login></Login>
    },{
        path:"/home",
        element:<Main></Main>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"about",
                element:<About></About>
            },{
                path:"addBills",
                element:<AddBill></AddBill>
            },{
                path:"fillterBills",
                element:<FillterBills></FillterBills>
            }
        ]
    }
]
)
export default Route