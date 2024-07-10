import axios from 'axios';
import {IComment} from "../models/IComment";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

const getAllUsers = async ():Promise<IUser[]> => {
    return await axiosInstance.get('/users').then((response) => response.data);
}

let getAllPosts = async (): Promise<IPost[]> => {
    return await axiosInstance.get('/posts').then((response) => response.data)
};

let getAllComments = async (): Promise<IComment[]> => {
    return await axiosInstance.get('/comments').then((response) => response.data)
};

export {getAllUsers, getAllPosts, getAllComments}