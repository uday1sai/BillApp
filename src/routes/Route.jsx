import { createBrowserRouter } from "react-router-dom";
import Register from "../components/users/Register";

let Route=createBrowserRouter([
    {
        path:'/',
        element:<Register></Register>
    }
]
)
export default Route