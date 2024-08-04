import axios from "axios"

export const SinglePageLoader = async({request,params})=>{
    const res = await axios.get("http://localhost:3000/api/post/"+params.id)
    return res.data
}

export const ListPageLoader = async({request,params})=>{
    const query = request.url.split("?")[1]
    const res = await axios.get("http://localhost:3000/api/post?"+query)
    return res.data
}

export const profilePageLoader = async(req,params)=>{
    const usertoken = localStorage.getItem('user')
    let a = JSON.parse(usertoken);
    const postprom = await axios.get("http://localhost:3000/api/users/profilePosts",{
        headers:{
      Authorization:`${a.token}`
}})
    return postprom.data
}

