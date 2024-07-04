import React, { Component } from 'react';
import User from '../userComponent/User';
import { IUser } from '../../models/IUser';
import styles from './Users.module.css'

interface UsersProps {
    users: IUser[];
    onClick: (userId: number) => void;
}

class Users extends Component<UsersProps> {
    render() {
        const { users, onClick } = this.props;

        return (
            <div>
                {users.map((user) => (
                    <User key={user.id} user={user} onClick={onClick} />
                ))}
            </div>
        );
    }
}

export default Users;
