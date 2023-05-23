import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from '@styles/ProductItem.module.scss';
import buttonAddToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const { addToCart } = useContext(AppContext); 
    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles['product-item']}>
            <Image src={product.images[0]} alt={product.title} width={250} height={250} />
            <div className={styles['product-card']}>
                <div className={styles['product-info']}>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <Image onClick = {() => handleClick(product)} src={buttonAddToCart} alt="icon-add-cart" />
            </div>
        </div>
    );
};

export default ProductItem;
