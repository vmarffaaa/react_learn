import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userService} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import styles from "./UsersPage.module.css"
import PostComponent from "../../component/posts/PostComponent";


const SingleUserPage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        id && userService.getPostsOfUserById(id).then(value => setPosts(value.data));
    }, [id]);


    return (
        <div>
            <h1 className={styles.title}>Posts of User with ID {id}</h1>
            <div>
                {
                    posts.map((post) =>(<PostComponent key={post.id} post = {post}/>))

                }
            </div>
        </div>
    );
};

export default SingleUserPage;