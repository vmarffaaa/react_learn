import React from 'react';
import UsersComponent from "../../component/users/UsersComponent";
import styles from "./UsersPage.module.css"

const UsersPage = () => {
    return (
        <div>
            <h1 className={styles.title}>Users Page</h1>
            <UsersComponent />
        </div>
    );
};

export default UsersPage;