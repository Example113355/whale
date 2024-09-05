import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { useTranslation } from 'react-i18next'

const Footer = () => {
    const [t, i18n] = useTranslation('global')

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('languageWhale', lng)
    }

    return (
        <div className="footer">
            <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z"></path>
                <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z"></path>
            </svg>

            <div className="footer-container">
                <div className="footer-social">
                    <a href="https://www.facebook.com/WhaleBots.net" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>

                <div className="footer-social">
                    <a href="https://www.youtube.com/channel/UCwcv4vzEb2kX5OqduDyusiA" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>

                <div className="footer-social">
                    <a href="https://discord.com/invite/kDRGWmu9Nf" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
            </div>

            <div className="footer-container">
                <h1 className="header-branch footer-branch"><a href="/">WHALE BOTS</a></h1>
            </div>

            <div className="footer-copyright">
                <p>© 2024 WHALE BOTS</p>
                <div className="languages">
                    <button className='language-button' onClick={() => changeLanguage('en')}>English</button>
                    <button className='language-button' onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
