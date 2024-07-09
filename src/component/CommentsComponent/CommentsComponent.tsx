import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getAllComments} from "../../services/api.service";
import styles from "./CommentsComponent.module.css"



const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getAllComments().then((value: IComment[]) => {
            setComments([...value]);
        });
    },[]);


    return (
        <div>
            <div>
                <div>
                    {comments.map((comment) =>
                        <div className={styles.comment_box}>
                            <h2> {comment.id}: {comment.name} </h2>
                            <p><b>Post Id:</b> {comment.id}</p>
                            <p><b>Email of {comment.name}:</b> {comment.email}</p>
                            <p><b>Comment:</b> {comment.body}</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default CommentsComponent