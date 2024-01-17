import {createPortal} from 'react-dom'
import { useEffect } from 'react'

function Modal({children}:{children: React.ReactNode}) {
    
  const root = document.getElementById('portal')
  const element = document.createElement('div')

  useEffect(() => {
    root?.appendChild(element)
    return () => {root?.removeChild(element)}
  },[element, root])
  
  return createPortal(children, element)
}

export default Modal