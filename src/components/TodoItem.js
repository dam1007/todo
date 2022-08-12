import React from 'react'
import { AiFillCheckSquare, AiOutlineCheckSquare } from 'react-icons/ai';
// 목록 하나의 아이템 담당

function TodoItem({todo}) {
  const {id, text, checked} = todo;
  return (
    <div className='TodoItem'>
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}
        <div>{text}</div>
      </div>
    </div>
  )
}

export default TodoItem