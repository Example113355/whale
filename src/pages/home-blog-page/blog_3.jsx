import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog3 = () => {
    const { t } = useTranslation('blog3')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2024-7-4T08:18:34+00:00">July 4, 2024</time>
                    </span>

                    <span className="cat-list">
                        Uncategorized
                    </span>
                </div>
                <div className="blog-item-content">
                    <span className="italic">
                        <em>{t("lines.2")}</em>
                    </span>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/Screenshot_3.jpg?w=1280&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>Rise of Kingdoms</strong> {t("lines.3")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/Screenshot_1.jpg?w=1280&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>Whalebots</strong>{t("lines.4")}
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.5")}
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vlh5AwJYq1I?si=ubSOX3QuOglybclt" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.6")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.7")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VSIYtqsfJuY?si=66E-bO2lawJu3NwZ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.8")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.9")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.10")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/vZB44sm0kZw?si=MlyNBWmXjjxYluqC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.11")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.12")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.13")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SUOYXxhpzAQ?si=OksJKPxPiQf9U2lm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.14")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.15")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.16")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BMR6TtZCWqs?si=o4CrmPU5Xpya-MUi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.17")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.18")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.19")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/E3hncPI7BXc?si=f3xeRTLhMMQ3JkIe" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.20")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.21")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.22")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QOikSqm2wqQ?si=vR0c8wgvNZtXyNzI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <span className="img-description">{t("lines.23")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.24")}
                    </div>

                    <div className="blog-item-paragraph">
                        <strong>{t("lines.25")}</strong>
                    </div>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/c1x3W0extJs?si=Krp6iSdDA0V6cwaS" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.26")}
                    </div>

                    <hr className="horizontaline" />

                    <div className="blog-item-paragraph">
                        {t("lines.27")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/Screenshot_5.jpg?w=622&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.28")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/Untitled.png?w=812&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.29")}
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/rok1.png?w=556&ssl=1" alt="" />
                        <span className="img-description">{t("lines.30")}</span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2023/06/Screenshot_1.png?w=544&ssl=1" alt="" />
                        <span className="img-description">{t("lines.31")}</span>
                    </div>

                    <div className="blog-item-paragraph">
                        {t("lines.32")}
                    </div>

                    <div className="blog-item-download">
                        <a href="https://whalebots.net/download/">
                            DOWNLOAD HERE
                        </a>
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

export default Blog3
