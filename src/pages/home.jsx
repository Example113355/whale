import home_data from "../utils/home_page_data";
import HomeItem from "../components/home-item";

const HomePage = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="home-data-list">
                    {
                        home_data.map((item) => (
                            <HomeItem
                                key={item.id}
                                name={item.name}
                                thumbnail_img={item.thumbnail_img}
                                description={item.description}
                                link={item.link}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePage;
