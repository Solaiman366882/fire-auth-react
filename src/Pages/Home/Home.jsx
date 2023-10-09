import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import PortfolioSection from "../../components/PortfoliSectio/PortfolioSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import Happy from "../../components/Happy/Happy";

const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <div>
                <ServiceSection services={services}></ServiceSection>
            </div>
            <div className="mb-8">
                <Happy></Happy>
            </div>
            <div>
                <PortfolioSection></PortfolioSection>
            </div>
        </div>
    );
};

export default Home;