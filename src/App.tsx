import React, { Component } from 'react';
import { getAllUsers, getPostsOfUserById } from './services/userService';
import Users from './component/usersComponent/Users';
import { IUser } from './models/IUser';
import { IPost } from './models/IPost';
import styles from  './component/usersComponent/Users.module.css'

interface AppState {
  users: IUser[];
  userPosts: IPost[];
}

class App extends Component<{}, AppState> {
  state: AppState = {
    users: [],
    userPosts: [],
  };

  async componentDidMount() {
    const users = await getAllUsers();
    this.setState({ users });
  }

  handleUserClick = async (userId: number) => {
    const posts = await getPostsOfUserById(userId);
    this.setState({ userPosts: posts });
  };

  render() {
    const { users, userPosts } = this.state;

    return (
        <div className={styles.container}>
        <div className={styles.user_block}>
          <h1 className={styles.title}>Users</h1>
          <Users users={users} onClick={this.handleUserClick} />
        </div>
          <div className={styles.post_block}>
            <div className={styles.users_post}>
              <h1 className={styles.title}>User Posts:</h1>
              <div className={styles.post}>
                {userPosts.map((post) => (
                    <div key={post.id} className={styles.post_body}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                      <div className={styles.likes_flex}>
                        <p><b>Like:</b> {post.reactions.likes}</p>
                        <p><b>Dislike:</b> {post.reactions.dislikes}</p>
                      </div>
                      <p><b>View:</b> {post.views}</p>
                    </div>
                ))}
                <h3 className={styles.post_body}>Choose a user to see their posts</h3>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default App;
