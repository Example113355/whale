import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App'

import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_en from './translations/en/global.json'
import global_vi from './translations/vi/global.json'
import contact_en from './translations/en/contact.json'
import contact_vi from './translations/vi/contact.json'

import blog1_en from './translations/en/blog1.json'
import blog1_vi from './translations/vi/blog1.json'
import blog2_en from './translations/en/blog2.json'
import blog2_vi from './translations/vi/blog2.json'
import blog3_en from './translations/en/blog3.json'
import blog3_vi from './translations/vi/blog3.json'
import blog4_en from './translations/en/blog4.json'
import blog4_vi from './translations/vi/blog4.json'
import blog5_en from './translations/en/blog5.json'
import blog5_vi from './translations/vi/blog5.json'
import blog6_en from './translations/en/blog6.json'
import blog6_vi from './translations/vi/blog6.json'
import blog7_en from './translations/en/blog7.json'
import blog7_vi from './translations/vi/blog7.json'
import blog8_en from './translations/en/blog8.json'
import blog8_vi from './translations/vi/blog8.json'

const savedLanguage = localStorage.getItem('languageWhale') || 'en';

i18next.init({
    interpolation: { escapeValue: false },
    lng: savedLanguage,
    resources: {
        en: {
            global: global_en,
            contact: contact_en,
            blog1: blog1_en,
            blog2: blog2_en,
            blog3: blog3_en,
            blog4: blog4_en,
            blog5: blog5_en,
            blog6: blog6_en,
            blog7: blog7_en,
            blog8: blog8_en
        },
        vi: {
            global: global_vi,
            contact: contact_vi,
            blog1: blog1_vi,
            blog2: blog2_vi,
            blog3: blog3_vi,
            blog4: blog4_vi,
            blog5: blog5_vi,
            blog6: blog6_vi,
            blog7: blog7_vi,
            blog8: blog8_vi
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <I18nextProvider i18n={i18next}>
        <Router>
            <App />
        </Router>
    </I18nextProvider>
)
