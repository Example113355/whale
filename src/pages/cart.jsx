import CartTable from "../components/cart-table";
import React, {useState} from 'react'
import CheckoutItem from "../components/checkout-item";
import { useTranslation } from 'react-i18next'

const CartPage = () => {
    const [total, setTotal] = useState(0);
    const { t } = useTranslation('global')

    return (
        <div className="cart">
            <div className="cart-contain">
                <div className="cart-packages">
                    <h2 className="cart-header">{t("cart.header1")}</h2>
                    <CartTable setTotal={setTotal} />
                </div>

                <div className="cart-checkout">
                    <h2 className="cart-header">
                        {t("cart.header2")}
                    </h2>
                    <div className="checkout-list">
                        <CheckoutItem type='momo' total={total} />
                        <CheckoutItem type='paypal' total={total} />
                        <CheckoutItem type='bank' total={total} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
