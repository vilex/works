import { div, css, img, span, p } from 'vilex'

const ItemStyle = css`
  width: 280px;
  margin-left: 14px;
  margin-right: 14px;
  margin-bottom: 20px;
  color: #999999;
  & .logo {
    font-size: 14px;
    font-weight: 800;
  }
`
export const WorkListItem = () => div(
  ItemStyle,
  div(
    span('Vilex', ['logo'])
  ),
  p(
    `使用 vilex 快速构建 web 应用程序`
  )
)