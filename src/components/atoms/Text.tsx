import React, { HTMLAttributes } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { useTheme } from '@emotion/react'

export type TextProps = React.PropsWithChildren<
  {
    bold?: boolean
  } & HTMLMotionProps<'span'>
>

const Text = ({ children, bold, ...props }: TextProps) => {
  const theme = useTheme()

  return (
    <motion.span
      css={{
        fontWeight: bold ? 'bold' : 'normal',
        whiteSpace: 'break-spaces',
        color: theme.colors.black,
      }}
      {...props}
    >
      {children}
    </motion.span>
  )
}
export default Text
