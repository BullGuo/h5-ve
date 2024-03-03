import type { PropsToForm } from '~/types'

export const mapPropsToForm: PropsToForm = {
  text: {
    component: 'el-input',
    title: '文本',
  },
  fontSize: {
    component: 'el-input-number',
    title: '字号',
    initTransform: value => Number.parseInt(value),
  },
  lineHeight: {
    component: 'el-slider',
    title: '行高',
  },
  color: {
    component: 'el-color-picker',
    title: '颜色',
  },
}
