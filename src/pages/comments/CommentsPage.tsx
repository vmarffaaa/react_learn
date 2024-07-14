import React from 'react';
import CommentsComponent from "../../component/CommentsComponent/CommentsComponent";
import styles from "./CommentsPageStyle.module.css";

const CommentsPage = () => {
    return (
        <div>
            <h1 className={styles.title}>Comments Page</h1>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;