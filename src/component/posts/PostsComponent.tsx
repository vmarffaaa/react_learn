import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postActions} from "../../redux/slices/postSlice";
import PostComponentWithButton from "./PostComponentWithButton";
import styles from "../users/UserComponent.module.css";


const PostsComponent:   FC= () => {
    let {postSlice: {posts,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);


    return (
            <div>
                <div>
                    {!isLoaded && <div className={styles.loader}>Loading in process....</div>}
                    {posts.map((post) => (<PostComponentWithButton key={post.id} post={post}/>))}
                </div>
            </div>
    );
};

export default PostsComponent;