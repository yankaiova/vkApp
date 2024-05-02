import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const API_URL = "https://hacker-news.firebaseio.com/v0/";

class ApiInstance {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
      },
      params: { limit: 10 },
    });
  }

  async get<T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(endpoint, options);
    return response.data;
  }
}

export const apiInstance = new ApiInstance();
