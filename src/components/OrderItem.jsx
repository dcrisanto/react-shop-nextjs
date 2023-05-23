import React from 'react';
import Image from 'next/image';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({product}) => {
    /* const { removeFromCart } = useContext(AppContext);

    const handleRemove = (id) => {
        removeFromCart(id)
    }  */

    return (
        <div className={styles['order-item']}>
            <div className={styles['product-info']}>
                <Image src={product?.images[0]} width={250} height={250} alt={product?.title} />
                <p>{product?.title}</p>
            </div>
            <div className={styles['product-price']}>
                <p>$ {product?.price}</p>
                {/* onClick={() => handleRemove(product?.id)} */}
                <p>X</p>
            </div>
        </div>
    );
};

export default OrderItem;
