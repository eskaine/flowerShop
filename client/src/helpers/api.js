import axios from 'axios';
import { authHeader } from './func';

export const axiosGet = async (url, token) => {
    let header = token ? authHeader(token) : {};
    try {
        let res = await axios.get(url, header);
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}

export const axiosPost = async (url, data, token) => {
    let header = token ? authHeader(token) : {};
    try {
        let res = await axios.post(url, data, header);
        if(res.status === 200) {
            if(res.data) {
                return res.data;
            }
            return res.status;
        }
      } catch (error) {
        return null;
      }
}

export const axiosPut = async (url, data, token) => {
    let header = token ? authHeader(token) : {};
    try {
        let res = await axios.put(url, data, header);
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}

export const axiosDel = async (url, token) => {
    let header = token ? authHeader(token) : {};
    try {
        let res = await axios.delete(url, header);
        if(res.status === 200) {
            return res.data;
        }
      } catch (error) {
        return null;
      }
}