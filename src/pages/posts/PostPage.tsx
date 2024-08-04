import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/api.service";
import {IComment} from "../../models/IComment";
import CommentComponent from "../../component/comments/CommentComponent";
import styles from "./PostsPage.module.css";

const SinglePostPage:FC = () => {
    const {id} = useParams()
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        id && postService.getCommentsOfPostByID(id)
            .then(value => setComments(value.data));
    }, [id]);
    return (
        <div>
            <h1 className={styles.title}>Comments of Post with ID {id}</h1>
            <div> {
                comments.map((comment) => (<CommentComponent key={comment.id} comment={comment}/>))
            }</div>
        </div>
    );
};

export default SinglePostPage;