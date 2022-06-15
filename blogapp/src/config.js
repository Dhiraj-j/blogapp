import axios from "axios"


export const axiosInstance = axios.create({
    baseURL: "https://blogbydhiraj.herokuapp.com/api/"
})