import axios from "axios";



export default axios.create({
    baseUrl:VITE_API_URL || "http://localhost:5000/api",
    
})