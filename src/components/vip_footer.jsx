import { useTranslation } from 'react-i18next'

const VipFooter = () => {
    const [t, i18n] = useTranslation('global')
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('languageWhale', lng)
    }
    
    return (
        <div className="vip-footer">
            <span>Copyright © 2024. All rights reserved.</span>
            <div className="languages">
                <button className='language-button' onClick={() => changeLanguage('en')}>English</button>
                <button className='language-button' onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
            </div>
        </div>
    );
};

export default VipFooter;
