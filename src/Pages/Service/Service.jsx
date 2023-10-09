import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Service = () => {

    const services = useLoaderData() ;

    const {id} = useParams();
    const[selectedService,setSelectedService] = useState({});

    useEffect(() =>{
        const singleService = services.filter(serv => serv.id === parseInt(id));
        setSelectedService(singleService)
    },[]);
    const {img,title,price,description} = selectedService['0'] || {}

    return (
        <div className="w-full">
            <div className="service-details">
                <h2>{title}</h2>
            </div>
            <div className='my-8 max-w-screen-xl w-full px-4 mx-auto grid grid-cols-2 gap-5'>
                <div className="service-details-img">
                    <img src={img} alt="service-img" />
                </div>
                <div className='service-details-text'>
                    <h2>{title}</h2>

                    <p className='text-[#848892] text-justify'>{description}</p>

                    <div className='flex justify-between items-center mt-5'>
                        <p className='text-[#002642] font-semibold text-xl'>Price: {price} $</p>
                        <a href="" className="c-btn">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;