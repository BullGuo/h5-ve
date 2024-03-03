export interface ComponentData<T = { [key: string]: any }> {
  props: T
  id: string
  name: string
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
  value?: any
  extraProps?: {
    [key: string]: string
  }
  title: string
  initTransform?: (v: any) => any
}

export type PropsToForm = {
  [P in keyof textDefaultType]: PropToForm
}
