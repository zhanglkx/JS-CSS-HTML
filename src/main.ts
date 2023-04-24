import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import './index.css'
import './public/reset.css'

const app = createApp(App);
app.use(store).use(router).use(Antd).mount("#app");
