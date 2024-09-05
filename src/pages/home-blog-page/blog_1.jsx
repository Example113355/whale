import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog1 = () => {
    const { t } = useTranslation('blog1')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2023-11-28T08:18:34+00:00">November 28, 2023</time>
                    </span>

                    <span className="cat-list">
                        Uncategorized
                    </span>
                </div>
                <div className="blog-item-content">
                    <span className="italic">
                        <em>{t("lines.2")}</em>
                    </span>

                    <h2>{t("lines.3")}</h2>
                    <h2>{t("lines.4")}</h2>

                    <p className="blog-item-paragraph">
                        {t("lines.5")}
                    </p>

                    <div className="blog-item-download">
                        <a href="https://whalebots.net/download/">
                            DOWNLOAD HERE
                        </a>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.6")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.7")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_2.png?resize=640%2C296&ssl=1" alt="" />
                        <span className="img-description">{t("lines.8")}</span>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.9")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_3.png?resize=640%2C407&ssl=1" alt="" />
                        <span className="img-description">{t("lines.10")}</span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_4.png?resize=640%2C405&ssl=1" alt="" />
                        <span className="img-description">{t("lines.11")}</span>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.12")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/10/Screenshot_6-3.png?w=965&ssl=1" alt="" />
                        <span className="img-description">{t("lines.13")}</span>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.14")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/11/image.png?w=620&ssl=1" alt="" />
                        <span className="img-description"></span>
                    </div>

                    <div className="blog-item-note">
                        <span>{t("lines.15")}</span>
                    </div>

                    <div className="blog-item-video">
                        <iframe className="" width="560" height="315" src="https://www.youtube.com/embed/0N1tkG8ApSc?si=axp605TfY2iTSpaH" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default Blog1
