/**
 * 网络请求配置
 */
import axios from "axios";
import QS from 'qs';
import { localStorage } from "@/utils/utils";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "https://mushroomproxy.com:81";

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        config.data = QS.stringify(config.data);
        config.headers = {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            // "X-Token": localStorage.getStorage("token") || '',
            "X-Token": '',
            // "X-Token": '1TeAnDEKSZe4olAAV4SNfD5QXMABgD',
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        console.log(22222, response)
        if (response && response.status === 200) {
            return response;
        } else {
            return {
                data: {
                    code: 401,
                    message: "token过期"
                },
                status: 401
            };
        }
    },
    (error) => {
        console.log("请求出错：", error);
        const err = JSON.parse(JSON.stringify(error));
        if(err.message.indexOf('401')!== -1){
            console.log(4444444)
            // window.location.href = 'https://discord.com/oauth2/authorize?client_id=782123824727588864&redirect_uri=http://localhost:3000/mushroom&response_type=code&scope=identify%20guilds.join'
        }
    }
);

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            msag(error);
            reject(error);
        });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(
            (response) => {
                //关闭进度条
                resolve(response.data);
            },
            (err) => {
                reject(err);
            }
        );
    });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.patch(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data).then(
            (response) => {
                resolve(response.data);
            },
            (err) => {
                msag(err);
                reject(err);
            }
        );
    });
}

const axiosFn = (fecth, url, param) => {
    return new Promise((resolve, reject) => {
        switch (fecth) {
            case "get":
                get(url, param).then(function (response) {
                    resolve(response);
                }).catch(function (error) {
                    console.log("get request GET failed.", error);
                    reject(error);
                });
                break;
            case "post":
                post(url, param)
                    .then(function (response) {
                        resolve(response);
                    })
                    .catch(function (error) {
                        console.log("get request POST failed.", error);
                        reject(error);
                    });
                break;
            default:
                break;
        }
    });
}

//失败提示
function msag(err) {
    console.log(err,56565656)
    if (err && err.response) {
        switch (err.response.status) {
            case 400:
                console.log(err.response.data.error.details);
                break;
            case 401:
                console.log("未授权，请登录");
                break;

            case 403:
                console.log("拒绝访问");
                break;

            case 404:
                console.log("请求地址出错");
                break;

            case 408:
                console.log("请求超时");
                break;

            case 500:
                console.log("服务器内部错误");
                break;

            case 501:
                console.log("服务未实现");
                break;

            case 502:
                console.log("网关错误");
                break;

            case 503:
                console.log("服务不可用");
                break;

            case 504:
                console.log("网关超时");
                break;

            case 505:
                console.log("HTTP版本不受支持");
                break;
            default:
        }
    }
}

//统一接口处理，返回数据
export default axiosFn