const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <h1 className="header-branch"><a href="/">WHALE BOTS</a></h1>
                <div className="header-buttons">
                    <div className="header-button">
                        <a href="/vip">GET VIP</a>
                    </div>

                    <div className="header-button">
                        <a href="https://whalebots.net/download-whalebots/">DOWNLOAD</a>
                    </div>
                </div>
            </div>

            <div className="header-bot">
                <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path id="trianglePath1" d="M0 0 L50 100 L100 0 Z"></path>
                    <path id="trianglePath2" d="M50 100 L100 40 L100 0 Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Header
