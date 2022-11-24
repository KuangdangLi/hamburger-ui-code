import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import Doc from  './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes:[
    {path:'/',component: Home},
    {path:'/doc',component: Doc,children:[
        {path:'switch',component: SwitchDemo},
        {path:'dialog',component: DialogDemo},
        {path:'button',component: ButtonDemo},
        {path:'tabs',component: TabsDemo},
      ]}
  ]
})
