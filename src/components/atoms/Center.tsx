import React, { HTMLAttributes } from 'react'

type CenterType = {
  type?: 'fixed'
} & HTMLAttributes<HTMLDivElement>

const Center = ({
  children,
  type,
  ...props
}: React.PropsWithChildren<CenterType>) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...(type === 'fixed'
          ? {
              position: 'fixed',
              margin: '0 auto',
              height: '100%',
              left: '0',
              right: '0',
            }
          : {}),
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Center
