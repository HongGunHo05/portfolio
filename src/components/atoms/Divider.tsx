import { CSSObject } from '@emotion/react'

type DividerProps = {
  style?: CSSObject
}

const Divider = ({ style }: DividerProps) => (
  <div
    css={{
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      ...style,
    }}
  />
)

export default Divider
