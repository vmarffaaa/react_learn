import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./PostsComponent.module.css";


const PostComponent:FC<any> = ({post}) => {
    const navigate=useNavigate()
    const onClickNavigateHandler=()=>{
        navigate(post.id.toString())
    }
    return (
        <div className={styles.posts_block_with_button}>
            <h2> {post.id}: {post.title} </h2>
            <p><b>User Id:</b> {post.userId}</p>
            <p><b>Post Id:</b> {post.id}</p>
            <p><b>Post:</b> {post.body}</p>
            <button className={styles.button} onClick={onClickNavigateHandler}>Show Comments</button>
        </div>
    );
};

export default PostComponent;