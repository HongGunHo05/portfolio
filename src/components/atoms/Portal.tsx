import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
type PortalProps = React.PropsWithChildren<{}>

const Portal = ({ children }: PortalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setElement(document.getElementById('portal'))
  }, [])

  if (!element) {
    return <></>
  }

  return createPortal(children, element)
}

export default Portal
