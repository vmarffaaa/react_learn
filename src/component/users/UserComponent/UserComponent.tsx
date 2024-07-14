import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "../UsersComponetStyle/UsersComponentStyle.module.css"

const UserComponent: FC<any> = ({user}) => {
    const navigate=useNavigate()
    const onClickNavigateHandler=()=>{
        navigate(user.id.toString())
    }

    return (
        <div className={styles.user_block}>
            <h2> {user.id}: {user.username} </h2>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <button className={styles.button} onClick={onClickNavigateHandler}>Show Posts</button>
        </div>
    );
};

export default UserComponent;