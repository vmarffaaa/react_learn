import React from 'react';
import {Link} from "react-router-dom";
import styles from './MenuComponent.module.css'

const MenuComponent = () => {
    return (
        <div className={styles.box}>
            <ul className={styles.flex}>
                <li className={styles.nav}><Link className={styles.link} to={''}>Home</Link></li>
                <li className={styles.nav}><Link className={styles.link} to={'users'}>Users</Link></li>
                <li className={styles.nav}><Link className={styles.link} to={'posts'}>Posts</Link></li>
                <li className={styles.nav}><Link className={styles.link} to={'comments'}>Commnets</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;