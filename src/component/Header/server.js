import http from '@/config/axios';

// 获取token
function getToken(code) {
    return new Promise((resolve, reject) => {
        http("get", '/api/Check/DiscordLogin', {code: code}).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

export { getToken }