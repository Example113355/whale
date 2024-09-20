import { Space, Table, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CartTable = ({ setTotal }) => {
    const [cart, setCart] = useState([]);
    const { i18n } = useTranslation();
    let selectedLanguage = i18n.language;

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('whaleCart')) || []);
    }, []);

    const handleIncrease = (record) => {
        const updatedCart = cart.map(item => {
            if (item.id === record.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('whaleCart', JSON.stringify(updatedCart));
    };

    const handleDecrease = (record) => {
        const updatedCart = cart.map(item => {
            if (item.id === record.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('whaleCart', JSON.stringify(updatedCart));
    };

    const handleRemove = (record) => {
        const updatedCart = cart.filter(item => item.id !== record.id);
        setCart(updatedCart);
        localStorage.setItem('whaleCart', JSON.stringify(updatedCart));
    };

    const columns = [
        {
            title: 'Item',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: selectedLanguage === 'vi' ? 'price_vi' : 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <Space size="small">
                    <Button className='quantity-button' onClick={() => handleDecrease(record)}>-</Button>
                    {text}
                    <Button className='quantity-button' onClick={() => handleIncrease(record)}>+</Button>
                </Space>
            ),
        },
        {
            title: 'Sum',
            dataIndex: 'total',
            key: 'total',
            render: (text, record) => {
                if(selectedLanguage === 'vi') {
                    return (parseFloat(record.price_vi.replace(/[đ.]/g, '')) * record.quantity).toLocaleString('vi-VN') + ' đ';
                } else {
                    return (parseFloat(record.price.replace('$', '')) * record.quantity).toFixed(2) + ' $';
                }
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="small">
                    <a onClick={() => handleRemove(record)}>Remove</a>
                </Space>
            ),
        },
    ];

    const data = JSON.parse(localStorage.getItem('whaleCart')) || [];

    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ x: true }}
            rowKey="id"
            summary={() => {
                let total = 0;
                if(selectedLanguage === 'vi') {
                    data.forEach(item => {
                        total += parseFloat(item.price_vi.replace(/[đ.]/g, '')) * item.quantity;
                    });
                } else {
                    data.forEach(item => {
                        total += parseFloat(item.price.replace('$', '')) * item.quantity;
                    });
                }
                setTotal(total);
                return (
                    <>
                        {data.length > 0 && (
                            <Table.Summary.Row>
                                <Table.Summary.Cell className="cart-sum" colSpan={3}>Total</Table.Summary.Cell>
                                <Table.Summary.Cell className="cart-sum-value">{selectedLanguage === 'vi'? total.toLocaleString('vi-VN') + ' đ': total.toFixed(2) + ' $'}</Table.Summary.Cell>
                            </Table.Summary.Row>
                        )}
                    </>
                );
            }}
        />
    )
}

export default CartTable;
