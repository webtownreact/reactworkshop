import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Define a class to handle HTTP requests
export class HttpClient {
  // Create an Axios instance with a base URL
  private static axiosInstance = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Static method to handle the GET request
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getRequest<T>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await HttpClient.axiosInstance.get(url, config);
      console.log('GET response:', response.data);
      return response;
    } catch (error) {
      console.error('GET error:', error);
      return error;
    }
  }

  // Static method to handle the POST request
  static async postRequest<T>(
    url: string,
    data: object,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config?: AxiosRequestConfig<any> | undefined,
  ): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await HttpClient.axiosInstance.post(url, data, config);
      console.log('POST response:', response.data);
      return response;
    } catch (error) {
      console.error('POST error:', error);
      return error;
    }
  }

  // Static method to handle the PUT request\
  static async putRequest<T>(
    url: string,
    data: object,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config?: AxiosRequestConfig<any> | undefined,
  ): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await HttpClient.axiosInstance.put(url, data, config);
      console.log('PUT response:', response.data);
      return response;
    } catch (error) {
      console.error('PUT error:', error);
      return error;
    }
  }

  // Static method to handle the DELETE request
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async deleteRequest<T>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await HttpClient.axiosInstance.delete(url, config);
      console.log('DELETE response:', response.data);
      return response;
    } catch (error) {
      console.error('DELETE error:', error);
      return error;
    }
  }

  // Static method to handle the PATCH request
  static async patchRequest<T>(
    url: string,
    data: object,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    config?: AxiosRequestConfig<any> | undefined,
  ): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await HttpClient.axiosInstance.patch(url, data, config);
      console.log('PATCH response:', response.data);
      return response;
    } catch (error) {
      console.error('PATCH error:', error);
      return error;
    }
  }

  // Static method to handle the OPTIONS request
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async optionsRequest<T>(url: string, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<T>> {
    try {
      const response: AxiosResponse<T> = await HttpClient.axiosInstance.options(url, config);
      console.log('OPTIONS response:', response.headers);
      return response;
    } catch (error) {
      console.error('OPTIONS error:', error);
      return error;
    }
  }

  // Static method to execute all requests
  // static async executeRequests(): Promise<AxiosResponse<T>> {
  //   const url = '/posts/1';
  //   await HttpClient.getRequest<any>(url);
  //   await HttpClient.postRequest<any>('/posts', {
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   });
  //   await HttpClient.putRequest<any>(url, {
  //     id: 1,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   });
  //   await HttpClient.deleteRequest<any>(url);
  //   await HttpClient.patchRequest<any>(url, {
  //     title: 'foo updated',
  //   });
  //   await HttpClient.optionsRequest<any>(url);
  // }
}

// Run the executeRequests method
// HttpClient.executeRequests();
