import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog2 = () => {
    const { t } = useTranslation('blog2')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2023-10-25T08:18:34+00:00">October 25, 2023</time>
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
                        {t("lines.3")} <strong>“Call of Dragons”</strong> {t("lines.4")}
                    </p>

                    <div className="blog-item-video">
                        <iframe className="" width="560" height="315" src="https://www.youtube.com/embed/0N1tkG8ApSc?si=axp605TfY2iTSpaH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.5")}</span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/image.png?w=1078&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.6")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/image-1.png?w=1267&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.7")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.8")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/image-2.png?w=1280&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.9")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/image-3.png?w=1280&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.10")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.11")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.12")}
                    </div>

                    <div className="blog-item-download">
                        <a href="https://whalebots.net/1">
                            {t("lines.13")}
                        </a>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.14")} <strong>{t("lines.15")}</strong>:
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/Screenshot_3.png?w=621&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/Screenshot_1-2.png?w=1280&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/09/Screenshot_2.png?w=1280&ssl=1" alt="" />
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

export default Blog2
