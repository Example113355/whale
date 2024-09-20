import ContactIcon from '../assets/icon/contact.svg';
import { useState } from 'react';
import ZaloIcon from '../assets/icon/zalo.svg';
import TelegramIcon from '../assets/icon/telegram.svg';
import WhatsappIcon from '../assets/icon/whatsapp.svg';
import DiscordIcon from '../assets/icon/discord.svg';
import { ZALO, WHATSAPP, DISCORD } from '../utils/const';

const FloatingButton = () => {
    const [openContact, setOpenContact] = useState(false);

    const toggleContact = () => {
        setOpenContact(!openContact);
    }

    return (
        <div className="floating-button">
            {
                openContact && (
                    <div className="contact-list animate__animated animate__backInRight">
                        <div className="contact-item">
                            <button onClick={() => window.open(ZALO, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-zalo'>
                                <img src={ZaloIcon} alt="" />Zalo
                            </button>
                        </div>

                        <div className="contact-item">
                            <button onClick={() => window.open(ZALO, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-zalo'>
                                <img src={TelegramIcon} alt="" />Telegram
                            </button>
                        </div>

                        <div className="contact-item">
                            <button onClick={() => window.open(WHATSAPP, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-zalo'>
                                <img src={WhatsappIcon} alt="" />WhatsApp
                            </button>
                        </div>

                        <div className="contact-item">
                            <button onClick={() => window.open(DISCORD, '_blank', 'noopener,noreferrer')} className='contact-button contact-button-zalo'>
                                <img src={DiscordIcon} alt="" />Discord
                            </button>
                        </div>
                    </div>
                )
            }
            <div className={`contact-btn ${!openContact? "animate__animated animate__bounce animate__infinite animate__slow": ""}`} onClick={toggleContact}>
                <img src={ContactIcon} alt="" />
            </div>
        </div>
    );
};

export default FloatingButton;
