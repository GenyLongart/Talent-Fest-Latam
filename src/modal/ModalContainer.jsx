import React from 'react'
import ModalContent from './ModalContent'

const ModalContainer = ({product, location}) => {
  return (
    <div className='h-[384px] w-[760px]'>
      <ModalContent product = {product} location={location}/>
    </div>
  )
}

export default ModalContainer