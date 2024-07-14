import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userApiService} from "../../services/api.service";
import {IPost} from "../../models/IPost";
import PostComponent from "../../component/posts/PostComponent/PostComponent";
import styles from "./UserPageStyle.module.css"


const SingleUserPage = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        id && userApiService.getPostsOfUserById(id).then(value => setPosts(value.data));
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