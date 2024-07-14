import React, {useEffect, useState} from 'react';
import {IPost} from "../../../models/IPost";
import {postApiService} from "../../../services/api.service";
import styles from "./PostsComponent.module.css"
import PostComponentWithButton from "../PostComponent/PostComponentWithButton";



const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        postApiService.getAllPosts()
            .then(value => setPosts(value.data))
    },[]);


    return (
        <div>
            <div>
                <div>
                    {posts.map((post) =>(<PostComponentWithButton key={post.id} post = {post}/>))}
                </div>
            </div>
        </div>
    );
};

export default PostsComponent;