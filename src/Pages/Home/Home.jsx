import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import PortfolioSection from "../../components/PortfoliSectio/PortfolioSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div>
                <ServiceSection services={services}></ServiceSection>
            </div>
            <div>
                <PortfolioSection></PortfolioSection>
            </div>
        </div>
    );
};

export default Home;