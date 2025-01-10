import React from 'react'

interface ModalOverlayProps {
     isOpen: boolean,
     onClose: () => void
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ isOpen, onClose }) => {
     return (
          <div onClick={onClose}
               className={`fixed inset-0 bg-black/60 transition-all duration-300
                    ${isOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none z-0'}`}
          />
     )
}

export default ModalOverlay