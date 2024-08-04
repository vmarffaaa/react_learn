import axios, {AxiosResponse} from 'axios';
import {baseURL, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
});


export const userService = {
    getAll: async () => {
        const response = await axiosInstance.get<IUser[]>(urls.users.allUsers);
        return response.data;
    },
    getPostsOfUserById:(id:string):Promise<AxiosResponse<IPost[]>> =>{
        return axiosInstance.get<IPost[]>(urls.users.postsById(id))
    }
}

export const postService = {
    getAll: async () => {
        let response = await axiosInstance.get<IPost[]>(urls.posts.allPosts);
        return response.data;
    },
    getCommentsOfPostByID:(id:string):Promise<AxiosResponse<IComment[]>> =>{
        return axiosInstance.get<IComment[]>(urls.posts.commentsById(id))
    }
}
