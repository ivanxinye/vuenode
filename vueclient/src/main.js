// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

// 在vue中，可以使用代理去实现跨域，但是每次新地址都需要配置，还是比较麻烦，这里我们采用直接配置跨域，一次配置就可以一劳永逸。
import axios from 'axios';//引入axios组件
axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL = "http://localhost:3000"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if(response.data.err){
      alert(response.data.err);
      return Promise.reject(response);
  }else if(response.data.redirect){
      alert("请先登录..");
      window.location.href = "#/"; //跳转到登录页
      return Promise.reject(response);
  }else{
      //返回response继续执行后面的操作
      return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

//use md5 to encode data 
import md5 from 'blueimp-md5'
Vue.prototype.$hash = md5;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
