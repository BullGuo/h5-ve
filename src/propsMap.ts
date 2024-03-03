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
    extraProps: { min: 1, max: 3, step: 0.1 },
  },
  color: {
    component: 'el-color-picker',
    title: '颜色',
  },
  textAlign: {
    component: 'el-radio-group',
    subComponent: 'el-radio-button',
    title: '对齐方式',
    subOptions: [{ label: '左', value: 'left' }, { label: '中', value: 'center' }, { label: '右', value: 'right' }],
  },
  fontFamily: {
    component: 'el-select',
    subComponent: 'el-option',
    title: '字体',
    subOptions: [
      { label: '', value: '无' },
      { label: '宋体', value: '"SimSun","STSong"' },
      { label: '黑体', value: '"SimHei","STHeiti"' },
      { label: '楷体', value: '"KaiTi","STKaiti"' },
      { label: '仿宋', value: '"FangSong","STFangsong"' },
    ],
  },
}
