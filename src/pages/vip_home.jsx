import VipHomeItem from "../components/vip_home_item";

const VipHome = () => {
    return (
        <div className="vip-home-content">
            <div className="vip-home-container">
                <VipHomeItem type="rok" />
                <VipHomeItem type="cod" />
            </div>
        </div>
    );
}

export default VipHome;
