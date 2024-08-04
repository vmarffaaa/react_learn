import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/slices/userSlice";
import UserComponent from "./UserComponent";
import styles from "./UserComponent.module.css"


const UsersComponent:   FC= () => {
    let {userSlice: {users,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);


    return (
        <div>
            <div className={styles.flex}>

                {!isLoaded && <div className={styles.loader}>Loading in process....</div>}
                {users.map((user) => (<UserComponent key={user.id} user={user}/>))}
            </div>
        </div>
    );
};

export default UsersComponent;