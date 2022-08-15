import axios, { AxiosInstance, AxiosResponse } from "axios";
import { hideLoading, showNotify } from "@/helpers/quasar"

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
    } else if (response.status === 204 || response.status === 201) { // No content || Created
        return true;
    }
    else {
        // Handle error
        showNotify({
            type: "negative",
            message: response.data.message ? response.data.message : "Request failed, please contact Admin for detail!"
        })
        hideLoading()
        return Promise.reject(new Error(response.data.message || "Error"));
    }
}, (error: any) => {
    showNotify({
        type: "negative",
        message: error.message ? error.message : "Request failed, please contact Admin for detail!"
    })
    hideLoading()
    Promise.reject(error)
});

export default apiClient;