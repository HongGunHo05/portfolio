import styled from '@emotion/styled'
import { TextProps } from './Text'

export const Span = styled.span<TextProps>`
  white-space: break-spaces;
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => (props.bold ? 'bold' : 'medium')};
`
