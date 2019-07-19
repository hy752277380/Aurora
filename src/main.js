import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import ajax from './config/http'
import "iview/dist/styles/iview.css";

Vue.use(iView);
Vue.prototype.$axios = ajax;
Vue.config.productionTip = false;

// eslint-disable-next-line
/* eslint-disable */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
