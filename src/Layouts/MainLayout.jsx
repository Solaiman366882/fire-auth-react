import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import '../assets/css/custom.css';
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className=" font-poppins">
            <Header></Header>
            <div className="w-full ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;