import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../services/api.service";
import styles from "./UsersComponent.module.css"


const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getAllUsers().then((value: IUser[]) => {
            setUsers([...value]);
        });
    },[]);


    return (
        <div>
            <div>
                <div>
                    {users.map((user) =>
                        <div className={styles.user_box}>
                            <h2> {user.id}: {user.username} </h2>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Phone:</b> {user.phone}</p>
                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default UsersComponent;