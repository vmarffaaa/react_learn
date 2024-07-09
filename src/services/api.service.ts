import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}

let getAllPosts = async () => {
    return await axiosInstance.get('/posts').then((response) => response.data)
};

let getAllComments = async () => {
    return await axiosInstance.get('/comments').then((response) => response.data)
};

export {getAllUsers, getAllPosts, getAllComments}