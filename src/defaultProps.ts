import type { commonDefaultType, textDefaultType } from '~/types'

export const commonDefaultProps: commonDefaultType = {
  actionType: '',
  url: '',
  height: '',
  width: '',
  paddingLeft: '',
  paddingRight: '',
  paddingTop: '',
  paddingBottom: '',
  borderStyle: '',
  borderColor: '',
  borderWidth: '',
  borderRadius: '',
  position: '',
  left: '',
  right: '',
  top: '',
}

export const textDefaultProps: textDefaultType = {
  text: '',
  fontSize: '',
  fontFamily: '',
  fontWeight: '',
  fontStyle: '',
  textDecoration: '',
  lineHeight: '',
  textAlign: '',
  color: '',
  backgroundColor: '',
  ...commonDefaultProps,
}
