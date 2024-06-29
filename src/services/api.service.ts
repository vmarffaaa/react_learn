import {IUser} from "../models/IUser";
import axios from 'axios';

// const getAllUsers = () =>{
//     return  fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//
// }
// const getPostsOfUserById = (id:number) =>{
//     return  fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
//         .then(value => value.json())
//
// }
// export {getAllUsers, getPostsOfUserById}

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}
let getPostsOfUserById = async (id: number) => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response) => response.data)
};

export {getAllUsers, getPostsOfUserById}