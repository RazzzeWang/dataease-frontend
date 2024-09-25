/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-09-23 15:16:29
 * @Function: Please Input Function
 */
import { createApp } from 'vue'
import '@/style/index.less'
import 'normalize.css/normalize.css'
import '@antv/s2/dist/style.min.css'
import App from './App.vue'
import { setupI18n } from '@/plugins/vue-i18n'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'
import { setupElementPlus, setupElementPlusIcons } from '@/plugins/element-plus'
// 注册数据大屏组件
import { setupCustomComponent } from '@/custom-component'
import { installDirective } from '@/directive'
import '@/utils/DateUtil'
import '@/permission'
const setupAll = async () => {
  const app = createApp(App)
  installDirective(app)
  await setupI18n(app)
  setupStore(app)
  setupRouter(app)
  setupElementPlus(app)
  setupCustomComponent(app)
  setupElementPlusIcons(app)
  app.mount('#app')
}

setupAll()
