import WhaleIcon from '../assets/whale.png';
import NameIcon from '../assets/whalebots1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faShop } from '@fortawesome/free-solid-svg-icons'

const VipHeader = () => {
    const currentPath = window.location.pathname;
    const handleLogoClick = () => {
        window.location.href = '/';
    }

    return (
        <div className="vip-header">
            <div className="vip-logo" onClick={handleLogoClick}>
                <img src={WhaleIcon} alt="" />
                <img src={NameIcon} alt="" />
            </div>

            <div className="vip-navbar">
                <div className={`vip-navbar-item ${currentPath.startsWith('/vip') ? 'vip-active': ''}`}>
                    <a href="/vip">
                        <FontAwesomeIcon className='vip-nav-icon' icon={faShop} />
                        <span>Products</span>
                    </a>
                </div>

                <div className={`vip-navbar-item ${currentPath.startsWith('/cart') ? 'vip-active': ''}`}>
                    <a href="/cart">
                        <FontAwesomeIcon className='vip-nav-icon' icon={faCartShopping} />
                        <span>Cart</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default VipHeader;
