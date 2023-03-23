import axios from "axios";
import dotenv from 'dotenv'

dotenv.config({path:"../.env"})
export default axios.create({
    baseURL:process.env.SERVER_URL
})