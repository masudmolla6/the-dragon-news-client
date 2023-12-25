import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    },
    {
        path: "*",
        element:<h1 className="text-2xl text-center">Not Found 404!!!</h1>
    }
])

export default router;