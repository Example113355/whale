const HomeItem = ({ name, thumbnail_img, description, link }) => {
    const handleClick = () => {
        window.location.href = `/${link}`;
    }
    return (
        <div className="home-item" onClick={handleClick}>
            <div className="home-item-thumbnail">
                <img src={thumbnail_img} alt="thumbnail" />
            </div>
            <div className="home-item-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default HomeItem;
