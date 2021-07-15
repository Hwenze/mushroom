import http from '@/config/axios';

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

// 获取折扣后付款
function proxyBuy(params) {
    return new Promise((resolve, reject) => {
        http("get", '/api/ProxyBuy/Get', params).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}


// 获取折扣后价格
function discountInfo(params) {
    return new Promise((resolve, reject) => {
        http("get", '/api/ProxyBuy/DiscountInfo', params).then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

export { getLoadAll, proxyBuy, discountInfo }