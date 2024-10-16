import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { ListResponse } from '../types.js';
declare const _default: {
    get: (http: AxiosInstance, url: string, config: AxiosRequestConfig) => Promise<ListResponse<any> & {
        _links: any;
    }>;
    getOne: (http: AxiosInstance, url: string, config?: AxiosRequestConfig) => Promise<any>;
    getAllByPage: (http: AxiosInstance, url: string, { params }: AxiosRequestConfig) => Promise<ListResponse<any>>;
    getAllBySearchAfter: (http: AxiosInstance, url: string, config?: AxiosRequestConfig) => Promise<ListResponse<any>>;
};
export default _default;
