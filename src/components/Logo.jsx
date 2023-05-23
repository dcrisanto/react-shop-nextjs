import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/Logo.module.scss';
import logo from '@imgs/logo_yard_sale.svg';

const Logo = () => {
  return (
    <div className={styles['logo-container']}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
