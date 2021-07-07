import http from '@/config/axios';

// 获取首页列表
function getBandwidth() {
    return new Promise((resolve, reject) => {
        http("get", '/api/Usage/GetBandwidth', {}).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

export { getBandwidth }