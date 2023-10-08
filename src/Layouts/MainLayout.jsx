import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className=" font-poppins">
            <h1 className="text-center font-bold text-rose-700 text-5xl">this is main layouts.</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;