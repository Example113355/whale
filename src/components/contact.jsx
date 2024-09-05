import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation('contact')

    return (
        <div className="blog-item-contact">
            <h2>{t("header")}</h2>

            <ul>
                <li>{t("1")}:  whalebots.net@gmail.com </li>
                <li>{t("2")}: <a href="https://discord.gg/kDRGWmu9Nf">discord.gg/kDRGWmu9Nf </a></li>
                <li>{t("3")}: <a href="https://www.facebook.com/WhaleBots.net/">www.facebook.com/WhaleBots.net/</a></li>
            </ul>
        </div>
    )
}

export default Contact;
