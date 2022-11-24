import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter,createWebHashHistory} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
  ]
})

createApp(App).mount('#app')
