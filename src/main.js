// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from "axios";

axios.defaults.baseURL='http://10.167.20.50:8080/jeecg-boot';
axios.interceptors.request.use(
    config => {
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        let token = localStorage.getItem('X-Access-Token')
        if (!config.headers.hasOwnProperty('X-Access-Token') && token) {
            config.headers['X-Access-Token'] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });
Vue.use(Vant);
Vue.config.productionTip = false
    // Vue.prototype.webscoket = function (){
    //       return "10.167.20.2";
    //   }()




/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})