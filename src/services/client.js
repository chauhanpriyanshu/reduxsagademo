import axios from 'axios'

let primaryServer = axios.create({
    baseURL: 'https://api.openweathermap.org',
    headers: {
        "content-Type": "application/json"
    }
})
primaryServer.interceptors.request.use(
    (response) => {
        return response
    },
    (error) => {
        return error
    }
)

export default primaryServer;

