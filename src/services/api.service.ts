import axios, {AxiosResponse} from 'axios';
import {IComment} from "../models/IComment";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
import {baseURL, urls} from "../constants/urls";


let axiosInstance = axios.create({
    baseURL: baseURL,
});

const userApiService={
    getAllUsers:():Promise<AxiosResponse<IUser[]>> =>{
        return axiosInstance.get<IUser[]>(urls.users.allUsers);
    },
    getPostsOfUserById:(id:string):Promise<AxiosResponse<IPost[]>> =>{
        return axiosInstance.get<IPost[]>(urls.users.postsById(id))
    }
}
const postApiService={
    getAllPosts:():Promise<AxiosResponse<IPost[]>> =>{
        return axiosInstance.get<IPost[]>(urls.posts.allPosts);
    },
    getCommentsOfPostByID:(id:string):Promise<AxiosResponse<IComment[]>> =>{
        return axiosInstance.get<IComment[]>(urls.posts.commentsById(id))
    }
}

const commentApiService={
    getAllComments:():Promise<AxiosResponse<IComment[]>> =>{
        return axiosInstance.get<IComment[]>(urls.comments.allComments);
    }}

export {
    userApiService, postApiService, commentApiService
}
// const getAllUsers = async ():Promise<IUser[]> => {
//     return await axiosInstance.get('/users').then((response) => response.data);
// }
// const getPostsOfUserByID = async (id: number): Promise<IPost[]> => {
//     return await axiosInstance.get(`/users/${id}/posts`).then((response) => response.data);
// }
//
// let getAllPosts = async (): Promise<IPost[]> => {
//     return await axiosInstance.get('/posts').then((response) => response.data)
// };
//
// const getCommentsOfPostByID = async (id: number): Promise<IComment[]> => {
//     return await axiosInstance.get(`/posts/${id}/comments`).then((response) => response.data);
// }
//
// let getAllComments = async (): Promise<IComment[]> => {
//     return await axiosInstance.get('/comments').then((response) => response.data)
// };

// export {getAllUsers, getAllPosts, getAllComments, getPostsOfUserByID, getCommentsOfPostByID}