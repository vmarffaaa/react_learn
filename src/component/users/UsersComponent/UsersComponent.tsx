import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../../models/IUser";
import {userApiService} from "../../../services/api.service";
import UserComponent from "../UserComponent/UserComponent";
import styles from "../UsersComponetStyle/UsersComponentStyle.module.css"


const UsersComponent:   FC= () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userApiService.getAllUsers()
            .then(value => setUsers(value.data))
    },[]);


    return (
        <div>
            <div>
                <div className={styles.flex}>
                    {users.map((user) =>(<UserComponent key={user.id} user = {user}/>))}
                </div>
            </div>
        </div>
    );
};

export default UsersComponent;