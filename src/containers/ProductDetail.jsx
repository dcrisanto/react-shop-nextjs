import React from 'react';
import Image from 'next/image';
import styles from '@styles/ProductDetail.module.scss';
import iconClose from '@icons/icon_close.svg';
import imageProduct from '@imgs/fridge.svg';
import ProductInfo from '@components/ProductInfo';

const ProductDetail = () => {
    return (
        <aside className={styles['aside-product-detail']}>
            <section className={styles['product-detail-section']}>
                <div className={styles['container-img']}>
                    <div className={styles['container-icon-close']}>
                        <Image className={styles['icon-close']} src={iconClose} alt="icon-close" />
                    </div>
                    <Image className={styles['image-product']} src={imageProduct} alt="" />
                    <ul className={styles['list-buttons']}>
                        <li className={styles['item-button']}></li>
                        <li className={styles['item-button']}></li>
                        <li className={styles['item-button']}></li>
                    </ul>
                </div>
                
               <ProductInfo />
            </section>
        </aside>
    );
};

export default ProductDetail;
