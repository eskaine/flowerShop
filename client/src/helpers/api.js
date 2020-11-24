import axios from 'axios';
import { authHeader } from './func';

/**
 * non-authenticated calls
 */

export const axiosGet = async (url) => {
    try {
        let res = await axios.get(url);
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}

export const axiosPost = async (url, data) => {
    try {
        let res = await axios.post(url, data);
        if(res.status === 200) {
            return res.status;
        }
      } catch (error) {
        return null;
      }
}

/**
 * 
 * authenticated calls
 */

export const axiosAuthGet = async (url, token) => {
    try {
        let res = await axios.get(url, authHeader(token));
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}

export const axiosAuthPost = async (url, data, token) => {
    try {
        let res = await axios.post(url, data, authHeader(token));
        if(res.status === 200) {
            return res.status;
        }
      } catch (error) {
        return null;
      }
}

export const axiosAuthPut = async (url, data, token) => {
    try {
        let res = await axios.put(url, data, authHeader(token));
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}

export const axiosAuthDel = async (url, token) => {
    try {
        let res = await axios.delete(url, authHeader(token));
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}