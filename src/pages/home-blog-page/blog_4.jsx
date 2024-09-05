import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog4 = () => {
    const { t } = useTranslation('blog4')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2024-6-6T08:18:34+00:00">July 6, 2024</time>
                    </span>

                    <span className="cat-list">
                        Uncategorized
                    </span>
                </div>
                <h3>{t("lines.2")}</h3>
                <div className="blog-item-content">
                    <div className="blog-item-paragraph">
                        {t("lines.3")}
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rNKCGXyppJA?si=Iv_nC1SqeNSF4RBx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="blog-item-paragraph">
                        <em><strong>{t("lines.4")}</strong></em> {t("lines.5")}
                    </div>

                    <div className="blog-item-download">
                        <a href="/vip">
                            {t("lines.6")}
                        </a>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image.png?w=1218&ssl=1" alt="" />
                        <span className="img-description">{t("lines.7")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.8")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-1.png?w=590&ssl=1" alt="" />
                        <span className="img-description">{t("lines.9")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        <em><strong>{t("lines.10")}</strong></em> {t("lines.11")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-2.png?w=1173&ssl=1" alt="" />
                        <span className="img-description">{t("lines.12")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.13")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.14")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-4.png?w=836&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        <em><strong>{t("lines.15")}</strong></em> {t("lines.16")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/06/Screenshot_1.jpg?w=403&ssl=1" alt="" />
                        <span className="img-description">{t("lines.17")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.18")}
                    </div>

                    <div className="blog-item-paragraph">
                        <em><strong>{t("lines.19")}</strong></em> {t("lines.20")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.21")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-5.png?w=618&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.22")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-6.png?w=429&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-7.png?w=320&ssl=1" alt="" />
                        <span className="img-description">{t("lines.23")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.24")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.25")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/05/image-8.png?w=1122&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-note-red">
                        <div><strong>{t("lines.26")}</strong></div>
                        {t("lines.27")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/image.png?w=794&ssl=1" alt="" />
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default Blog4
