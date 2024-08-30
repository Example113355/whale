const VipHomeItem = ({ type }) => {
    let name = '';
    let thumbnail_img = '';
    let bg_img = '';

    switch (type) {
        case 'rok':
            name = 'Rise of Kingdoms Bot';
            thumbnail_img = 'https://static.whalebots.net/storage//products/rise-of-kingdoms-bot/logo.png';
            bg_img = 'https://static.whalebots.net/storage//products/rise-of-kingdoms-bot/app.png';
            break;
        case 'cod':
            name = 'Call of Dragons Bot';
            thumbnail_img = 'https://static.whalebots.net/storage//products/call-of-dragons-bot/logo.png';
            bg_img = 'https://static.whalebots.net/storage//products/call-of-dragons-bot/app.png';
            break;
        default:
            break;
    }

    const handleClick = () => {
        window.location.href = `/vip/${type}`;
    }

    const ItemStyle = {
        backgroundImage: `url(${bg_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="vip-home-item" style={ItemStyle} onClick={handleClick}>
            <div className="vip-home-item-left">
                <div className="vip-home-item-logo">
                    <img src={thumbnail_img} alt="" />
                </div>
                <h5>{name}</h5>
            </div>
        </div>
    );
}

export default VipHomeItem;
