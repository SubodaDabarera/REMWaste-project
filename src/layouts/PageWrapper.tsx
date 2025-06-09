import React from 'react'

function PageWrapper({children}: any) {
  return (
    <div className='m-auto bg-green-500 max-w-7xl'>{children}</div>
  )
}

export default PageWrapper