import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/users/UsersPage";
import SingleUserPage from "../pages/users/SingleUserPage";
import PostsPage from "../pages/posts/PostsPage";
import SinglePostPage from "../pages/posts/SinglePostPage";
import CommentsPage from "../pages/comments/CommentsPage";
import React from "react";

const routes:RouteObject[]=[    {
    path: '/',
    element: <MainLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id', element: <SingleUserPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'posts/:id', element: <SinglePostPage/>},
        {path: 'comments', element: <CommentsPage/>},

    ]
},]
export let router = createBrowserRouter(routes);