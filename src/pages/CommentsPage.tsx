import React from 'react';
import CommentsComponent from "../component/CommentsComponent/CommentsComponent";
import styles from "../component/CommentsComponent/CommentsComponent.module.css"

const CommentsPage = () => {
    return (
        <div>
            <h1>Comments Page</h1>
            <CommentsComponent/>
        </div>
    );
};

export default CommentsPage;