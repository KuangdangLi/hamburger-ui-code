import Dialog from "./Dialog.vue"
import {createApp, h} from 'vue';

export const openDialog = (options)=>{
  const {title,content,ok,cancel,visible,closeOnClickOverClay} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = ()=>{
    app.unmount()
    div.remove()
  }
  const app = createApp({
    render(){
      return h(Dialog,{ok,cancel,visible,closeOnClickOverClay,
          'onUpdate:visible':(newVisible)=>{
              if(newVisible===false){
                close()
              }
          }},
        {title,content})
    }
  })
  app.mount(div)

}