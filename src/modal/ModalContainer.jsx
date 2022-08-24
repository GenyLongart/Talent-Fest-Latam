import React from 'react'
import ModalContent from './ModalContent'

const ModalContainer = ({product}) => {
  return (
    <div className='h-[384px] w-[760px]'>
      <ModalContent product = {product}/>
    </div>
  )
}

export default ModalContainer