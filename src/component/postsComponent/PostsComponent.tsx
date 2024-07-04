import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import styles from "./PostsComponent.module.css"

interface IProps{
    posts:IPost[];
}

const PostsComponent: FC<IProps> = ({ posts }) => {
    return (

        <ul>
            <h2 className={styles.title}>Post of user:</h2>
            {
                posts.map(value =>

                    <li className={styles.liDecorate} key={value.id}>{value.title}</li>

                )
            }
        </ul>
    );
};

export default PostsComponent