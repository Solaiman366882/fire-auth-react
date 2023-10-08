import './ServiceCard.css'
import PropTypes from 'prop-types'
import butterFly from '../../assets/images/section-title2.png'

const ServiceCard = ({service}) => {
    const{title,img,short_description,price} = service
    return (
        <div>
            <div className="service-card">
                <div className="img-container">
                <img src={img} alt=""/>
                </div>
                <div className="card-details">
                    <img className='mx-auto' src={butterFly} alt="" />
                    <h2>{title}</h2>
                    <p>{short_description}</p>
                    <p className='text-lg font-semibold'>Price: ${price} Only</p>
                    <a  className="c-btn w-full text-center">More</a>
                </div>
                <div className="card-top">
                    <h2 className='text-center text-2xl font-bold mb-4'>{title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg font-semibold'>Price: {price} $</p>
                        <a  className="c-btn">More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service:PropTypes.object
}
export default ServiceCard;