import titleImg from "../../assets/images/section-title.png"

const ServiceSection = () => {
    return (
        <div className="bg-[#EDF3F8] max-w-screen-xl my-9 px-4 py-12 mx-auto">
            <div>
                <div className="title text-center">
                    <p className="text-pera-color mb-5">Our Services</p>
                    <h2 className="text-title-heading font-semibold text-4xl mb-7">What We Can Do</h2>
                    <div className="service-img">
                        <img className="mx-auto" src={titleImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;