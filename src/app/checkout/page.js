import React, { useContext} from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import styles from '@styles/Checkout.module.scss';
import AppContext from '@context/AppContext';

const Checkout = () => {
    //const { state } = useContext(AppContext)
    return (
      <>
        <Head>
          <title>Checkout</title>
        </Head>
        <section className={styles['secction-checkout']}>
            <h2 className={styles['title-order']}>My order</h2>
            <div className={styles.products}>
                <div className={styles['products-info']}>
                    <p>04.25.2021</p>
                    <p>6 articles</p>
                </div>
                <div className={styles['products-price']}>
                    <p>$ 120,00</p>
                </div>
            </div>
            <OrderItem />
            {/* {state.cart.map((item) => {
                return <OrderItem product={item} key={`orderItem-${item.id}`} />
            })} */}
        </section>
      </>
    )
}

export const metadata = {
  title: 'Checkout'
};

export default Checkout
