import {createBrowserRouter, RouteObject} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/users/UsersPage";
import UserPage from "../pages/users/UserPage";
import PostsPage from "../pages/posts/PostsPage";
import PostPage from "../pages/posts/PostPage";
import React from "react";

const routes:RouteObject[]=[    {
    path: '/',
    element: <MainLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path: 'users', element: <UsersPage/>},
        {path: 'users/:id', element: <UserPage/>},
        {path: 'posts', element: <PostsPage/>},
        {path: 'posts/:id', element: <PostPage/>},

    ]
},]
export let router = createBrowserRouter(routes);