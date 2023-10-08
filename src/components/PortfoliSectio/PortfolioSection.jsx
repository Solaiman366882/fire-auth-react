import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import titleImg from "../../assets/images/section-title.png";
import titleUpImg from "../../assets/images/section-title2.png"

const PortfolioSection = () => {

    const[images,setImages] = useState([]);

    useEffect(() =>{
        fetch('portfolio.json')
        .then(res => res.json())
        .then(data => setImages(data))
    },[]);

    return (
        <div className=" max-w-screen-xl px-5 mx-auto mb-10">
            <div className="title text-center mb-8">
                    <img className="mx-auto" src={titleUpImg} alt="" />
                    <h2 className="text-title-heading font-semibold text-4xl mb-7">Sweet Moments</h2>
                    <div className="service-img">
                        <img className="mx-auto" src={titleImg} alt="" />
                    </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    images?.map(image => <PortfolioCard key={image.id} image={image}></PortfolioCard>)
                }
            </div>
        </div>
    );
};

export default PortfolioSection;