
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Service from '../Pages/Service/Service';
import Portfolio from '../Pages/Portfolio/Portfolio'
import Team from '../Pages/Team/Team'
import PrivateRoute from './PrivateRoute';

const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/service.json')
            },
            {
                path:"/about",
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:"/service/:id",
                element:<PrivateRoute><Service></Service></PrivateRoute>,
                loader:() => fetch("/service.json")        
            },
            {
                path:"/portfolio",
                element:<PrivateRoute><Portfolio></Portfolio></PrivateRoute>,
            },
            {
                path:"/team",
                element:<PrivateRoute><Team></Team></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default Route;