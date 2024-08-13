import axios from "axios";

export const api = axios.create( {
    baseURL: 'https://nodejs-serverless-function-express-c3ladcfff-feelps-1s-projects.vercel.app/api'
})