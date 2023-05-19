import React from 'react';
import styles from '@styles/Search.module.scss';

const Search = () => {
    return (
        <section className={styles['search-secction']}>
            <input className={styles['input-search']} type="text" placeholder="Search product" />
        </section>
    )
}

export default Search
