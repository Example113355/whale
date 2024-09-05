import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog8 = () => {
    const { t } = useTranslation('blog8')

    return (
        <div className="blog-item">
            <div className="blog-item-container">
                <h1>{t("lines.1")}</h1>
                <div className="blog-item-date">
                    <span className="posted-on">
                        <time className="updated" dateTime="2024-6-6T08:18:34+00:00">October 3, 2023</time>
                    </span>

                    <span className="cat-list">
                        Uncategorized
                    </span>
                </div>
                <div className="blog-item-content">
                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/image.png?w=1280&ssl=1" alt="" />
                    </div>

                    <span className="italic">
                        <em>{t("lines.2")}</em>
                    </span>

                    <h2>{t("lines.3")}</h2>
                    <h2>Rise of Kingdoms Bot</h2>

                    <p className="blog-item-paragraph">
                        {t("lines.4")}
                    </p>

                    <div className="blog-item-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VSIYtqsfJuY?si=g11PkLjz8FmW0P79" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="blog-item-download">
                        <a href="https://whalebots.net/download/">
                            {t("lines.18")}
                        </a>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.5")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.6")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_2.png?w=689&ssl=1" alt="" />
                        <span className="img-description">{t("lines.7")}</span>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.8")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_3.png?w=963&ssl=1" alt="" />
                        <span className="img-description">{t("lines.9")}</span>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_4.png?w=965&ssl=1" alt="" />
                        <span className="img-description">{t("lines.10")}</span>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.11")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_5.png?w=960&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.12")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/bot-interface-1.png?w=619&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        <strong>{t("lines.13")}</strong>
                    </p>

                    <p className="blog-item-paragraph">
                        ==&gt; {t("lines.14")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_6.png?w=1753&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_7.png?w=1280&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_8.png?w=1280&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.15")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.16")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.17")}
                    </p>

                    <div className="blog-item-download">
                        <a href="https://whalebots.net/download/">
                            DOWNLOAD HERE
                        </a>
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/07/image.png?w=794&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-download">
                        <a href="/vip">
                            GET VIP HERE
                        </a>
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default Blog8
