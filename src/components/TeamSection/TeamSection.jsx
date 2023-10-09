import titleImg from "../../assets/images/section-title.png";

const TeamSection = () => {
    return (
        <div>
            <div>
                <div className="title text-center mb-8">
                    <p className="text-pera-color mb-5">Our Team</p>
                    <h2 className="text-title-heading font-semibold text-4xl mb-7">Meet Our Planners</h2>
                    <div className="service-img">
                        <img className="mx-auto" src={titleImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamSection;