import home_data from "../utils/home_page_data";
import HomeItem from "../components/home-item";
import { useTranslation } from 'react-i18next'

const HomePage = () => {
    const [t, i18n] = useTranslation('global')

    return (
        <div className="home">
            <div className="home-content">
                <div className="home-data-list">
                    {
                        home_data.map((item) => (
                            <HomeItem
                                key={item.id}
                                name={t(`blogs.${item.id}.name`)}
                                thumbnail_img={item.thumbnail_img}
                                description={t(`blogs.${item.id}.description`)}
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
