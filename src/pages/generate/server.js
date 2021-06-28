import http from '@/config/axios';

// 获取首页列表
function getArticleList() {
    return new Promise((resolve, reject) => {
        http("get", '/article/home/index').then(res => {
            resolve(res);
        }, error => {
            console.log("网络异常~", error);
            reject(error)
        })
    })
}

export { getArticleList }