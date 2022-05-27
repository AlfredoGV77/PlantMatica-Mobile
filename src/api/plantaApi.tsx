/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://mmg7n2ixnk.us-east-2.awsapprunner.com';
export const plantaApi = axios.create({baseURL});


plantaApi.interceptors.request.use(
    async(config)=>{
        const token = await AsyncStorage.getItem('token');
        if (token){
            config.headers!['x-token'] = token;
        }
        return config;
    }
);

export default plantaApi;
