export interface ComponentData<T = { [key: string]: any }> {
  props: T
  id: string
  name: string
  // 图层是否隐藏
  isHidden?: boolean
  // 图层是否锁定
  isLocked?: boolean
  // 图层名称
  layerName?: string
}

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

export interface DynamicComponent {
  [key: string]: Component
}

export interface commonDefaultType {
  actionType?: string
  url?: string
  height?: string
  width?: string
  paddingLeft?: string
  paddingRight?: string
  paddingTop?: string
  paddingBottom?: string
  borderStyle?: string
  borderColor?: string
  borderWidth?: string
  borderRadius?: string
  position?: string
  left?: string
  right?: string
  top?: string
}

export interface textDefaultType extends commonDefaultType {
  text?: string
  fontSize?: string
  fontFamily?: string
  fontWeight?: string
  fontStyle?: string
  textDecoration?: string
  lineHeight?: number
  textAlign?: string
  color?: string
  backgroundColor?: string
  tag?: string
}

export interface PropToForm {
  component: string
  subComponent?: string
  value?: any
  extraProps?: {
    [key: string]: any
  }
  title: string
  subOptions?: { label: string, value: any, labelVNode?: VNode }[]
  valueName?: string
  eventName?: string
  events?: { [key: string]: (v: string) => void }
  // 将初始值转换成组件所需要的格式
  initTransform?: (v: any) => any
  // 将组件抛出的值转换成初始值格式
  unInitTransform?: (v: any) => any
}

export type PropsToForm = {
  [P in keyof textDefaultType]: PropToForm
}
