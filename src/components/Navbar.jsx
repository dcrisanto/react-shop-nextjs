'use client';

import React, {useState} from 'react';
import styles from "@styles/Navbar.module.scss";
import ItemNavbar from './ItemNavbar';

const initialMenu = [
  {
    id: 1,
    name: 'All'
  },
  {
    id: 2,
    name: 'Clothes'
  },
  {
    id: 3,
    name: 'Electronics'
  },
  {
    id: 4,
    name: 'Furniture'
  },
  {
    id: 5,
    name: 'Toys'
  },
  {
    id: 6,
    name: 'Others'
  }
];

const Navbar = () => {
  const [menu, setMenu] = useState(initialMenu);

  return (
    <ul className={styles['list-categories']}>
        <li>
          {menu.map((item) => {
            return <ItemNavbar item={item} key={item.id} />
          })}
        </li>
    </ul>
  )
}

export default Navbar 
