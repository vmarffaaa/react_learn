import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostsPage from "../pages/UserPostsPage";

const routes = [{
    path:'', element: <App/>, children:[
    {path: 'users', element:<UsersPage/> },
    {path: 'posts', element:<PostsPage/> },
    {path: 'userPosts', element:<UserPostsPage/> }
    ]
}]

export const router = createBrowserRouter(routes)