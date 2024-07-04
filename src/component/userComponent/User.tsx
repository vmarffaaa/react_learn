import React, { Component } from 'react';
import { IUser } from '../../models/IUser';
import styles from './User.module.css'

interface IProps {
    user: IUser;
    onClick: (userId: number) => void;
}

class User extends Component<IProps> {
    handleClick = () => {
        const { user, onClick } = this.props;
        onClick(user.id);
    };

    render() {
        const { user } = this.props;

        return (
            <div className={styles.user_block}>
                <h3>{user.firstName} {user.lastName}</h3>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Address:</b> {user.address.address}, {user.address.city}, {user.address.state}, {user.address.country}</p>
                <p><b>Company:</b> {user.company.name}, {user.company.title}</p>
                <button className={styles.button} onClick={this.handleClick}>Show Posts</button>
            </div>
        );
    }
}

export default User;
