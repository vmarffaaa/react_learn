import React, {FC} from 'react';
import styles from "../PostsComponentStyle/PostsComponentStyle.module.css"

const PostComponent:FC<any> = ({post}) => {
    return (
        <div className={styles.posts_block}>
            <h2> {post.id}: {post.title} </h2>
            <p><b>User Id:</b> {post.userId}</p>
            <p><b>Post Id:</b> {post.id}</p>
            <p><b>Post:</b> {post.body}</p>
        </div>
    );
};

export default PostComponent;