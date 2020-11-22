import axios from "axios";
import log from "./logger";
import { apiConfig } from "../assets/config";

const api = axios.create({
    timeout: apiConfig.apiTimeOut,
    baseURL: apiConfig.baseUrl
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            log.info(
                "Got error response from API. status code:",
                error.response.status
            );
        } else if (error.request) {
            log.info("Request timed out");
        } else {
            log.info("Some error occurred while setting up request");
        }
        return Promise.reject(error);
    }
);

export { api };
