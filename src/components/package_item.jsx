import { useNavigate } from 'react-router-dom';

const PackageItem = ({id, name, vip, price, isReduced, reduced_price, type}) => {
    let thumbnail_img = '';
    let bg_img = '';

    switch (type) {
        case 'rok':
            thumbnail_img = 'https://static.whalebots.net/storage//products/rise-of-kingdoms-bot/logo.png';
            bg_img = 'https://static.whalebots.net/storage//products/rise-of-kingdoms-bot/app.png';
            break;
        case 'cod':
            thumbnail_img = 'https://static.whalebots.net/storage//products/call-of-dragons-bot/logo.png';
            bg_img = 'https://static.whalebots.net/storage//products/call-of-dragons-bot/app.png';
            break;
        default:
            break;
    }

    const ImgStyle = {
        backgroundImage: `url(${bg_img})`,
    }

    const LogoStyle = {
        backgroundImage: `url(${thumbnail_img})`,
    }

    const navigate = useNavigate();
    
    const handleClick = () => {
        let cart = JSON.parse(localStorage.getItem('whaleCart')) || [];

        let newItem = {
            id: id,
            name: name,
            price: price,
            quantity: 1,
            type: type,
        };

        if(isReduced) {
            newItem.price = reduced_price;
        }

        const itemIndex = cart.findIndex((item) => item.id === id && item.type === type);

        if (itemIndex === -1) {
            cart.push(newItem);
        } else {
            cart[itemIndex].quantity++;
        }

        localStorage.setItem('whaleCart', JSON.stringify(cart));

        navigate('/cart');
    }

    return (
        <div className="package-item" onClick={handleClick}>
            <div className="package-img" style={ImgStyle}>
                <div className="package-logo" style={LogoStyle}>

                </div>
            </div>

            <div className="package-content">
                <h3 className="package-vip">{vip}</h3>
                <h3 className="package-name">{name}</h3>
                {
                    isReduced ? (
                        <div className="package-price">
                            <span>{reduced_price}</span>
                            <span className="discount-price">{price}</span>
                        </div>
                    ) : (
                        <h3 className="package-price">${price}</h3>
                    )
                }
            </div>
        </div>
    )
}

export default PackageItem;
