import React, { useContext } from 'react';
import styles from "@styles/Menu.module.scss";
import AppContext from '@context/AppContext';

const Menu = () => {
    const { toogleMenu } = useContext(AppContext);
    return (
    <section className={styles['menu-section']}>
        <div className={styles['container-close']}>
            <p onClick={() => toogleMenu()} className={styles['icon-close']}>X</p>
        </div>
        <div className={styles['container-categories']}>
            <ul className={styles['menu-left']}>
                <li className={styles['item-menu']}>CATEGORIES</li>
                <li className={styles['item-menu']}>All</li>
                <li className={styles['item-menu']}>Clothes</li>
                <li className={styles['item-menu']}>Electronics</li>
                <li className={styles['item-menu']}>Furnitures</li>
                <li className={styles['item-menu']}>Toys</li>
                <li className={styles['item-menu']}>Others</li>
            </ul>
        </div>
        <div className={styles['container-account']}>
            <ul className={styles['menu-account']}>
                <li className={styles['item-account']}>My orders</li>
                <li className={styles['item-account']}>My account</li>
            </ul>
            <div className={styles['container-signout']}>
                <p>dorelly.crisanto@gmail.com</p>
                <a className={styles['signout']} href="">Sign out</a>
            </div>
        </div>
        <div className={styles['container-access-login']}>
                <a className={styles.login} href="">Log in</a>
        </div>
    </section>
    )
}

export default Menu
