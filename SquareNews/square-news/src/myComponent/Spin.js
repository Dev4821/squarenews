import React from 'react'
import loading from './Search.gif'
const Spin = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" height={100} />
    </div>
  )
}

export default Spin
