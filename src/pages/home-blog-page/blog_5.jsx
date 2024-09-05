import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog5 = () => {
    const { t } = useTranslation('blog5')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2024-6-6T08:18:34+00:00">December 14, 2023</time>
                    </span>

                    <span className="cat-list">
                        Uncategorized
                    </span>
                </div>
                <div className="blog-item-content">
                    <span className="italic">
                        <em>{t("lines.2")}</em>
                    </span>

                    <p className="blog-item-paragraph">
                        {t("lines.3")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.4")} <strong>{t("lines.5")}</strong> {t("lines.6")}.
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.7")} <strong>{t("lines.8")}</strong> {t("lines.9")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/04/Screenshot_1.png?w=634&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.10")} <strong>{t("lines.11")}</strong>{t("lines.12")}<strong>{t("lines.13")}</strong> {t("lines.14")} <strong>{t("lines.15")}</strong>{t("lines.16")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/04/Screenshot_4.png?w=643&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.17")} <strong>{t("lines.18")}</strong>
                    </p>

                    <div className="blog-item-note">
                        <p>{t("lines.19")}</p>
                        <p>{t("lines.20")}</p>
                        <p>{t("lines.21")}</p>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/04/Screenshot_5.png?w=640&ssl=1" alt="" />
                        <span className="img-description">{t("lines.22")} <strong>Nougat 32</strong> {t("lines.23")} <strong>ROK</strong></span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/12/image.png?w=661&ssl=1" alt="" />
                        <span className="img-description">{t("lines.22")} <strong>Nougat 64</strong> {t("lines.23")} <strong>COD</strong></span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/04/Screenshot_6.png?w=640&ssl=1" alt="" />
                        <span className="img-description">{t("lines.24")}</span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/04/Screenshot_7.png?w=641&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.25")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.26")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.27")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.28")}
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

export default Blog5
