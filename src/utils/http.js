import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if(window.localStorage.getItem('userToken')){
    config.headers['userToken'] = window.localStorage.getItem('userToken')
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

const fetch = function(type,url,data){ // AJAX封装
  let axiosObj = {
    timeout : 10000,
    headers : {
      userMaker : 'ych'
    }
  }
  axiosObj.method = type;
  axiosObj.url = url;
  if(type==='GET'){
    axiosObj.params = data
  }else{
    axiosObj.data = data
  }
  this.showWaiting()
  return new Promise((resolve,reject) => {
    axios(axiosObj).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    }).finally(()=>{
      this.closeWaiting()
    })
  })
}

export default fetch