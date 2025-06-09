import axios from "axios";
import env from "react"

export default axios.create({
baseURL: 'http://localhost:3000',
headers:{
    Authorization:env.WEATHER_KEY   
}
})