import React, { useState } from 'react';
import MomoIcon from '../assets/icon/momo.png';
import PaypalIcon from '../assets/icon/paypal.svg';
import BankIcon from '../assets/icon/bank.png';
import UsdtIcon from '../assets/icon/usdt.png';
import MomoQrCode from '../assets/icon/momo_qr_code.jpg';
import UsdtQrCode from '../assets/icon/usdt_qr_code.jpg';
import BankQrCode from '../assets/icon/bank_qr_code.png';
import ZaloIcon from '../assets/icon/zalo.svg';
import TelegramIcon from '../assets/icon/telegram.svg';
import WhatsappIcon from '../assets/icon/whatsapp.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'
import { USD_VND, ZALO, WHATSAPP } from '../utils/const';

const CheckoutItem = ({ type, total }) => {
    const [showContent, setShowContent] = useState(false);
    const { t } = useTranslation('global')
    let item_header = '';
    let item_icon = '';

    const toggleShowContent = () => {
        setShowContent(!showContent);
    }

    switch (type) {
        case 'momo':
            item_header = t("cart.momo");
            item_icon = MomoIcon;
            break;
        case 'paypal':
            item_header = t("cart.paypal");
            item_icon = PaypalIcon;
            break;
        case 'bank':
            item_header = t("cart.bank");
            item_icon = BankIcon;
            break;
        case 'usdt':
            item_header = t("cart.usdt");
            item_icon = UsdtIcon;
            break;
        default:
            item_header = 'Thanh toán';
            item_icon = BankIcon;
    }

    const CheckoutItemContent = () => {
        if (type === 'momo') {
            return (
                <div className="checkout-item-content">
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.phone")}: </span>
                        <span className='content-item-right'>0946212588</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.receiver")}: </span>
                        <span className='content-item-right'>Phạm Hoàng Anh</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.amount")}: </span>
                        <span className='content-item-right'>{total}$</span>
                    </div>
                    <div className="content-item content-code">
                        <span className='content-item-left'>{t("cart.scanMomo")}:</span>
                        <img className='content-item-code' src={MomoQrCode} alt="" />
                    </div>
                </div>
            )
        } else if (type === 'paypal') {
            return (
                <div className="checkout-item-content">
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.receiver")}: </span>
                        <span className='content-item-right'>Phạm Hoàng Anh</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.amount")}: </span>
                        <span className='content-item-right'>{total}$</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>Paypal link: </span>
                        <span className='content-item-right'>Paypalmina91@gmail.com</span>
                    </div>
                </div>
            )
        } else if (type === 'usdt') {
            return (
                <div className="checkout-item-content">
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.usdtNetwork")}: </span>
                        <span className='content-item-right'>Tron (TRC20)</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.usdtAddress")}: </span>
                        <span className='content-item-right'>TMGdwv5Pi7nxT4asifjzRsaJitU7mYTrwC</span>
                    </div>
                    <div className="content-item content-code">
                        <span className='content-item-left'>USDT QR-CODE:</span>
                        <img className='content-item-code' src={UsdtQrCode} alt="" />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="checkout-item-content">
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.bankName")}: </span>
                        <span className='content-item-right'>ShinhanBank</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.accountNumber")}: </span>
                        <span className='content-item-right'>700030660523</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.receiver")}: </span>
                        <span className='content-item-right'>PHẠM HOÀNG ANH</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.note")}: </span>
                        <span className='content-item-right'>{t("cart.note1")}</span>
                        <span className='content-item-right'>{t("cart.note2")}</span>
                    </div>
                    <div className="content-item">
                        <span className='content-item-left'>{t("cart.amount")}: </span>
                        <span className='content-item-right'>{total}$</span>
                    </div>
                    <div className="content-item content-code">
                        <span className='content-item-left'>{t("cart.scanBank")}:</span>
                        <img className='content-item-code' src={BankQrCode} alt="" />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="checkout-item">
            <div className="checkout-item-head" onClick={toggleShowContent}>
                <div className="checkout-item-head--top">
                    <div className="checkout-item-name">
                        <h3>{item_header}</h3>
                        <img height={20} src={item_icon} alt="" />
                    </div>
                    <div className="checkout-item-amount">
                        <div className="checkout-total">
                            {total}$
                        </div>
                        <div className="checkout-total">
                            {Math.ceil(total * USD_VND).toLocaleString('vi-VN')}Đ
                        </div>
                    </div>
                </div>
                <div className="checkout-item-head--bottom">
                    <FontAwesomeIcon className={`checkout-icon ${showContent ? 'icon-show' : 'icon-hide'}`} icon={faArrowUp} />
                    <FontAwesomeIcon className={`checkout-icon ${!showContent ? 'icon-show' : 'icon-hide'}`} icon={faArrowDown} />
                </div>
            </div>

            <div className={`checkout-item-container ${showContent ? 'checkout-open' : 'checkout-close'}`}>
                <CheckoutItemContent />
                <div className="contact">
                    <button onClick={() => window.open(ZALO, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-zalo'>
                        <img src={ZaloIcon} alt="" />
                        {t("cart.contactZalo")}
                    </button>
                    <button onClick={() => window.open(ZALO, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-telegram'>
                        <img src={TelegramIcon} alt="" />
                        {t("cart.contactTelegram")}
                    </button>
                    <button onClick={() => window.open(WHATSAPP, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-whatsapp'>
                        <img src={WhatsappIcon} alt="" />
                        {t("cart.contactWhatsapp")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CheckoutItem;
