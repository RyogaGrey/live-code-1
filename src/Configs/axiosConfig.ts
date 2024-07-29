import axios from 'axios';
import config from './config';

const axiosInstance = axios.create({
    baseURL: config.apiBaseUrl,
    timeout: 10000,
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        let customErrorMessage = 'Ошибка сети';

        if (error.response) {
            customErrorMessage = error.response.data?.message || `Ошибка сервера: ${error.response.status}`;
        } else if (error.request) {
            customErrorMessage = 'Сервер не отвечает.';
        } else {
            customErrorMessage = `Ошибка при настройке запроса: ${error.message}`;
        }

        console.error('Ошибка Axios:', customErrorMessage);
        return Promise.reject(new Error(customErrorMessage));
    }
);

export default axiosInstance;
