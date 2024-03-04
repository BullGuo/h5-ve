import type { PropsToForm } from '~/types'

const fontFamilyArr = [
  { label: '宋体', value: '"SimSun","STSong"' },
  { label: '黑体', value: '"SimHei","STHeiti"' },
  { label: '楷体', value: '"KaiTi","STKaiti"' },
  { label: '仿宋', value: '"FangSong","STFangsong"' },
]

const fontFamilyRes = fontFamilyArr.map(({ label, value }) => {
  return {
    value,
    label,
    labelVNode: h('span', { style: { fontFamily: value } }, label),
  }
})

export const mapPropsToForm: PropsToForm = {
  text: {
    component: 'el-input',
    title: '文本',
    extraProps: { type: 'textarea', autosize: true },
    eventName: 'input',
  },
  fontSize: {
    component: 'el-input-number',
    title: '字号',
    extraProps: { min: 12 },
    initTransform: value => Number.parseInt(value),
    unInitTransform: value => `${value}px`,
  },
  lineHeight: {
    component: 'el-slider',
    title: '行高',
    extraProps: { min: 1, max: 3, step: 0.1 },
    eventName: 'input',
  },
  color: {
    component: 'color-picker',
    title: '字体颜色',
    valueName: 'value',
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
    extraProps: { placeholder: '' },
    subOptions: [
      { label: '无', value: '' },
      ...fontFamilyRes,
    ],
  },
  width: {
    component: 'el-input-number',
    title: '长度',
    initTransform: value => Number.parseInt(value),
    unInitTransform: value => `${value}px`,
  },
  height: {
    component: 'el-input-number',
    title: '高度',
    initTransform: value => Number.parseInt(value),
    unInitTransform: value => `${value}px`,
  },
}
