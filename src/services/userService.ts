import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

const getAllUsers = async () => {
    const response = await axiosInstance.get('/users');
    return response.data.users;
}

const getPostsOfUserById = async (id: number) => {
    const response = await axiosInstance.get(`/posts/user/${id}`);
    return response.data.posts;
};

export { getAllUsers, getPostsOfUserById };
