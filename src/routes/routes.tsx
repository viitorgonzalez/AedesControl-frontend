import { lazy } from "react"
import PrivateRoute from "../routes/PrivateRoute"
import PublicRoute from "./PublicRoute"
import App from "../App"
import ErrorPage from "../pages/ErrorPage"

const Login = lazy(() => import("../pages/Login"))
const Dashboard = lazy(() => import("../pages/Dashboard"))
const Home = lazy(() => import("../pages/Home"))

export const publicRoutes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/login", element: <PublicRoute><Login /></PublicRoute> }
        ],
    },
]

export const privateRoutes = [
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> }
        ]
    },
]
