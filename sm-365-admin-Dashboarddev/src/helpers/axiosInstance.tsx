/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosResponse } from "axios";
// import { ACCESS_DENIED } from "@constants/actionTypes";
// import { useHistory } from "react-router-dom";
import { StatusCodes, ErrorResponse } from "@utilities/apis";


const httpClient = (history: any) => {
  // const baseURL = process.env.REACT_APP_BACKEND_URL;
  // const history = useHistory();

  let headers: any = {};

  if (localStorage.token) {
    // headers.Authorization = `Bearer ${localStorage.token}`;
    headers.Authorization = `${localStorage.token}`;
  }

  // Bind selected server
  //headers["X-SERVER-WIMX"] = `${localStorage["X-SERVER-WIMX"]}`;

  const axiosInstance = axios.create({
    //baseURL: baseURL,
    headers,
    //withCredentials: true,
  });

  axiosInstance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    // Do something with response error
    if (error.response.status === StatusCodes.UnAuthorized) {
      console.log('unauthorized, logging out ...');

      //auth.logout();
      //history.replace('/login');
    }
    else if (error.response.status === StatusCodes.BadRequest) {
      //auth.logout();
      // history.replace('/login');
    }
    return Promise.reject(error.response);
  });

  const post = async (history: any, url: string, params: any) => {
    return await httpClient(history).post(url, params).then(res => {
      return Promise.resolve(res);
    })
      .catch(error => {
        return Promise.reject(error);
      })
  }

  return axiosInstance;
};

export const post = async (history: any, url: string, params: any) => {
  return await httpClient(history).post(url, params).then(res => {

    return Promise.resolve(res);
  })
    .catch(error => {
      if (error.status === StatusCodes.BadRequest) {
        // const erMsg = error.data as ErrorResponse;
        //Toast.show(erMsg.ErrorMessage, 'short', "bottom").subscribe()
      }

      return Promise.reject(error);
    })
}

