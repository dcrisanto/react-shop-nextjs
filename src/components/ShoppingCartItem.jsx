import React from 'react';
import Image from 'next/image';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
    return (
        <div className="product">
                <div className="info-product">
                    <Image className="image-product" src="./assets/imgs/round_shelf.svg" alt="" />
                    <p>Round shelf</p>
                </div>
                <div className="product-price">
                    <p>$120,00</p>
                    <p>X</p>
                </div>
        </div>
    )
}

export default ShoppingCartItem
