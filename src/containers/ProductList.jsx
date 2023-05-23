'use client';
import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

//const API = 'https://api.escuelajs.co/api/v1/products';
const API = process.env.NEXT_PUBLIC_API_PRODUCT;

const ProductList = () => {
    const products = useGetProducts(API);

    return (
        <section className={styles['product-list-section']}>
            <div className={styles.cards}>
                {products.map((product) => {
                    if (product.images.length > 0 && product.images[0] !== '' && product.images[0].includes('https')) {
                        return <ProductItem product={product} key={product.id} />;
                    }
                })}
            </div>
        </section>
    );
};

export default ProductList;

