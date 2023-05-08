import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { ConfigProvider } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.variable.min.css';

import './index.css'
import './public/reset.css'

const app = createApp(App);
app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info)
  // 处理错误
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
}
app.use(store).use(router).use(ConfigProvider).use(Antd).mount("#app");
