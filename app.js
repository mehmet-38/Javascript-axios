import axios  from "axios";


async function getData(id){

    const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
    return {user:users,post:posts};
}

getData(1);
export default getData;