import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {getPostsOfUserById} from "../../services/api.service";
import styles from "./UserComponent.module.css"
import PostsComponent from '../posts-component/PostsComponent';

interface IProps{
    user:IUser
    getPosts:(id:number)=>void
}

const UserComponent: FC<IProps> = ({user,getPosts}) => {
    return (
        <div className={styles.divDecorate}>

           <h2 className={styles.title}> {user.id}:{user.username} </h2>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <ul><b>Address:</b>
                <li><b>Streat:</b> {user.address.street}</li>
                <li><b>Suite:</b> {user.address.suite}</li>
                <li><b>City:</b> {user.address.city}</li>
                <li><b>Zipcode:</b> {user.address.zipcode}</li>
                <li><b>Geo:</b>
                    <li><b>lat:</b> {user.address.geo.lat}</li>
                    <li><b>lat:</b> {user.address.geo.lng}</li>
                </li>
            </ul>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <ul><b>Company:</b>
                <li><b>Name:</b> {user.company.name}</li>
                <li><b>Cath</b> Phrase: {user.company.catchPhrase}</li>
                <li><b>bs:</b> {user.company.bs}</li>
            </ul>
            <br/>
            <button className={ styles.button} onClick={() =>{
            getPosts(user.id);

        }}>Show posts</button>
        </div>
    );
};

export default UserComponent;
