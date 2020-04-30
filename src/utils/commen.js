import { Indicator } from 'mint-ui'
export default {
  install(Vue){
    Vue.prototype.toPage = function(pageName,data={},showAnimation='pop-in'){  // 页面跳转
       if(window.plus){ // 移动端
          let path = `/index.html#/${pageName}`
          if(Object.keys(data).length!==0){ // 有传参
            path+='?'
            for(let key in data){
              path = path+key+'='+data[key]+'&'
            }
            path = path.substring(0,path.length-1);
          }
          let wv = window.plus.webview.create(path,pageName,{});
          wv.show(showAnimation)
       }else{ // 兼容H5
          this.$router.push({
            path : pageName,
            query : data
          })
       }
    }
    Vue.prototype.goBack = function(){ // 页面返回
      if(window.plus){
        let wv = window.plus.webview.currentWebview();
        wv.close();
      }else{
        window.history.go(-1);
      }
    }
    Vue.prototype.getUserTheme = function(){ // 获取用户主题   white或pink
      if(window.localStorage.getItem('userTheme')){
        return window.localStorage.getItem('userTheme');
      }
    }
    Vue.prototype.setUserTheme = function(str){ // 设置用户主题
      console.log(str)
      window.localStorage.setItem('userTheme',str)
      this.$forceUpdate();
    }
    Vue.prototype.showWaiting = function(str=''){
      let toastObj = {
        spinnerType: 'fading-circle'
      }
      if(str!==''){
        toastObj['text'] = str
      }
      Indicator.open(toastObj);
    }
    Vue.prototype.closeWaiting = function(){
      Indicator.close()
    }
    Vue.prototype.setNavigatorColor = function(bool){
      if(window.plus){
        if(bool){ // 设置为粉色
          window.plus.navigator.setStatusBarStyle('light');
          window.plus.navigator.setStatusBarBackground('#FB7299')
        }else{ // 设置成白色
          window.plus.navigator.setStatusBarStyle('dark');
          window.plus.navigator.setStatusBarBackground('#FFFFFF')
        }
      }else{
        document.addEventListener('plusready',()=>{
          if(bool){ // 设置为粉色
            window.plus.navigator.setStatusBarStyle('light');
            window.plus.navigator.setStatusBarBackground('#FB7299')
          }else{ // 设置成白色
            window.plus.navigator.setStatusBarStyle('dark');
            window.plus.navigator.setStatusBarBackground('#FFFFFF')
          }
        })
      }
    }
    Vue.prototype.getUserInfo = function(){ // 获取用户信息
      let userInfo = window.localStorage.getItem('userInfo');
      if(userInfo){
        return JSON.parse(userInfo)
      }else{
        return {};
      }
    }
    Vue.prototype.setUserInfo = function(userInfo){ // 设置用户信息
      if(userInfo===null){
         window.localStorage.setItem('userInfo','')
      }else{
        window.localStorage.setItem('userInfo',JSON.stringify(userInfo))
      }
    }
  }
}