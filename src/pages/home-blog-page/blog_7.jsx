import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog7 = () => {
    const { t } = useTranslation('blog7')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2024-6-6T08:18:34+00:00">July 25, 2022</time>
                    </span>

                    <span className="cat-list">
                        Uncategorized
                    </span>
                </div>
                <div className="blog-item-content">
                    <p className="blog-item-paragraph">
                        {t("lines.2")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/image.png?w=1280&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.3")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.4")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.5")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/image-1.png?w=1280&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.6")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.7")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/image-2.png?w=1250&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.8")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.9")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/image-3.png?w=1280&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.10")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/image-4.png?w=1280&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.11")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.12")}
                    </p>

                    <p className="blog-item-paragraph">
                        <strong>{t("lines.13")}</strong>
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.14")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/bot-interface.png?w=619&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.15")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/bot.png?w=1745&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.16")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.17")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.18")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.19")} 
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/image.png?w=794&ssl=1" alt="" />
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default Blog7
