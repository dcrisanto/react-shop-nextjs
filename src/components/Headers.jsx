'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import styles from "@styles/Headers.module.scss";
import Logo from '@components/Logo';
import Navbar from './Navbar';
import Menu from './Menu';
import MyOrder from '@containers/MyOrder';
import iconMenu from '@icons/icon_menu.svg';
import iconShopping from '@icons/icon_shopping_cart.svg';

const Headers = () => {
    //const [toggle, setToggle] = useState(false);
    //const [toggleOrders, setToggleOrders] = useState(false)
    const { state, toogleOrder, toogleMenu } = useContext(AppContext);

    const loggedIn = true;

    /* const handleToggle = () => 
        setToggle(!toggle);
    } */

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Image onClick={() => toogleMenu()} className={styles['icon-menu']} src={iconMenu} alt="icon-menu" />
                <div className={styles['nav-left-secction']}>
                    <Logo />
                    <Navbar />
                </div>
                <div className={styles['nav-right-secction']}>
                    <ul className={styles['nav-account-card']}>
                        {!loggedIn && <li className={styles['item-sign-in']}> Sign in</li>}
                        {loggedIn && <li className={styles['item-email']} onClick={() => toogleMenu()}>dorelly.crisanto@gmail.com</li>}
                        <li className={styles['item-cart']} onClick={() => toogleOrder()}>
                            <Image className={styles['icon-shopping-notification']} src={iconShopping} alt="icon-shopping-notification" />
                            {state.cart.length > 0 ? <div>{state.cart.length}</div> :null}
                        </li>
                    </ul>
                </div>
                
            </nav>
            {state.menuIsOpen && <Menu />}
            {state.orderIsOpen && <MyOrder />}
        </header>
    );
};

export default Headers;
