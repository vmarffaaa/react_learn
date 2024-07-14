import React from 'react';
import PostsComponent from "../../component/posts/PostsComponent/PostsComponent";
import styles from "./PostsPageStyle.module.css"

const PostsPage = () => {
    return (
        <div>
            <h1 className={styles.title}>Posts Page</h1>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;