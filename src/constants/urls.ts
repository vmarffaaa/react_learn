const  baseURL:string =  'https://jsonplaceholder.typicode.com';
const urls = {
    users:{
        allUsers:'/users',
        postsById:(id:string):string =>`${urls.users.allUsers}/${id}/posts`
    },
    posts:{
        allPosts:'/posts',
        commentsById:(id:string):string =>`${urls.posts.allPosts}/${id}/comments`


    }
}
export {
    baseURL, urls
}
