import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import serImg from '../../assets/images/header-bg1.jpg'

const Service = () => {

    const services = useLoaderData() || [];

    console.log(services);

    const {id} = useParams();
    const[images,setImages] = useState([]);

    useEffect(() =>{
        fetch('portfolio.json')
        .then(res => res.json())
        .then(data => setImages(data))
    },[]);
    console.log(images);
    console.log(useLoaderData());

    return (
        <div className="w-full">
            <div className="service-details">
                <h2>Service Title</h2>
            </div>
            <div className='my-8 max-w-screen-xl w-full px-4 mx-auto grid grid-cols-2 gap-5'>
                <div className="service-details-img">
                    <img src={serImg} alt="service-img" />
                </div>
                <div className='service-details-text'>
                    <h2>Service Title</h2>

                    <p className='text-[#848892] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate molestias molestiae eos deleniti enim error! Quas facilis debitis dolore minima? Excepturi sint ex eaque, libero nulla architecto modi itaque minima id sapiente quidem quas incidunt suscipit reiciendis minus, assumenda maiores magni, eveniet accusantium possimus iusto blanditiis cum impedit aliquid. Eligendi.</p>

                    <div className='flex justify-between items-center mt-5'>
                        <p className='text-[#002642] font-semibold text-xl'>Price: 400$</p>
                        <a href="" className="c-btn">Purchase</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;