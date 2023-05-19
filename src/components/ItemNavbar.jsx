import React from 'react';
import styles from "@styles/ItemNavbar.module.scss";

const ItemNavbar = ({item}) => {
  return (
    <a className={styles['item-navbar']} href="">{item.name}</a>
  );
}

export default ItemNavbar

