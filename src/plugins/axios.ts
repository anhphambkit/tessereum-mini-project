import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface ResponseData {
  data?: any;
}


const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Accept-Language": "*",
        "Content-Type": "application/json"
    }
})

apiClient.interceptors.response.use((response: AxiosResponse) => {
    if (response.status === 200) { // Success
        const data: ResponseData = response.data
        return data;
    } else {
        // Handle error
        console.log("response", response)
        return null;
    }
});

export default apiClient;