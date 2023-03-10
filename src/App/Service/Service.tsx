import { AppConfig } from "../apiConfig/apiConfig";
import apiEndPoints from "../apiConfig/apiEndPoints";

const AUTH_KEY = "jwtToken";
export const setToken = (Name: any) => {
    localStorage.setItem(AUTH_KEY, Name);
  };
  export const getToken  = () => {
    return localStorage.getItem(AUTH_KEY);
  };
  export const clearStorage = (key = "") => {
    if (key == "") {
      localStorage.clear();
    }
  };

  /// Login API
  export const loginAdmin = async ({ username, password }:any) => {
    try {
     const response = await fetch(AppConfig?.baseURL + apiEndPoints?.Login, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ username, password })
     });
 
     if (response) {
      return response.json();
     } else {
       // Login failed, handle error
      throw new Error('Login failed');
     }
   } catch (error) {
     // Handle network or server error
     return   console.error(error);
   }
 }