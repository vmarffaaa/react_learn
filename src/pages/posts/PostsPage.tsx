import React from 'react';
import PostsComponent from "../../component/posts/PostsComponent";
import styles from "./PostsPage.module.css"

const PostsPage = () => {
    return (
        <div>
            <h1 className={styles.title}>Posts Page</h1>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;