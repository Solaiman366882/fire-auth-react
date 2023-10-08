import PropTypes from 'prop-types'
import plusIcon from '../../assets/images/icons8-plus-24.png'
const PortfolioCard = ({image}) => {
    const{img} = image;
    return (
        <div className="port-card">
            <img className="w-full h-[350px] object-cover" src={img} alt="" />
            <div className="hover-port">
                <img src={plusIcon} alt="" />
            </div>

        </div>
    );
};

PortfolioCard.propTypes = {
    image: PropTypes.object
}

export default PortfolioCard;