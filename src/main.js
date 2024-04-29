import { createApp } from 'vue'
import './assets/css/index.scss'
import App from './App.vue'
const app = createApp(App)

// 引入路由
import router from './router'
app.use(router)

// 引入pinia
import pinia from "@/store/pinia.js";
app.use(pinia)

// ElementIcon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 自定义图标
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
app.component('svg-icon', SvgIcon)

app.mount('#app')
