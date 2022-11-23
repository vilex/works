import { WorkListItem } from './worklistItem'
import { div, css, ViElement } from 'vilex'

interface ListItemData {

}

export const WorkList = (list: ListItemData[]) => div(
  css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  `,
  list.map(item => WorkListItem())
)