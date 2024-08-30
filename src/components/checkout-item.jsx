import React, { useState } from 'react';
import MomoIcon from '../assets/icon/momo.png';
import PaypalIcon from '../assets/icon/paypal.svg';
import BankIcon from '../assets/icon/bank.png';
import MomoQrCode from '../assets/icon/momo_qr_code.jpg';
import BankQrCode from '../assets/icon/bank_qr_code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const CheckoutItem = ({ type, total }) => {
    const [showContent, setShowContent] = useState(false);
    var item_header = '';
    var item_icon = '';

    const toggleShowContent = () => {
        setShowContent(!showContent);
    }

    switch (type) {
        case 'momo':
            item_header = 'Pay with Momo';
            item_icon = MomoIcon;
            break;
        case 'paypal':
            item_header = 'Pay with Paypal';
            item_icon = PaypalIcon;
            break;
        case 'bank':
            item_header = 'Pay by Bank accout';
            item_icon = BankIcon;
            break;
        default:
            item_header = 'Thanh toán';
            item_icon = BankIcon;
    }

    return (
        <div className="checkout-item" onClick={toggleShowContent}>
            <div className="checkout-item-head">
                <div className="checkout-item-head--top">
                    <div className="checkout-item-name">
                        <h3>{item_header}</h3>
                        <img height={20} src={item_icon} alt="" />
                    </div>
                    <div className="checkout-item-amount">
                        <div className="checkout-total">
                            {total}$
                        </div>
                    </div>
                </div>
                <div className="checkout-item-head--bottom">
                    <FontAwesomeIcon className={`checkout-icon ${showContent? 'icon-show' : 'icon-hide'}`} icon={faArrowUp} />
                    <FontAwesomeIcon className={`checkout-icon ${!showContent? 'icon-show' : 'icon-hide'}`} icon={faArrowDown} />
                </div>
            </div>

            <div className={`checkout-item-container ${showContent? 'checkout-open': 'checkout-close'}`}>
                {
                    type === 'momo' ? (
                        <div className="checkout-item-content">
                            <div className="content-item">
                                <span className='content-item-left'>Phone number: </span>
                                <span className='content-item-right'>0909090909</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Receiver: </span>
                                <span className='content-item-right'>Nguyễn Văn A</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Amount: </span>
                                <span className='content-item-right'>{total}$</span>
                            </div>
                            <div className="content-item content-code">
                                <span className='content-item-left'>Scan MOMO qr-code:</span>
                                <img className='content-item-code' src={MomoQrCode} alt="" />
                            </div>
                        </div>
                    ) : type === 'paypal' ? (
                        <div className="checkout-item-content">
                            <div className="content-item">
                                <span className='content-item-left'>Receiver: </span>
                                <span className='content-item-right'>Nguyễn Văn A</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Amount: </span>
                                <span className='content-item-right'>{total}$</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Paypal link: </span>
                                <span className='content-item-right'>paypal.me/anhndt7</span>
                            </div>
                        </div>
                    ) : (
                        <div className="checkout-item-content">
                            <div className="content-item">
                                <span className='content-item-left'>Bank: </span>
                                <span className='content-item-right'>ShinhanBank</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Account number: </span>
                                <span className='content-item-right'>700030660523</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Receiver: </span>
                                <span className='content-item-right'>PHẠM HOÀNG ANH</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Note: </span>
                                <span className='content-item-right'>Don't write anything to the description</span>
                                <span className='content-item-right'>Set as default ( or Zalo name )</span>
                            </div>
                            <div className="content-item">
                                <span className='content-item-left'>Amount: </span>
                                <span className='content-item-right'>{total}$</span>
                            </div>
                            <div className="content-item content-code">
                                <span className='content-item-left'>Scan bank qr-code:</span>
                                <img className='content-item-code' src={BankQrCode} alt="" />
                            </div>
                        </div>
                    )
                }
                <button onClick={() => window.open('https://zalo.me/0971844044', '_blank', 'noopener,noreferrer')} className='contact-button'>Contact Zalo to checkout</button>
            </div>
        </div>
    );
}

export default CheckoutItem;
