/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = (props) => {
  const { id, text, date, handleDeleteNote } = props
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' onClick={() => handleDeleteNote(id)} />
      </div>
    </div>
  )
}

export default Note
