import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import PortfolioSection from "../../components/PortfoliSectio/PortfolioSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";

const Home = () => {

    const services = useLoaderData()

    console.log(services);

    return (
        <div>
            <Banner></Banner>
            <div>
                <ServiceSection></ServiceSection>
            </div>
            <div>
                <PortfolioSection></PortfolioSection>
            </div>
        </div>
    );
};

export default Home;