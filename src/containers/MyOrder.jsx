import React, {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import styles from '@styles/MyOrder.module.scss';
import flecha from '@icons/flecha.svg';
import shopping from '@icons/icon_shopping_cart.svg';

let result = 0;

const MyOrder = () => {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
  
    return (
        <aside className={styles['my-order-aside']}>
             {state.cart.length > 0 ? (
                <section className={styles['my-order-section']}>
                    <div className={styles.title}>
                        <Image src={flecha} alt="flecha" />
                        <h1>Shopping cart</h1>
                    </div>
                    {state.cart.map((item) => {
                        return <OrderItem product={item} key={`orderItem-${item.id}`} />
                    })}
                    <div className={styles.total}>
                        <p>Total</p>
                        <p>${sumTotal()}</p>
                    </div>
                    <div className={styles['container-btn']}>
                        <button href="/checkout">
                            <Link href="/checkout">Checkout</Link>
                        </button>
                    </div>
                </section>
            ) : (
                <section className={styles['no-order-section']}>
                    <Image src={shopping} />
                    <h2>Tu Carro está vacío</h2>
                </section>
            )}
        </aside>
    )
}

export default MyOrder
