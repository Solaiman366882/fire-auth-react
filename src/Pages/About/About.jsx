import leftImg from '../../assets/images/rsvp-left-shape.png'
import flowerImg from '../../assets/images/about-title-shape.png'

const About = () => {
    return (
        <div className=" w-full my-8">
            <div className="service-details">
                <h2>About Us</h2>
            </div>
            <div className="max-w-screen-xl mx-auto flex gap-5 " data-aos="fade-up">
                <div className="img flex-1">
                    <img className='min-h-[400px] w-full' src={leftImg} alt="" />
                </div>
                <div className='flex-1 flex flex-col items-center justify-center p-5'>
                    <img src={flowerImg} alt="" />
                    <h2 className=' text-4xl text-[#002642] mb-5 font-bold text-center'>Planner for Your Perfect Wedding</h2>
                    <p className='text-[#848892] text-lg'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using now use Lorem Ipsum Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;