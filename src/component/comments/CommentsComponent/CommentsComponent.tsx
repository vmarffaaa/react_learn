import React, {useEffect, useState} from 'react';
import {IComment} from "../../../models/IComment";
import {commentApiService} from "../../../services/api.service";
import styles from "./CommentsComponent.module.css"
import CommentComponent from "../CommentComponent/CommentComponent";



const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
       commentApiService.getAllComments().
       then(value => setComments(value.data))
    },[]);


    return (
        <div>
            <div>
                <div>
                    {comments.map((comment) => (<CommentComponent key={comment.id} comment={comment}/>))}
                </div>
            </div>
        </div>
    );
};

export default CommentsComponent