import {createPortal} from 'react-dom'
import PropTypes, {InferProps} from 'prop-types'
import { useEffect } from 'react'

function Modal({children}:InferProps<typeof Modal.propTypes>) {
  const root = document.getElementById('portal')
  const element = document.createElement('div')
  useEffect(() => {
    root?.appendChild(element)
    return () => {root?.removeChild(element)}
  },[element, root])
  
  return createPortal(children, element)
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
}

export default Modal