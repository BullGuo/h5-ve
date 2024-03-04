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
    extraProps: { type: 'textarea', autosize: { minRows: 2, maxRows: 6 } },
    eventName: 'input',
  },
  fontSize: {
    component: 'el-input-number',
    title: '字号',
    extraProps: { min: 12 },
    initTransform: value => Number.parseInt(value),
    unInitTransform: value => `${value}px`,
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
  fontWeight: {
    component: 'icon-switch',
    title: '加粗',
    valueName: 'isActive',
    extraProps: { tooltipText: '加粗', icon: 'i-ic:round-format-bold' },
    initTransform: value => value === 'bold',
    unInitTransform: value => value ? 'bold' : '',
  },
  fontStyle: {
    component: 'icon-switch',
    title: '斜体',
    valueName: 'isActive',
    extraProps: { tooltipText: '斜体', icon: 'i-ic:round-format-italic' },
    initTransform: value => value === 'italic',
    unInitTransform: value => value ? 'italic' : '',
  },
  textDecoration: {
    component: 'icon-switch',
    title: '下划线',
    valueName: 'isActive',
    extraProps: { tooltipText: '下划线', icon: 'i-ic:round-format-underlined' },
    initTransform: value => value === 'underline',
    unInitTransform: value => value ? 'underline' : '',
  },
  lineHeight: {
    component: 'el-slider',
    title: '行高',
    extraProps: { min: 1, max: 3, step: 0.1 },
    eventName: 'input',
  },
  textAlign: {
    component: 'el-radio-group',
    subComponent: 'el-radio-button',
    title: '对齐',
    subOptions: [{ label: '左', value: 'left' }, { label: '中', value: 'center' }, { label: '右', value: 'right' }],
  },
  color: {
    component: 'color-picker',
    title: '文字颜色',
    valueName: 'value',
  },
  backgroundColor: {
    component: 'color-picker',
    title: '背景颜色',
    valueName: 'value',
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
