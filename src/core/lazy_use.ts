import { App } from 'vue'
import {
  Button
} from 'ant-design-vue'

export function lazy_use(app: App<Element>):void {
  app.use(Button)
}
