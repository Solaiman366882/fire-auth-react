
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Service from '../Pages/Service/Service';
import Portfolio from '../Pages/Portfolio/Portfolio'
import Team from '../Pages/Team/Team'

const Route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/services",
                element:<Service></Service>
            },
            {
                path:"/portfolio",
                element:<Portfolio></Portfolio>
            },
            {
                path:"/team",
                element:<Team></Team>
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