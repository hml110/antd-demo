import Vue from "vue";
import Antd from "ant-design-vue";

import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import * as echarts from "echarts";

import less from "less";

//引入 iconfont
import "./assets/iconfont/iconfont.js";
//全局注册组件
import SvgIcon from "./components/Inconfont/MyIconfont.vue";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(less);
Vue.component("svg-icon", SvgIcon);

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    //定义全局事件总线
    Vue.prototype.$bus = this;
    //挂载Echarts插件
    Vue.prototype.$echarts = echarts;
  },
}).$mount("#app");
