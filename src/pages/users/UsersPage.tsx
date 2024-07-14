import React from 'react';
import UsersComponent from "../../component/users/UsersComponent/UsersComponent";
import styles from "./UserPageStyle.module.css"

const UsersPage = () => {
    return (
        <div>
            <h1 className={styles.title}>Users Page</h1>
            <UsersComponent />
        </div>
    );
};

export default UsersPage;