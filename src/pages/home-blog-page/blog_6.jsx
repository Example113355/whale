import { useTranslation } from 'react-i18next'
import Contact from '../../components/contact'

const Blog6 = () => {
    const { t } = useTranslation('blog6')

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
                    <span className="italic">
                        <em>{t("lines.2")}</em>
                    </span>

                    <p className="blog-item-paragraph">
                        {t("lines.3")}
                    </p>

                    <div className="blog-item-list">
                        <strong>{t("lines.4")}</strong>
                        <strong>{t("lines.5")}</strong>
                        <strong>{t("lines.6")}</strong>
                    </div>

                    <p className="blog-item-paragraph">
                        {t("lines.8")}
                    </p>

                    <p className="blog-item-paragraph">
                        <em>{t("lines.9")}</em> {t("lines.10")} <strong>Start</strong> &gt; <strong>Settings</strong> &gt; <strong>Update & Security</strong> &gt; <strong>Windows Security</strong> &gt; <strong>Virus & threat protection</strong>.
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_3-1.png?w=1152&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_1-2.png?w=1152&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        <em>{t("lines.16")}</em> {t("lines.17")} <strong>Virus & threat protection settings</strong>{t("lines.19")} <strong>Manage settings</strong>{t("lines.21")} <strong>Exclusions</strong>{t("lines.23")}<strong>Add or remove exclusions</strong>.
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_2-1.png?w=1199&ssl=1" alt="" />
                    </div>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_4-1.png?w=1197&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        <em>{t("lines.25")}</em> {t("lines.26")} <strong>Add an exclusion</strong>{t("lines.28")}<strong>Folders</strong>{t("lines.30")}
                    </p>

                    <div className="blog-item-img">
                        <img src="https://i0.wp.com/whalebots.net/wp-content/uploads/2022/03/Screenshot_5-1.png?w=1201&ssl=1" alt="" />
                    </div>

                    <p className="blog-item-paragraph">
                        <em>{t("lines.31")}</em> {t("lines.32")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.33")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.34")} <strong>Windows 10</strong>{t("lines.36")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.37")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.38")}
                    </p>

                    <p className="blog-item-paragraph">
                        {t("lines.39")}
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

export default Blog6
