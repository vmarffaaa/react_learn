import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPost";
import {getAllPosts} from "../../services/api.service";
import styles from "./PostsComponent.module.css"


const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAllPosts().then((value: IPost[]) => {
            setPosts([...value]);
        });
    },[]);


    return (
        <div>
            <div>
                <div>
                    {posts.map((post) =>
                        <div key={post.id} className={styles.post_box}>
                            <h2> {post.id}: {post.title} </h2>
                            <p><b>User Id:</b> {post.userId}</p>
                            <p><b>Post Id:</b> {post.id}</p>
                            <p><b>Post:</b> {post.body}</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default PostsComponent;