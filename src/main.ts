import { WorkList } from './worklist/worklist'
import { createApp } from 'vilex'

function ShowWorkList() {
  const list = new Array(20).fill({})
  return WorkList(list)
}

createApp(ShowWorkList).mount('#app')