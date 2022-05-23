import http from '@/config/axios';

// 获取总流量接口
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

// 获取历史订单列表
function getLoadAll() {
    return new Promise((resolve, reject) => {
        http("get", '/api/OrderList/LoadAll', {}).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

// 获取代理内容
function getGenerateProxy(params) {
    return new Promise((resolve, reject) => {
        http("post", '/api/ProxyGenerage/GenerateProxyNew', params).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

export { getBandwidth, getGenerateProxy, getLoadAll }