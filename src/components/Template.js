import React from 'react'

function Template({children}) {
  return (
    <div className='template'>
        <div className='title'>오늘의 할 일 (0)</div>
        {children}
    </div>
  )
}

export default Template