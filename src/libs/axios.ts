import axios from "axios";

export const api = axios.create( {
    baseURL: 'https://nodejs-serverless-function-express-rouge-kappa.vercel.app/api'
})
